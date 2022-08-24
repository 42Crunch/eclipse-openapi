package com.xliic.openapi.tree;

import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.ui.JBColor;
import com.xliic.core.ui.SimpleTextAttributes;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.RootNode;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class OpenApiColoredTreeCellRenderer extends ColoredTreeCellRenderer {

    @Override
    public void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected,
                                      boolean expanded, boolean leaf, int row, boolean hasFocus) {

        DefaultMutableTreeNode node = (DefaultMutableTreeNode) value;
        Object obj = node.getUserObject();
        if (obj instanceof RootNode) {
            return;
        }
        BaseNode o = (BaseNode) obj;
        if (o instanceof PanelNode) {
            append(o.getName().toUpperCase(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            if (o.hasHint()) {
                append(" [+]", new SimpleTextAttributes(SimpleTextAttributes.STYLE_BOLD, JBColor.GRAY));
            }
            setIcon(OpenApiIcons.PanelNode);
            return;
        }
        setIcon(OpenApiIcons.PropertyNode);
        if (o != null) {
            append(o.getName());
            if (o.hasHint()) {
                append(" [+]", new SimpleTextAttributes(SimpleTextAttributes.STYLE_BOLD, JBColor.GRAY));
            }
        } else {
            append("");
        }
    }
}
