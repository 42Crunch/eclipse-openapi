package com.xliic.openapi.async;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public class AsyncTask {

    private static final Map<String, Object> EMPTY_MAP = new HashMap<>();
    private static final String ASYNC_TASK_COMPLETE_CALLBACK = "ASYNC_TASK_COMPLETE_CALLBACK";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final AsyncTaskType type;
    @NotNull
    private final Map<String, Object> data;

    public AsyncTask(@NotNull Project project, @NotNull AsyncTaskType type, @NotNull VirtualFile file) {
        this.project = project;
        this.file = file;
        this.type = type;
        data = EMPTY_MAP;
    }

    public AsyncTask(@NotNull Project project, @NotNull AsyncTaskType type, @NotNull VirtualFile file, @NotNull Map<String, Object> data) {
        this.project = project;
        this.file = file;
        this.type = type;
        this.data = data;
     }

    public AsyncTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AsyncCallback callback) {
        this.project = project;
        this.file = file;
        this.type = AsyncTaskType.RUN_COMPLETE_CALLBACK;
        data = new HashMap<>();
        data.put(ASYNC_TASK_COMPLETE_CALLBACK, callback);
    }

    public @NotNull AsyncTaskType getType() {
        return type;
    }

    public @NotNull VirtualFile getFile() {
        return file;
    }

    @NotNull
    public Map<String, Object> getData() {
		return data;
    }

    public Object get(String key) {
        return data.get(key);
    }

    public @Nullable AsyncCallback getCallback() {
        return (AsyncCallback) data.get(ASYNC_TASK_COMPLETE_CALLBACK);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if ((o == null) || (getClass() != o.getClass())) return false;
        AsyncTask asyncTask = (AsyncTask) o;
        if (!file.getPath().equals(asyncTask.getFile().getPath())) return false;
        return type == asyncTask.type;
    }

    @Override
    public int hashCode() {
        int result = file.getPath().hashCode();
        result = 31 * result + type.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "AsyncTask {file=" + file + ", type=" + type + "}";
    }
}
