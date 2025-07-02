package com.xliic.openapi.report;

import static com.xliic.openapi.utils.FileUtils.join;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.actions.ExportReportAction;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.Utils;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

import static com.xliic.openapi.services.AuditService.EXPORT_TEMP_DIR;

public class AuditExportReportAction extends ExportReportAction {

    public AuditExportReportAction() {
        super(EXPORT_TEMP_DIR, "Export audit report", "No audit report found for this document");
    }

    @Override
    public @Nullable File getTempFile(@NotNull Project project, @NotNull VirtualFile selectedFile) {
        Audit report = AuditService.getInstance(project).getAuditReport(selectedFile.getPath());
        String tempFile = Objects.requireNonNull(report.getTempFile());
        try {
            VirtualFile tmpDir = createTempDirectory(project, EXPORT_TEMP_DIR, false);
            return new File(join(tmpDir.getPath(), tempFile));
        } catch (IOException e) {
            return null;
        }
    }

    @Override
    public boolean isTempFileSaved(@NotNull Project project, @NotNull VirtualFile selectedFile) {
        Audit report = AuditService.getInstance(project).getAuditReport(selectedFile.getPath());
        return report != null && report.isTempFileSaved();
    }
    
    @Override
    public @Nullable VirtualFile getSelectedFile(@NotNull Project project) {
        return Utils.getSelectedFile(project);
    }
}
