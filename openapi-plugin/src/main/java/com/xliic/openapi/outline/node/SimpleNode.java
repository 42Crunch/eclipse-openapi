package com.xliic.openapi.outline.node;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.OPERATION_ID;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class SimpleNode extends BaseNode {

    public SimpleNode(@NotNull String name, @NotNull Node node, @NotNull BaseNode parent) {
        super(name, node, parent);
        copyEnabled = isCopyEnabled(parent);
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
    
    private static boolean isCopyEnabled(BaseNode parent) {
        if (parent instanceof TagNode || parent instanceof TagChildNode) {
            return false;
        }
        return !OPERATION_ID.equals(parent.getName()) && !COMPONENTS.equals(parent.getName());
    }
}
