package com.xliic.openapi.platform.scan.config.task;

import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.bundler.BundleResult;
import org.jetbrains.annotations.NotNull;

public abstract class ScanConfTask extends Task.Backgroundable {

    @NotNull
    protected final Project project;
    @NotNull
    protected final String path;
    @NotNull
    protected final BundleResult bundle;
    @NotNull
    protected final String scanConfPath;
    @NotNull
    protected final Callback callback;

    public interface Callback {
        void setDone(@NotNull String oas, @NotNull String config, boolean configCreated);
        void setRejected(@NotNull Exception ex);
    }

    public ScanConfTask(@NotNull Project project,
                        @NotNull String path,
                        @NotNull BundleResult bundle,
                        @NotNull String scanConfPath,
                        @NotNull Callback callback) {
        super(project, "Creating scan configuration...", false);
        this.project = project;
        this.path = path;
        this.bundle = bundle;
        this.scanConfPath = scanConfPath;
        this.callback = callback;
    }
}
