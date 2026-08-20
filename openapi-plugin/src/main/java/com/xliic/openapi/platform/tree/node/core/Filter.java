package com.xliic.openapi.platform.tree.node.core;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

public interface Filter {

    void resetFilter();

    boolean isFilterActive();

    void setFilter(@NotNull String name);

    boolean passFilter(@NotNull DefaultMutableTreeNode childDMTN);
}
