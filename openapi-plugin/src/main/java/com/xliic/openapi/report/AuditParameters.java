package com.xliic.openapi.report;

import com.xliic.core.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

public class AuditParameters {

    private final Audit report;
    private final VirtualFile file;
    private final List<Integer> ids;

    public AuditParameters(@NotNull Audit report) {
        this(report, null, null);
    }

    public AuditParameters(@NotNull Audit report, @Nullable VirtualFile file, @Nullable List<Integer> ids) {
        this.report = report;
        this.file = file;
        this.ids = ids;
    }

    public Audit getReport() {
        return report;
    }

    public VirtualFile getFile() {
        return file;
    }

    public List<Integer> getIds() {
        return ids;
    }

    public boolean isPartialReport() {
        return file != null & ids != null;
    }
}
