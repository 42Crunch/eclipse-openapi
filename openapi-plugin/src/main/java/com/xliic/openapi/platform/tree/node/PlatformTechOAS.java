package com.xliic.openapi.platform.tree.node;

import java.io.File;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;

public class PlatformTechOAS {

    @NotNull
    private final String name;
    @NotNull
    private final String path;

    public PlatformTechOAS(@NotNull String name, @NotNull String path) {
        this.name = name;
        this.path = path;
    }

    public @NotNull String getName() {
        return name;
    }

    public @NotNull String getPath() {
        return path;
    }

    public @Nullable VirtualFile getVirtualFile() {
        return LocalFileSystem.getInstance().findFileByIoFile(new File(new File(path), name));
    }
}
