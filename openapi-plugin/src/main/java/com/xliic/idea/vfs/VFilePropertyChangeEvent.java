package com.xliic.idea.vfs;

import com.xliic.idea.file.VirtualFile;

public class VFilePropertyChangeEvent extends VFileEvent {

	public VFilePropertyChangeEvent(VirtualFile newFile, VirtualFile oldFile) {
		super(newFile, oldFile);
	}
}
