package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.report.task.AuditCliTask.UPGRADE_WARN_LIMIT;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.MsgUtils.notifyScansLimit;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;
import static com.xliic.openapi.cli.CliUtils.setProxyEnv;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Endpoints;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class ScanCliTask extends Task.Backgroundable {

    @NotNull
    protected final Project project;
    @NotNull
    protected final ScanRunConfig runConfig;
    @NotNull
    protected final ScanRunTask.Callback callback;
    @NotNull
    protected final ScanLogger logger;
    @Nullable
    private VirtualFile scanTmpDir = null;
    private final boolean isFullScan;

    public ScanCliTask(@NotNull Project project,
    		           @NotNull String tabId, 
    		           @NotNull ScanRunConfig runConfig, 
    		           @NotNull ScanRunTask.Callback callback, 
    		           boolean isFullScan) {
        super(project, "Running conformance scan using 42Crunch API security testing binary", false);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
        this.isFullScan = isFullScan;
        logger = new ScanLogger(project, tabId);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        log(progress, "Running Conformance Scan using 42c-ast binary");
        EnvService envService = EnvService.getInstance(project);
        Environment myEnv = envService.getEnv();
        Map<String, String> env = new HashMap<>();
        for (Map.Entry<String, String> entry : runConfig.getEnv().entrySet()) {
            env.put(entry.getKey(), myEnv.replace(entry.getValue()));
        }
        try {
            scanTmpDir = createTempDirectory(project, "scan");
            writeFile(project, scanTmpDir, "openapi.json", runConfig.getRawOas());
            writeFile(project, scanTmpDir, "scanconf.json", runConfig.getConfig());
            log(progress, "Wrote scan configuration to: " + scanTmpDir.getPath());
            String cli = CliUtils.getCli();
            log(progress, "Running scan using: " + cli);
            String outputPath = Paths.get(scanTmpDir.getPath(), "report.json").toString();

            // First, validate the scanconf against the OpenAPI
            List<String> validateArgs = new LinkedList<>(Arrays.asList(
                "scan", "conf", "validate", "openapi.json", "--conf-file", "scanconf.json"
            ));
            String validateOutput = ExecUtils.asyncExecFile(cli, validateArgs, scanTmpDir, env);
            Node validateReport = Utils.getJsonAST(validateOutput);
            if (validateReport != null) {
                Node errors = validateReport.find("/report/errors");
                if (errors != null) {
                    logger.log("error", "Scan configuration has failed validation");
                    for (Node error : errors.getChildren()) {
                        logger.log("error", error.getValue());
                    }
                    logger.log("error", "Please fix the scan configuration and try again");
                    callback.cancel();
                    return;
                }
            }
            try {
            	List<String> args = new LinkedList<>(Arrays.asList(
                    "scan",
                    "run",
                    "openapi.json",
                    "--conf-file",
                    "scanconf.json",
                    "--output",
                    "report.json",
                    "--output-format",
                    "json",
                    "--verbose",
                    "error",
                    "--user-agent",
                    Utils.getUserAgent(),
                    "--enrich=false")
                );
                if (SettingsService.getInstance().useDevEndpoints()) {
                    args.add("--freemium-host");
                    args.add(Endpoints.getCliFreemiumdHost());
                }
                if (!isFullScan) {
                    args.add("--is-operation");
                }
                Credentials.Type type = Credentials.getCredentialsType();
                String serverUrl;
                if (type == Credentials.Type.AnondToken) {
                    args.add("--token");
                    args.add(Credentials.getAnonCredentials());
                    serverUrl = Endpoints.getFreemiumdUrl();
                } else {
                    PlatformConnection con = PlatformConnection.getOptions();
                    env.put("API_KEY", con.getApiToken());
                    env.put("PLATFORM_HOST", con.getPlatformUrl());
                    serverUrl = con.getPlatformUrl();
                    Logger.getInstance(ScanCliTask.class).debug("Setting PLATFORM_HOST environment variable to: " + serverUrl);
                }
                setProxyEnv(env, serverUrl, env.get("SCAN42C_HOST"));
                String output = ExecUtils.asyncExecFile(cli, args, scanTmpDir, env);
                Node out = Utils.getJsonAST(output);
                if (out != null) {
                	String value = out.getChildValue("remainingPerOperationScan");
                    if (value != null) {
                        long remainingValue = Long.parseLong(value);
                        if (remainingValue < UPGRADE_WARN_LIMIT) {
                            notifyScansLimit(project, remainingValue);
                        }
                    }
                    Node scanLogs = out.getChild("scanLogs");
                    if (scanLogs != null) {
                        for (Node logNode : scanLogs.getChildren()) {
                            String level = logNode.getChildValueRequireNonNull("level");
                            String message = logNode.getChildValueRequireNonNull("message");
                            logger.log(level, message);
                        }
                    }
                }
            } catch (ExecUtils.ExecException ex) {
            	Logger.getInstance(ScanCliTask.class).error("Error running Conformance Scan: " + ex);
                if (ex.getCode() == 3 && ex.isLimitsReached()) {
                    ApplicationManager.getApplication().invokeAndWait(() -> {
                        MsgUtils.offerUpgrade(project, isFullScan);
                        callback.cancel();
                    });
                } else {
                    throw new Exception("Unexpected error running Conformance Scan: " + ex);
                }
                return;
            }
            VirtualFile outputFile = LocalFileSystem.getInstance().findFileByIoFile(new File(outputPath));
            if (outputFile == null) {
                throw new Exception("Failed to find output " + outputPath);
            }
            // Must always refresh before reading if files are updated externally
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(outputFile));
            String scanConfPath = runConfig.getScanConfPath();
            log(progress, "Finished API Conformance Scan");
            callback.setDone(scanConfPath, new ScanReport(outputFile.toNioPath()));
        } catch (Exception e) {
        	Logger.getInstance(ScanCliTask.class).error("Error running Conformance Scan: " + e);
            callback.setRejected(e);
        } finally {
            try {
                if (scanTmpDir != null) {
                    removeFile(project, scanTmpDir,"openapi.json");
                    removeFile(project, scanTmpDir,"scanconf.json");
                }
            } catch (IOException ignored) {
            }
            progress.cancel();
        }
    }

    private void log(ProgressIndicator progress, String message) {
        progress.setText(message);
        logger.info(message);
    }
}
