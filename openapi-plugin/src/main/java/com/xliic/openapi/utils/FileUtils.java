package com.xliic.openapi.utils;

import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import org.apache.commons.lang3.RandomStringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.PosixFilePermissions;
import java.util.Collections;

public class FileUtils {

    public static final int LENGTH = 10;
    private static final Object REQUESTOR = new Object();

    @NotNull
    public static String getRandomDirName(@NotNull String prefix) {
        return prefix + "_" + RandomStringUtils.random(LENGTH, true, false).toLowerCase();
    }

    @Nullable
    public static String readFile(@NotNull VirtualFile dir, @NotNull String fileName) {
        return Utils.getTextFromFile(Paths.get(dir.getPath(), fileName).toString(), true);
    }

    @NotNull
    public static VirtualFile writeFile(@NotNull Project project,
                                        @NotNull VirtualFile dir,
                                        @NotNull String fileName,
                                        @NotNull String text) throws IOException {
        VirtualFile file = WriteCommandAction.runWriteCommandAction(project, (Computable<VirtualFile>) () -> {
            try {
                VirtualFile newFile = dir.createChildData(REQUESTOR, fileName);
                writeTextToFile(newFile, text);
                LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(newFile));
                return newFile;
            } catch (IOException e) {
                return null;
            }
        });
        if (file == null) {
            throw new IOException("Failed to write file " + fileName + " in " + dir.getPath());
        }
        return file;
    }

    public static void writeTextToFile(@NotNull VirtualFile file, @NotNull String text) {
        try {
            try (OutputStream stream = new FileOutputStream(file.getPath(), false)) {
                stream.write(text.getBytes(file.getCharset()));
            }
        } catch (IOException ignored) {
        }
    }

    public static void removeFile(@NotNull Project project, @NotNull VirtualFile dir, @NotNull String fileName) throws IOException {
        WriteCommandAction.runWriteCommandAction(project, (Computable<Void>) () -> {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(Paths.get(dir.getPath(), fileName).toFile());
            if (file != null) {
                try {
                    file.delete(REQUESTOR);
                } catch (IOException ignored) {
                }
            }
            return null;
        });
    }

    public static void removeDir(@NotNull Project project, @NotNull VirtualFile dir) throws IOException {
        WriteCommandAction.runWriteCommandAction(project, (Computable<Void>) () -> {
            try {
                dir.delete(REQUESTOR);
            } catch (IOException ignored) {
            }
            return null;
        });
    }

    public static boolean exists(@NotNull String path) {
        return new File(path).exists();
    }

    @NotNull
    public static String join(@NotNull String dir, @NotNull String fileName) {
        return Paths.get(dir, fileName).toString();
    }

    @Nullable
    public static VirtualFile makeDir(@NotNull Project project, @NotNull String dirPath) {
        return WriteCommandAction.runWriteCommandAction(project, (Computable<VirtualFile>) () -> {
            try {
                return VfsUtil.createDirectoryIfMissing(dirPath);
            } catch (IOException e) {
                return null;
            }
        });
    }

    public static void chmod(@NotNull String filePath) {
        try {
            Files.setPosixFilePermissions(Path.of(filePath), PosixFilePermissions.fromString("rwxr-xr-x"));
        } catch (IOException ignored) {
        }
    }
}
