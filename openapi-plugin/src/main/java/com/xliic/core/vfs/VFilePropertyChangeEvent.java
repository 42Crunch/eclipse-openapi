package com.xliic.core.vfs;

public class VFilePropertyChangeEvent extends VFileEvent {

    public VFilePropertyChangeEvent(VirtualFile newFile, VirtualFile oldFile) {
        super(newFile, oldFile);
    }
}
