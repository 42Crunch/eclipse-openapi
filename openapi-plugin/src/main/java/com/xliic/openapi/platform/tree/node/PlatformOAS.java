package com.xliic.openapi.platform.tree.node;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.platform.tree.node.core.ProgressAware;

public class PlatformOAS implements ProgressAware {

    private static final String NAME = "OpenAPI definition";

    private final String id;
    private final boolean isJson;

    private volatile boolean inProgress;

    public PlatformOAS(@NotNull String id, boolean isJson) {
        this.id = id;
        this.isJson = isJson;
    }

    public String getName() {
        return NAME;
    }

    public String getId() {
        return id;
    }

    public boolean isJson() {
        return isJson;
    }

    @Override
    public boolean isInProgress() {
        return inProgress;
    }

    @Override
    public void setInProgress(boolean inProgress) {
        this.inProgress = inProgress;
    }

    public VirtualFile getVirtualFile() {
        return TempFileUtils.getPlatformVirtualFile(id, isJson);
    }
}
