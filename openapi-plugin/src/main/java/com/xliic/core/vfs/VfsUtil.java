package com.xliic.core.vfs;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.io.FileUtil;

public class VfsUtil {

	public static @Nullable VirtualFile createDirectoryIfMissing(@NotNull String directoryPath) throws IOException {
		return createDirectoryIfMissing(LocalFileSystem.getInstance(), directoryPath);
	}

    public static @Nullable VirtualFile createDirectoryIfMissing(@NotNull LocalFileSystem fileSystem, @NotNull String directoryPath) throws IOException {
    	
	    String path = FileUtil.toSystemIndependentName(directoryPath);
	    VirtualFile file = fileSystem.refreshAndFindFileByPath(path);
	    if (file != null) {
	      return file;
	    }

	    int pos = path.lastIndexOf('/');
	    if (pos < 0) {
	      return null;
	    }

	    VirtualFile parent = createDirectoryIfMissing(fileSystem, path.substring(0, pos));
	    if (parent == null) {
	      return null;
	    }

	    String dirName = path.substring(pos + 1);
	    VirtualFile child = parent.findChild(dirName);
	    if (child != null && child.isDirectory()) {
	      return child;
	    }
	    return parent.createChildDirectory(fileSystem, dirName);
    }
}
