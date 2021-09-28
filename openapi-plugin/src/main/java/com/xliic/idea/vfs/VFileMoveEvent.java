package com.xliic.idea.vfs;

import com.xliic.idea.file.VirtualFile;

public class VFileMoveEvent extends VFileEvent {

	public VFileMoveEvent(VirtualFile newFile, VirtualFile oldFile) {
		super(newFile, oldFile);
	}
}
