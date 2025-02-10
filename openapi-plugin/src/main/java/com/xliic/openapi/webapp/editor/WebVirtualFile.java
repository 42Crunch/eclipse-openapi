package com.xliic.openapi.webapp.editor;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.PanelViewPart.ViewPartHandler;

public class WebVirtualFile {

    private final @NotNull String id;
    private final @NotNull String resourceId;
    private final @Nullable String genFilePath;
    private final @NotNull ViewPartHandler handler;

    public WebVirtualFile(@NotNull String id,
            @NotNull String resourceId,
            @NotNull String genFilePath,
            @NotNull ViewPartHandler handler) {
        this.id = id;
        this.resourceId = resourceId;
        this.genFilePath = genFilePath;
        this.handler = handler;
	}

    public WebVirtualFile(@NotNull String id,
                          @NotNull String resourceId,
                          @NotNull ViewPartHandler handler) {
        this.id = id;
        this.resourceId = resourceId;
        genFilePath = null;
        this.handler = handler;
    }

    public @NotNull String getId() {
        return id;
    }

    public @NotNull String getResourceId() {
        return resourceId;
    }

    @NotNull
    public ViewPartHandler getHandler() {
        return handler;
    }

    public @NotNull String getName() {
        return id;
    }

    public @Nullable String getGenFilePath() {
        return genFilePath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WebVirtualFile that = (WebVirtualFile) o;
        if (!id.equals(that.id)) return false;
        return resourceId.equals(that.resourceId);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + resourceId.hashCode();
        return result;
    }
}
