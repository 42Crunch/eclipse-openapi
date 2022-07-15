package com.xliic.openapi.platform.tree.mouse;

import com.xliic.core.ui.treeStructure.MouseAdapter;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.openapi.platform.tree.ui.PlatformPanel;

import org.jetbrains.annotations.NotNull;

public class PlatformMouseAdapter extends MouseAdapter {

    private final PlatformLeftMouseClickHandler leftMouseClickHandler;
    private final PlatformRightMouseClickHandler rightMouseClickHandler;

    public PlatformMouseAdapter(@NotNull PlatformPanel panel) {
        leftMouseClickHandler = new PlatformLeftMouseClickHandler(panel);
        rightMouseClickHandler = new PlatformRightMouseClickHandler(panel);
    }

    public void mouseClicked(MouseEvent event) {
        if (isLeftMouseButton(event)) {
            leftMouseClickHandler.handle(event);
        }
        if (isRightMouseButton(event)) {
            rightMouseClickHandler.handle(event);
        }
    }
}
