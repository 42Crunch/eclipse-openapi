package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.scan.ScanService.EXPORT_TEMP_DIR;

import java.io.File;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.actions.ExportReportAction;

public class ScanExportReportAction extends ExportReportAction {

    public ScanExportReportAction() {
        super(EXPORT_TEMP_DIR, "Export scan report", "No scan report found for this document");
    }

    @Override
    public @Nullable File getTempFile(@NotNull Project project, @NotNull VirtualFile selectedFile) {
        ScanExport scanExport = ScanService.getInstance(project).getExportData(selectedFile.getPath());
        return Objects.requireNonNull(scanExport).getTempFile();
    }

    @Override
    public boolean isTempFileSaved(@NotNull Project project, @NotNull VirtualFile selectedFile) {
        ScanExport scanExport = ScanService.getInstance(project).getExportData(selectedFile.getPath());
        return scanExport != null && scanExport.isTempFileSaved();
    }
}
