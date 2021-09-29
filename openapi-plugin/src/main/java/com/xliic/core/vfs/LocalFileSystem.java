package com.xliic.core.vfs;

import java.io.File;

import org.eclipse.core.resources.IFile;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.utils.OpenAPIUtils;

public class LocalFileSystem {

	private final static LocalFileSystem localFileSystem = new LocalFileSystem();

	public static LocalFileSystem getInstance() {
		return localFileSystem;
	}

	public VirtualFile findFileByIoFile(@NotNull File file) {
		if (file.exists()) {
			IFile iFile = OpenAPIUtils.getIFile(file.getAbsolutePath());
			return (iFile == null) ? null : new VirtualFile(iFile);
		}
		return null;
	}
}
