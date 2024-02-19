package com.xliic.openapi.platform.scan.task;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static com.xliic.openapi.report.task.AuditCliTask.UPGRADE_WARN_LIMIT;
import static com.xliic.openapi.utils.FileUtils.*;
import static com.xliic.openapi.utils.MsgUtils.notifyLimit;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

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

    public ScanCliTask(@NotNull Project project, @NotNull String tabId, @NotNull ScanRunConfig runConfig, @NotNull ScanRunTask.Callback callback) {
        super(project, "Running Conformance Scan using 42c-ast binary", false);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
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
                String output = ExecUtils.asyncExecFile(cli,
                        new String[]{
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
                                "--enrich=false",
                                "--is-operation",
                                "--token",
                                token
                        }, scanTmpDir, env);
                Node out = Utils.getJsonAST(output);
                if (out != null) {
                    long remainingPerOperationScan = Long.parseLong(out.getChildValueRequireNonNull("remainingPerOperationScan"));
                    if (remainingPerOperationScan < UPGRADE_WARN_LIMIT) {
                        notifyLimit(project, remainingPerOperationScan, "per-operation Conformance Scans");
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
