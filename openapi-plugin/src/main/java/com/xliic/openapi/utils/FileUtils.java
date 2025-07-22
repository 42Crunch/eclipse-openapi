package com.xliic.openapi.utils;

import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.function.Consumer;

import org.apache.commons.lang3.RandomStringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;

public class FileUtils {

    public static final int LENGTH = 10;
    private static final Object REQUESTOR = new Object();

    @NotNull
    public static String getRandomDirName(@NotNull String prefix) {
        return prefix + "_" + RandomStringUtils.random(LENGTH, true, false).toLowerCase();
    }

    public static boolean isGraphQl(@NotNull VirtualFile file) {
        return isGraphQl(file.getPath());
    }

    public static boolean isGraphQl(@NotNull String fileName) {
        return fileName.endsWith(".graphql") || fileName.endsWith(".graphqls") || fileName.endsWith(".sdl") || fileName.endsWith(".gql");
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
        removeFile(project, Paths.get(dir.getPath(), fileName).toString());
    }

    public static void removeFile(@NotNull Project project, @NotNull String fileName) {
        WriteCommandAction.runWriteCommandAction(project, (Computable<Void>) () -> {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(Paths.get(fileName).toFile());
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
    

    public static void saveToTempFile(@NotNull Project project,
                                      @NotNull String tmpDirName,
                                      @NotNull String tmpFileName,
                                      @NotNull String text,
                                      @NotNull Consumer<Path> onSave) {
        try {
            VirtualFile tmpDir = createTempDirectory(project, tmpDirName, false);
            WriteCommandAction.runWriteCommandAction(project, () -> {
                try {
                    VirtualFile target = tmpDir.createChildData(REQUESTOR, tmpFileName);
                    VfsUtil.saveText(target, text);
                    LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(tmpDir));
                    onSave.accept(target.toNioPath());
                } catch (Exception error) {
                    Logger.getInstance(FileUtils.class).warn(error);
                }
            });
        } catch (IOException e) {
            Logger.getInstance(FileUtils.class).warn(e);
        }
    }

    public static void clearTempFile(@NotNull Project project, @NotNull String tmpDirName, @NotNull String tmpFileName) {
        try {
            VirtualFile tmpDir = createTempDirectory(project, tmpDirName, false);
            VirtualFile target = LocalFileSystem.getInstance().findFileByIoFile(new File(join(tmpDir.getPath(), tmpFileName)));
            if (target != null) {
                WriteCommandAction.runWriteCommandAction(project, () -> {
                    try {
                        target.delete(REQUESTOR);
                        LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(tmpDir));
                    } catch (Exception error) {
                        Logger.getInstance(FileUtils.class).warn(error);
                    }
                });
            }
        } catch (IOException e) {
            Logger.getInstance(FileUtils.class).warn(e);
        }
    }
}
