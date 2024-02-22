package com.xliic.openapi.outline.node;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;

public abstract class BaseNode {

    protected Node node;
    protected final BaseNode parent;

    protected String name;
    protected boolean hint;
    protected boolean copyEnabled;
    
    public BaseNode(@NotNull String name, Node node, BaseNode parent) {
        this.name = name;
        this.node = node;
        this.parent = parent;
        hint = false;
        copyEnabled = false;
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
        	String name = node.getName();
            return !OpenApiPanelKeys.OPERATION_ID.equals(name) && !OpenApiPanelKeys.TAGS.equals(name);
        } else if (node instanceof SimpleNode) {
            return OpenApiPanelKeys.PATHS.equals(((SimpleNode) node).getParentName());
        } else {
        	return false;
        }
    }

    public abstract int getLevel();
    
    public boolean isCopyEnabled() {
        return copyEnabled;
    }
}
