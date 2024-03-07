package com.xliic.openapi.outline.node;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS_POINTER_STARTS_WITH;
import static com.xliic.openapi.OpenApiPanelKeys.OPERATION_ID;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class SimpleNode extends BaseNode {

    public SimpleNode(@NotNull String name, @NotNull Node node, @NotNull BaseNode parent) {
        super(name, node, parent);
        searchable = !(node.getDepth() == 2 && node.getJsonPointer().startsWith(COMPONENTS_POINTER_STARTS_WITH));
        copyEnabled = isCopyEnabled(parent);
    }

    public void rename(@NotNull String name) {
        this.name = name;
    }

    @NotNull
    public String getParentName() {
        return Objects.requireNonNull(parent).getName();
    }

    @Override
    public int getLevel() {
        return Objects.requireNonNull(node).getDepth();
    }

    private static boolean isCopyEnabled(BaseNode parent) {
        if (parent instanceof TagNode || parent instanceof TagChildNode) {
            return false;
        }
        return !OPERATION_ID.equals(parent.getName()) && !COMPONENTS.equals(parent.getName());
    }
}
