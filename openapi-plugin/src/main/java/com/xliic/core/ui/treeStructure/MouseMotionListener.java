package com.xliic.core.ui.treeStructure;

import org.eclipse.swt.events.MouseMoveListener;
import org.jetbrains.annotations.NotNull;

public abstract class MouseMotionListener implements MouseMoveListener {

    protected final Tree tree;

    public MouseMotionListener(@NotNull Tree tree) {
        this.tree = tree;
    }

    @Override
    public void mouseMove(org.eclipse.swt.events.MouseEvent e) {
        mouseMoved(new MouseEvent(tree, e.x, e.y));
    }

    protected abstract void mouseDragged(MouseEvent e);
    protected abstract void mouseMoved(MouseEvent e);
}
