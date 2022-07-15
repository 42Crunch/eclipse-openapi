package com.xliic.openapi.platform.tree.node.decorator;

import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class PlatformLoadMoreDecorator {

    private static final String NAME = "Load More...";

    private final DefaultMutableTreeNode parent;

    public PlatformLoadMoreDecorator(@NotNull DefaultMutableTreeNode parent) {
        this.parent = parent;
    }

    public String getName() {
        return NAME;
    }

    public DefaultMutableTreeNode getParent() {
        return parent;
    }
}
