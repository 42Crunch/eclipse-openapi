package com.xliic.idea.editor;

import com.xliic.idea.file.VirtualFile;

public class FileEditorManagerEvent {
	
	private VirtualFile newFile;
	
	public FileEditorManagerEvent(VirtualFile newFile) {
		this.newFile = newFile;
	}
	
    public VirtualFile getNewFile() {
        return newFile;
    }

}
