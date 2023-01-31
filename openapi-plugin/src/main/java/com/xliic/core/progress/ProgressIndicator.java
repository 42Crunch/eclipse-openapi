package com.xliic.core.progress;

import org.eclipse.core.runtime.IProgressMonitor;
import org.jetbrains.annotations.NotNull;

public class ProgressIndicator {

    private final int totalWork;
    private final IProgressMonitor monitor;

    public ProgressIndicator(@NotNull IProgressMonitor monitor, int totalWork) {
        this.monitor = monitor;
        this.totalWork = totalWork;
    }

    public void setText(@NotNull String text) {
        monitor.setTaskName(text);
        if (totalWork != IProgressMonitor.UNKNOWN) {
            monitor.worked(1);
        }
    }

    public void done() {
        monitor.done();
    }

    public void cancel() {
        monitor.setCanceled(true);
    }
}
