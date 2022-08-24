package com.xliic.core.ui.treeStructure;

import org.jetbrains.annotations.NotNull;

public class TreeExpansionEvent {

    private final Object object;

    public TreeExpansionEvent(@NotNull Object object) {
        this.object = object;
    }

    public Object getLastPathComponent() {
        return object;
    }
}
