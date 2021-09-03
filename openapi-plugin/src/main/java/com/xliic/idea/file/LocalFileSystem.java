package com.xliic.idea.file;

import java.io.File;

import org.jetbrains.annotations.NotNull;

import org.eclipse.core.resources.IFile;

import com.xliic.openapi.utils.OpenAPIUtils;

public class LocalFileSystem {
	
	private final static LocalFileSystem localFileSystem = new LocalFileSystem(); 
	
	public static LocalFileSystem getInstance() {
		return localFileSystem;
	}
	
    public VirtualFile findFileByIoFile(@NotNull File file) {
        IFile iFile = OpenAPIUtils.getIFile(file.getAbsolutePath());
        return (iFile == null) ? null : new VirtualFile(iFile);
    }
}
