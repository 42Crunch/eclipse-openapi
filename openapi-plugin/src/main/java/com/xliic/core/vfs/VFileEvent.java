package com.xliic.core.vfs;

import org.jetbrains.annotations.NotNull;

public class VFileEvent {

    private final VirtualFile newFile;
    private final VirtualFile oldFile;

    public VFileEvent(VirtualFile newFile, VirtualFile oldFile) {
        this.newFile = newFile;
        this.oldFile = oldFile;
    }

    public VirtualFile getFile() {
        return newFile;
    }

    @NotNull
    public String getOldPath() {
        return oldFile.getPath();
    }
}
