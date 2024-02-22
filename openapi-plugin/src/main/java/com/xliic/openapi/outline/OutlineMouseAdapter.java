package com.xliic.openapi.outline;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.treeStructure.MouseAdapter;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.openapi.outline.ui.OutlinePanel;

public class OutlineMouseAdapter extends MouseAdapter {

    private final OutlineLeftClickHandler leftMouseClickHandler;
    private final OutlineRightClickHandler rightMouseClickHandler;

    public OutlineMouseAdapter(@NotNull OutlinePanel panel) {
        // Eclipse Development Note
        // Set false as not interested in double clicks
        // It will speed up single click handling process
        super(false);
        leftMouseClickHandler = new OutlineLeftClickHandler(panel);
        rightMouseClickHandler = new OutlineRightClickHandler(panel);
    }

    @Override
    public void mouseClicked(MouseEvent event) {
        if (isLeftMouseButton(event)) {
            leftMouseClickHandler.handle(event);
        } else if (isRightMouseButton(event)) {
            rightMouseClickHandler.handle(event);
        }
    }
}
