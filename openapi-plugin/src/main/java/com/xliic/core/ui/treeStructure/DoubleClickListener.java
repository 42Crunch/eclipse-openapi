package com.xliic.core.ui.treeStructure;

import org.eclipse.jface.viewers.DoubleClickEvent;
import org.eclipse.jface.viewers.IDoubleClickListener;
import org.jetbrains.annotations.NotNull;

public abstract class DoubleClickListener implements IDoubleClickListener {

    @Override
    public void doubleClick(DoubleClickEvent event) {
        onDoubleClick(new MouseEvent());
    }

    public void installOn(@NotNull Tree tree) {
        tree.addDoubleClickListener(this);
    }

    protected abstract boolean onDoubleClick(@NotNull MouseEvent mouseEvent);
}
