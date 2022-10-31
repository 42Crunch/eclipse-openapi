package com.xliic.openapi.tree.node;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class SimpleNode extends BaseNode {

    public SimpleNode(@NotNull String name, @NotNull Node node, @NotNull BaseNode parent) {
        super(name, node, parent);
    }

    public void rename(String name) {
        this.name = name;
    }

    public String getParentName() {
        return parent.getName();
    }

    @Override
    public int getLevel() {
        return node.getDepth();
    }
}
