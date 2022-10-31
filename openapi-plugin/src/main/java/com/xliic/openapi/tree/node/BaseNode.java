package com.xliic.openapi.tree.node;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;

public abstract class BaseNode {

    protected Node node;
    protected final BaseNode parent;

    protected String name;
    protected boolean hint;

    public BaseNode(@NotNull String name, Node node, BaseNode parent) {
        this.name = name;
        this.node = node;
        this.parent = parent;
        hint = false;
    }

    public String getName() {
        return name;
    }

    public String getPointer() {
        return (node == null) ? "/" + name : node.getJsonPointer();
    }

    public Range getRange() {
        return (node == null) ? new Range() : node.getRange();
    }

    public boolean hasHint() {
        return hint;
    }

    public void setHint(boolean applyHint) {
        this.hint = applyHint;
    }

    public Node getNode() {
        return node;
    }

    public BaseNode getParent() {
        return parent;
    }

    public static String getPanelName(BaseNode baseNode) {
        BaseNode parent = baseNode;
        while (!(parent instanceof PanelNode)) {
            parent = parent.getParent();
        }
        return parent.getName();
    }

    public static boolean showHint(BaseNode node) {
        if (node instanceof PanelNode) {
            return !OpenApiPanelKeys.OPERATION_ID.equals(node.getName());
        } else {
            return OpenApiPanelKeys.PATHS.equals(((SimpleNode) node).getParentName());
        }
    }

    public abstract int getLevel();
}
