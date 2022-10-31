package com.xliic.openapi.platform.tree.node.core;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

public interface Filter {

    void reset();

    boolean isActive();

    void setFilterName(@NotNull String name);

    boolean pass(@NotNull DefaultMutableTreeNode childDMTN);
}
