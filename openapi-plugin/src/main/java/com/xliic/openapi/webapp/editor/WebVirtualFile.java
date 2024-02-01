package com.xliic.openapi.webapp.editor;

import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.openapi.ToolWindowId;

import org.jetbrains.annotations.NotNull;

public class WebVirtualFile {

    private final @NotNull String id;
    private final @NotNull String resourceId;
    private final @NotNull ViewPartHandler handler;

    public WebVirtualFile(@NotNull String id, @NotNull String resourceId, @NotNull ViewPartHandler handler) {
        this.id = id;
        this.resourceId = resourceId;
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
    	if (ToolWindowId.CONFIG.equals(id)) {
    		return "Settings";
    	}
        return id;
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
