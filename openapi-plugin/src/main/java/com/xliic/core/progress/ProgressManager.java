package com.xliic.core.progress;

import org.eclipse.core.runtime.jobs.Job;
import org.jetbrains.annotations.NotNull;

public class ProgressManager {

    private static ProgressManager manager;

    public static ProgressManager getInstance() {
        if (manager == null) {
            manager = new ProgressManager();
        }
        return manager;
    }

    public void run(@NotNull Task task) {
        Job.create(task.getTitle(), task).schedule();
    }
}
