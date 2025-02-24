package com.xliic.core.vfs;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.Charset;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.io.FileUtil;

public class VfsUtil {

    public static @Nullable VirtualFile createDirectoryIfMissing(@NotNull String directoryPath) throws IOException {
        return createDirectoryIfMissing(LocalFileSystem.getInstance(), directoryPath);
    }

    public static @Nullable VirtualFile createDirectoryIfMissing(@NotNull LocalFileSystem fileSystem, @NotNull String directoryPath)
            throws IOException {

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
    
    public static void saveText(@NotNull VirtualFile file, @NotNull String text) throws IOException {
        Charset charset = file.getCharset();
        OutputStream stream = file.getOutputStream(file);
        try {
            stream.write(text.getBytes(charset));
        } catch (Throwable var7) {
            if (stream != null) {
                try {
                    stream.close();
                } catch (Throwable var6) {
                    var7.addSuppressed(var6);
                }
            }
            throw var7;
        }
        if (stream != null) {
            stream.close();
        }
    }
}
