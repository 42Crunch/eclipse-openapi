package com.xliic.core.fileEditor;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenFileDescriptor {

	private final VirtualFile file;
	private final int offset;

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file) {
		this.file = file;
		this.offset = 0;
	}

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, int offset) {
		this.file = file;
		this.offset = offset;
	}

	public VirtualFile getFile() {
		return file;
	}

	public void navigate(boolean requestFocus) {
		if (offset != -1) {
			OpenAPIUtils.gotoFile(file.getIFile(), offset, 0);
		} else {
			OpenAPIUtils.gotoFile(file.getIFile(), 0, 0);
		}
	}
}
