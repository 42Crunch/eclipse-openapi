package com.xliic.openapi.platform.tree.node.decorator;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

public class PlatformFilterDecorator {

    private final String name;
    private final DefaultMutableTreeNode parent;

    public PlatformFilterDecorator(@NotNull String name, @NotNull DefaultMutableTreeNode parent) {
        this.name = name;
        this.parent = parent;
    }

    public String getName() {
        return name;
    }

    public DefaultMutableTreeNode getParent() {
        return parent;
    }
}
