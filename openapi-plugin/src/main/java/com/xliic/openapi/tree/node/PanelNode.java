package com.xliic.openapi.tree.node;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

public class PanelNode extends BaseNode {

    public PanelNode(@NotNull String name) {
        super(name, null, null);
    }

    public boolean exists() {
        return node != null;
    }

    public void setNode(Node node) {
        this.node = node;
    }

    @Override
    public int getLevel() {
        return 0;
    }
}
