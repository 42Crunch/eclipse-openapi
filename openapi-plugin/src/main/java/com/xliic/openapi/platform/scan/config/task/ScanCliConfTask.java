package com.xliic.openapi.platform.scan.config.task;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Objects;

import static com.xliic.openapi.utils.FileUtils.*;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

public class ScanCliConfTask extends ScanConfTask {

    private static final String API_INVALID_MSG = "Your API has structural or semantic issues in its OpenAPI format. " +
            "Run Security Audit on this file and fix these issues first.";

    private VirtualFile tmpDir = null;

    public ScanCliConfTask(@NotNull Project project,
                           @NotNull String path,
                           @NotNull BundleResult bundle,
                           @NotNull String scanConfPath,
                           @NotNull Callback callback) {
        super(project, path, bundle, scanConfPath, callback);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            String oas = bundle.getJsonText();
            AuditCliResult result = CliUtils.runAuditWithCliBinary(project, oas, false, progress);
            if (result.hasError()) {
                if (result.getStatusCode() == 3 && "limits_reached".equals(result.getStdOut())) {
                    ScanConfigUtils.offerUpgrade(project);
                } else {
                    throw new Exception("Unexpected error running CLI Audit: " + result);
                }
                return;
            }
            String reportText = Objects.requireNonNull(result.getReport());
            Node report = Objects.requireNonNull(Utils.getJsonAST(reportText));
            if (!"valid".equals(report.getChildValueRequireNonNull("openapiState"))) {
                throw new Exception(API_INVALID_MSG);
            }
            tmpDir = createTempDirectory(project, "scan");
            VirtualFile tmpFile = writeFile(project, tmpDir, "openapi.json", oas);
            if (!FileUtils.exists(scanConfPath)) {
                ScanConfigUtils.createScanConf(project, scanConfPath, "");
            }
            String cli = CliUtils.getCli();
            ExecUtils.asyncExecFile(cli,
                new String[] {
                    "scan",
                    "conf",
                    "generate",
                    "--output-format",
                    "json",
                    "--output",
                    scanConfPath,
                    tmpFile.getPath()
                }, tmpDir);
            VirtualFile scanFile = LocalFileSystem.getInstance().findFileByIoFile(new File(scanConfPath));
            if (scanFile == null) {
                throw new Exception("Failed to find config " + scanConfPath);
            }
            // Must always refresh before reading if files are updated externally
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(scanFile));
            String config = Utils.getTextFromFile(scanFile.getPath(), true);
            if (config == null) {
                throw new Exception("Failed to read config " + scanConfPath);
            }
            callback.setDone(oas, config, true);
        } catch (Exception e) {
            callback.setRejected(e);
        } finally {
            try {
                if (tmpDir != null) {
                    removeFile(project, tmpDir,"openapi.json");
                    removeDir(project, tmpDir);
                }
            } catch (IOException ignored) {
            }
            progress.cancel();
        }
    }
}
