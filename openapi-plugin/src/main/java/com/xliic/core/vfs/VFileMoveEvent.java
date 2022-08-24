package com.xliic.core.vfs;

public class VFileMoveEvent extends VFileEvent {

    public VFileMoveEvent(VirtualFile newFile, VirtualFile oldFile) {
        super(newFile, oldFile);
    }
}
