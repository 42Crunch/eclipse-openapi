package com.xliic.openapi.tree;

import com.xliic.core.ui.treeStructure.MouseAdapter;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.openapi.tree.ui.OpenApiFileTreePanel;

import org.jetbrains.annotations.NotNull;

public class OpenApiMouseAdapter extends MouseAdapter {

    private final OpenApiLeftMouseClickHandler leftMouseClickHandler;
    private final OpenApiRightMouseClickHandler rightMouseClickHandler;

    public OpenApiMouseAdapter(@NotNull OpenApiFileTreePanel panel) {
        // Eclipse Development Note
        // Set false as not interested in double clicks
        // It will speed up single click handling process
        super(false);
        leftMouseClickHandler = new OpenApiLeftMouseClickHandler(panel);
        rightMouseClickHandler = new OpenApiRightMouseClickHandler(panel);
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
