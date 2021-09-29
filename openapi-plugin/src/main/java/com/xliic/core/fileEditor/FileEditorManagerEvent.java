package com.xliic.core.fileEditor;

import com.xliic.core.vfs.VirtualFile;

public class FileEditorManagerEvent {
	
	private VirtualFile newFile;
	
	public FileEditorManagerEvent(VirtualFile newFile) {
		this.newFile = newFile;
	}
	
    public VirtualFile getNewFile() {
        return newFile;
    }

}
