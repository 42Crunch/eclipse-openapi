package com.xliic.openapi.async;

import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.concurrency.JobScheduler;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public abstract class AsyncService implements Runnable {

    public static final String OLD_FILE_NAME_KEY = "OLD_FILE_NAME_KEY";

    protected final Project project;
    private final ScheduledFuture<?> scheduledFuture;
    private final LinkedHashSet<AsyncTask> queue = new LinkedHashSet<>();
    private volatile boolean active = true;

    public AsyncService(@NotNull Project project, int delay, int initDelay) {
        this.project = project;
        ScheduledExecutorService scheduler = JobScheduler.getScheduler();
        scheduledFuture = scheduler.scheduleWithFixedDelay(this, initDelay, delay, TimeUnit.MILLISECONDS);
    }

    @Override
    public void run() {
        try {
            safeRun();
        } catch (Throwable ignored) {
        }
    }

    private void safeRun() {
        if (isActive()) {
            LinkedHashSet<AsyncTask> copyQueue;
            synchronized (queue) {
                copyQueue = new LinkedHashSet<>(queue);
                queue.clear();
            }
            // Init callbacks only if necessary
            List<AsyncCallback> callbacks = null;
            for (AsyncTask task : copyQueue) {
                try {
                    AsyncTaskType type = task.getType();
                    if (isActive()) {
                        if (type == AsyncTaskType.BEFORE_FILE_OPENED) {
                            beforeFileOpened(task);
                        } else if (type == AsyncTaskType.DOCUMENT_CHANGED) {
                            documentChanged(task);
                        } else if (type == AsyncTaskType.SELECTION_CHANGED) {
                            selectionChanged(task);
                        } else if (type == AsyncTaskType.BEFORE_FILE_CLOSED) {
                            beforeFileClosed(task);
                        } else if (type == AsyncTaskType.ALL_FILES_CLOSED) {
                            allFilesClosed(task);
                        } else if (type == AsyncTaskType.REFACTOR_RENAME) {
                            refactorRename(task);
                        } else if (type == AsyncTaskType.RUN_TREE_DFS) {
                            treeDfs(task);
                        } else if (type == AsyncTaskType.RUN_COMPLETE_CALLBACK) {
                            AsyncCallback callback = task.getCallback();
                            if (callback != null) {
                                if (callbacks == null) {
                                    callbacks = new LinkedList<>();
                                }
                                callbacks.add(task.getCallback());
                            }
                        }
                    }
                } catch (Throwable ignored) {
                }
            }
            if (isActive()) {
                onRunComplete();
                if (callbacks != null) {
                    for (AsyncCallback callback : callbacks) {
                        try {
                            callback.run();
                        } catch (Throwable ignored) {
                        }
                    }
                }
            }
        }
    }

    public void runAsyncTask(@NotNull Project project, @NotNull AsyncTaskType type, @NotNull VirtualFile file) {
        synchronized (queue) {
            queue.add(new AsyncTask(project, type, file));
        }
    }

    public void runAsyncTask(@NotNull Project project, @NotNull AsyncTaskType type, @NotNull VirtualFile file, @NotNull Map<String, Object> data) {
        synchronized (queue) {
            queue.add(new AsyncTask(project, type, file, data));
        }
    }

    public void runAsyncTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AsyncCallback callback) {
        synchronized (queue) {
            queue.add(new AsyncTask(project, file, callback));
        }
    }

    protected abstract void onRunComplete();

    protected abstract void beforeFileOpened(AsyncTask task);

    protected abstract void documentChanged(AsyncTask task);

    protected abstract void selectionChanged(AsyncTask task);

    protected abstract void beforeFileClosed(AsyncTask task);

    protected abstract void allFilesClosed(AsyncTask task);

    protected abstract void refactorRename(AsyncTask task);

    protected abstract void treeDfs(AsyncTask task);

    private boolean isActive() {
        return active && !project.isDisposed();
    }

    protected void dispose() {
        active = false;
        queue.clear();
        scheduledFuture.cancel(true);
    }
}
