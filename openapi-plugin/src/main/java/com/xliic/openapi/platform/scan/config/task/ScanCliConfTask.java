package com.xliic.openapi.platform.scan.config.task;

import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;
import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

public class ScanCliConfTask extends ScanConfTask {

    private static final String API_INVALID_MSG = "Your API has structural or semantic issues in its OpenAPI format. " +
            "Run Security Audit on this file and fix these issues first.";

    private VirtualFile tmpDir = null;
    private final boolean useAuditWithCli;
    
    public ScanCliConfTask(@NotNull Project project,
                           @NotNull BundleResult bundle,
                           @NotNull String scanConfPath,
                           @NotNull Callback callback,
                           boolean useAuditWithCli) {
        super(project, bundle, scanConfPath, callback);
        this.useAuditWithCli = useAuditWithCli;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            String oas = bundle.getJsonText();
            if (useAuditWithCli) {
                AuditCliResult result = CliUtils.runAuditWithCliBinary(project, oas, false, progress);
                if (result.hasError()) {
                    if (result.getStatusCode() == 3 && "limits_reached".equals(result.getStdOut())) {
                        ScanConfigUtils.offerUpgrade(project);
                    } else {
                        throw new Exception("Unexpected error running API Security Testing Binary Audit: " + result);
                    }
                    return;
                }
                String reportText = Objects.requireNonNull(result.getReport());
                Node report = Objects.requireNonNull(Utils.getJsonAST(reportText));
                if (!"valid".equals(report.getChildValueRequireNonNull("openapiState"))) {
                    throw new Exception(API_INVALID_MSG);
                }
            } else {
                collectionId = ScanUtils.findOrCreateTempCollection();
                apiId = ScanUtils.createTempAPI(collectionId, oas);
                progress.setText(RUNNING_SECURITY_AUDIT);
                ScanUtils.auditTempAPI(getProject(), apiId);
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
            if (apiId != null) {
                ScanUtils.deleteAPI(apiId);
            }
            if (collectionId != null) {
                ScanUtils.clearTempApis(collectionId);
            }
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
