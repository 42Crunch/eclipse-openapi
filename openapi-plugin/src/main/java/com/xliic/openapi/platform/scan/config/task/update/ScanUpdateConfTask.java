package com.xliic.openapi.platform.scan.config.task.update;

import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.bundler.BundleResult;
import org.jetbrains.annotations.NotNull;

public abstract class ScanUpdateConfTask extends Task.Backgroundable {

    @NotNull
    protected final Project project;
    @NotNull
    protected final BundleResult bundle;
    @NotNull
    protected final Callback callback;

    public interface Callback {
        void setDone(@NotNull String oas, @NotNull String config);
        void setRejected(@NotNull Exception ex);
    }

    public ScanUpdateConfTask(@NotNull Project project, @NotNull BundleResult bundle, @NotNull Callback callback) {
        super(project, "Updating scan configuration...", false);
        this.project = project;
        this.bundle = bundle;
        this.callback = callback;
    }
}
