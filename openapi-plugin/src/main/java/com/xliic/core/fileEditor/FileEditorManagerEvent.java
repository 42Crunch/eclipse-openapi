package com.xliic.core.fileEditor;

import org.jetbrains.annotations.Nullable;

import com.xliic.core.vfs.VirtualFile;

public class FileEditorManagerEvent {

    private final VirtualFile newFile;
    private final VirtualFile oldFile;

    public FileEditorManagerEvent(@Nullable VirtualFile newFile, @Nullable VirtualFile oldFile) {
        this.newFile = newFile;
        this.oldFile = oldFile;
    }

    public VirtualFile getNewFile() {
        return newFile;
    }

    public VirtualFile getOldFile() {
        return oldFile;
    }
}
