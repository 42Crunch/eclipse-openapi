package com.xliic.openapi.outline.node;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class PanelNode extends BaseNode {

    public PanelNode(@NotNull String name, @Nullable Node node) {
        super(name, node, null);
        searchable = false;
    }

    public boolean exists() {
        return node != null;
    }

    public void setNode(@Nullable Node node) {
        this.node = node;
    }

    @Override
    public int getLevel() {
        return 0;
    }
}