package com.xliic.core.ui.treeStructure;

import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.Color;

public class TreePaintListener implements PaintListener {

    @NotNull
    private final TreeViewer viewer;
    @NotNull
    private final Color color;

    public TreePaintListener(@NotNull TreeViewer viewer, @NotNull Color color) {
        this.viewer = viewer;
        this.color = color;
    }

    @Override
    public void paintControl(PaintEvent e) {
        viewer.getTree().setBackground(color.getSwtGraphicsColor());
    }
}
