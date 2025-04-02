package com.xliic.openapi.report;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.actions.ExportReportAction;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.Utils;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Objects;

import static com.xliic.openapi.services.AuditService.EXPORT_TEMP_DIR;

public class AuditExportReportAction extends ExportReportAction {

    public AuditExportReportAction() {
        super(EXPORT_TEMP_DIR, "Export audit report", "No audit report found for this document");
    }

    @Override
    public @NotNull String getTempFile(@NotNull Project project, @NotNull VirtualFile selectedFile) {
        Audit report = AuditService.getInstance(project).getAuditReport(selectedFile.getPath());
        return Objects.requireNonNull(report.getTempFile());
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
