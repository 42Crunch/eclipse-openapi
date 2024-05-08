package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.report.task.AuditCliTask.UPGRADE_WARN_LIMIT;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.MsgUtils.notifyLimit;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.*;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.ExecUtils;
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
        super(project, "Running Conformance Scan using 42c-ast binary", false);
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
            VirtualFile tmpFile = writeFile(project, scanTmpDir, "openapi.json", runConfig.getRawOas());
            VirtualFile tmpFile2 = writeFile(project, scanTmpDir, "scanconf.json", runConfig.getConfig());
            log(progress, "Wrote scan configuration to: " + scanTmpDir.getPath());
            String cli = CliUtils.getCli();
            log(progress, "Running scan using: " + cli);
            String outputPath = Paths.get(scanTmpDir.getPath(), "report.json").toString();
            String token = Credentials.getAnonCredentials();
            if (token == null) {
                PlatformConnection con = PlatformConnection.getOptions();
                token = con.getApiToken();
            }
            try {
            	List<String> args = new LinkedList<>(Arrays.asList(
                    "scan",
                    "run",
                    tmpFile.getPath(),
                    "--conf-file",
                    tmpFile2.getPath(),
                    "--output",
                    outputPath,
                    "--output-format",
                    "json",
                    "--verbose",
                    "error",
                    "--enrich=false")
                );
                if (!isFullScan) {
                    args.add("--is-operation");
                }
                Credentials.Type type = Credentials.getCredentialsType();
                if (type == Credentials.Type.AnondToken) {
                    args.add("--token");
                    args.add(token);
                } else {
                    String platformUrl = SettingsService.getInstance().getValue(URL);
                    if (!StringUtils.isEmpty(platformUrl)) {
                        env.put("PLATFORM_HOST", platformUrl);
                    }
                    String apiToken = SettingsService.getInstance().getValue(API_KEY, "");
                    if (!StringUtils.isEmpty(apiToken)) {
                        env.put("API_KEY", apiToken);
                    }
                }
                String output = ExecUtils.asyncExecFile(cli, args.toArray(new String[0]), scanTmpDir, env);
                Node out = Utils.getJsonAST(output);
                if (out != null) {
                    String value = out.getChildValue("remainingPerOperationScan");
                    if (value != null) {
                        long remainingPerOperationScan = Long.parseLong(value);
                        if (remainingPerOperationScan < UPGRADE_WARN_LIMIT) {
                            notifyLimit(project, remainingPerOperationScan, "per-operation Conformance Scans");
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
                if (ex.getCode() == 3 && "limits_reached".equals(ex.getStdOut())) {
                    ScanConfigUtils.offerUpgrade(project);
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
            String report = Objects.requireNonNull(Utils.getTextFromFile(outputPath, true));
            String scanConfPath = runConfig.getScanConfPath();
            log(progress, "Finished API Conformance Scan");
            callback.setDone(scanConfPath, new ScanReport(runConfig.getPath(), runConfig.getMethod(), report, runConfig.getRawOas()));
        } catch (Exception e) {
            callback.setRejected(e);
        } finally {
            try {
                if (scanTmpDir != null) {
                    removeFile(project, scanTmpDir,"openapi.json");
                    removeFile(project, scanTmpDir,"scanconf.json");
                    removeFile(project, scanTmpDir,"report.json");
                    removeDir(project, scanTmpDir);
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
