package com.xliic.openapi.platform.tree.node.core;

import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public interface Filter {

    void reset();

    boolean isActive();

    void setFilterName(@NotNull String name);

    boolean pass(@NotNull DefaultMutableTreeNode childDMTN);
}
