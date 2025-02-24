package com.xliic.core.vfs;

import java.io.File;
import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class VirtualFileWrapper {

    private final File myFile;

    public VirtualFileWrapper(@NotNull File file) {
        this.myFile = file;
    }

    public boolean exists() {
        return this.myFile.exists();
    }

    public @Nullable VirtualFile getVirtualFile() {
        return LocalFileSystem.getInstance().refreshAndFindFileByIoFile(this.myFile);
    }

    public @Nullable VirtualFile getVirtualFile(boolean createIfNotExist) {
        if (createIfNotExist && !this.myFile.exists()) {
            try {
                if (!this.myFile.createNewFile()) {
                    return null;
                }
            } catch (IOException var3) {
            }
        }
        return this.getVirtualFile();
    }
}
