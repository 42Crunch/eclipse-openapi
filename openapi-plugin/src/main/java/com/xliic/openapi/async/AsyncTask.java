package com.xliic.openapi.async;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

import java.util.HashMap;
import java.util.Map;

public class AsyncTask {

    private final Project project;
    private final VirtualFile file;
    private final AsyncTaskType type;
    private final Map<String, Object> data;

    public AsyncTask(@NotNull Project project,
                     @NotNull AsyncTaskType type,
                     @NotNull VirtualFile file) {
        this.project = project;
        this.file = file;
        this.type = type;
        data = new HashMap<>();
    }

    public AsyncTask(@NotNull Project project,
                     @NotNull AsyncTaskType type,
                     @NotNull VirtualFile file,
                     @NotNull Map<String, Object> data) {
        this.project = project;
        this.file = file;
        this.type = type;
        this.data = data;
    }

    public AsyncTaskType getType() {
        return type;
    }

    public Project getProject() {
        return project;
    }

    public VirtualFile getFile() {
        return file;
    }

    public Object get(String key) {
        return data.get(key);
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
