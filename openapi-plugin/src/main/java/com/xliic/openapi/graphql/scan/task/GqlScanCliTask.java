package com.xliic.openapi.graphql.scan.task;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanRunTask;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.tags.TagsUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.*;

import static com.xliic.openapi.cli.CliUtils.applyFreemiumHost;
import static com.xliic.openapi.cli.CliUtils.applyProxyAndCredentials;
import static com.xliic.openapi.report.task.AuditCliTask.UPGRADE_WARN_LIMIT;
import static com.xliic.openapi.tags.TagsUtils.applyTags;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.MsgUtils.notifyScansLimit;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

public class GqlScanCliTask extends Task.Backgroundable {

    private static final String INPUT_GRAPHQL = "input.graphql";
    private static final String SCANCONF_JSON = "scanconfig.json";

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
    @NotNull
    private final Credentials.Type type;
    @NotNull
    private final String filePath;

    public GqlScanCliTask(@NotNull Project project,
                          @NotNull String tabId,
                          @NotNull ScanRunConfig runConfig,
                          @NotNull String filePath,
                          @NotNull Credentials.Type type,
                          @NotNull ScanRunTask.Callback callback) {
        super(project, "Running conformance scan using 42Crunch API security testing binary", false);
        this.project = project;
        this.runConfig = runConfig;
        this.filePath = filePath;
        this.type = type;
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
            writeFile(project, scanTmpDir, INPUT_GRAPHQL, runConfig.getRawOas());
            writeFile(project, scanTmpDir, SCANCONF_JSON, runConfig.getConfig());
            log(progress, "Wrote scan configuration to: " + scanTmpDir.getPath());
            String cli = CliUtils.getCli();
            log(progress, "Running scan using: " + cli);
            String outputPath = Paths.get(scanTmpDir.getPath(), "report.json").toString();
            Set<String> tags = TagsUtils.getFullTagNames(project, type, filePath);
            try {
                List<String> args = new LinkedList<>(Arrays.asList(
                    "scan",
                    "run",
                    "--graphql",
                    INPUT_GRAPHQL,
                    "--conf-file",
                    SCANCONF_JSON,
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
                // Graphql scan does not support it, don't set it for now
                // if (!isFullScan) {
                //     args.add("--is-operation");
                // }
                applyTags(args, tags);
                applyFreemiumHost(args);
                applyProxyAndCredentials(args, env);
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
                Logger.getInstance(GqlScanCliTask.class).error("Error running Conformance Scan: " + ex);
                if (ex.getCode() == 3 && ex.isLimitsReached()) {
                    ApplicationManager.getApplication().invokeAndWait(() -> {
                        MsgUtils.offerUpgrade(project);
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
            callback.setRejected(e);
        } finally {
            try {
                if (scanTmpDir != null) {
                    removeFile(project, scanTmpDir, INPUT_GRAPHQL);
                    removeFile(project, scanTmpDir, SCANCONF_JSON);
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
