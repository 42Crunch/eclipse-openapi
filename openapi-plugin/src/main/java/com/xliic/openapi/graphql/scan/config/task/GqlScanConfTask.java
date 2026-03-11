package com.xliic.openapi.graphql.scan.config.task;

import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

public abstract class GqlScanConfTask extends Task.Backgroundable {

    @NotNull
    protected final Project project;
    @NotNull
    protected final VirtualFile file;
    @NotNull
    protected final String scanConfPath;
    @NotNull
    protected final Callback callback;

    public interface Callback {
        void setDone(@NotNull String text, @NotNull String config, boolean configCreated);
        void setRejected(@NotNull Exception ex);
        void cancel();
    }

    public GqlScanConfTask(@NotNull Project project,
                           @NotNull VirtualFile file,
                           @NotNull String scanConfPath,
                           @NotNull Callback callback) {
        super(project, "Creating scan configuration...", false);
        this.project = project;
        this.file = file;
        this.scanConfPath = scanConfPath;
        this.callback = callback;
    }
}
