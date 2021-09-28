package com.xliic.idea.vfs;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;

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
