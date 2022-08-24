package com.xliic.core.progress;

import org.eclipse.core.runtime.IProgressMonitor;
import org.jetbrains.annotations.NotNull;

public class ProgressIndicator {

    private final IProgressMonitor monitor;

    public ProgressIndicator(@NotNull IProgressMonitor monitor) {
        this.monitor = monitor;
    }

    public void setText(@NotNull String text) {
        monitor.setTaskName(text);
    }

    public void done() {
        monitor.done();
    }
}
