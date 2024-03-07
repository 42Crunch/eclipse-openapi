package com.xliic.openapi.outline;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS_POINTER_STARTS_WITH;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.ui.SimpleTextAttributes;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.Icon;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.PanelNode;
import com.xliic.openapi.outline.node.RootNode;

public abstract class OutlineTreeCellRenderer extends ColoredTreeCellRenderer {

	private static final SimpleTextAttributes SEARCH_ATTRIBUTES = SimpleTextAttributes.SEARCH_ATTRIBUTES;
	
    @Override
    public void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected, boolean expanded, boolean leaf, int row, boolean hasFocus) {
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) value;
        Object obj = node.getUserObject();
        if (obj instanceof RootNode) {
            return;
        }
        BaseNode o = (BaseNode) obj;
        if (o == null) {
            append("");
            return;
        }
        String name = o.getName();
        Icon icon = OutlineUtils.getIcon(name);
        if (icon != null) {
            setIcon(icon);
        }
        if ((o instanceof PanelNode) || (o.getLevel() == 2 && o.getPointer().startsWith(COMPONENTS_POINTER_STARTS_WITH))) {
            String title = OutlineUtils.getTitle(name);
            addBoldTitle(title == null ? name : title);
        } else {
            addTitle(name, getSearchValue());
        }
    }

    @Nullable
    public abstract String getSearchValue();

    private void addBoldTitle(String title) {
        append(title, SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
    }

    private void addTitle(String title, String value) {
        if (StringUtils.isEmpty(value)) {
            append(title);
            return;
        }
        int i = -1;
        int j = 0;
        while ((i = title.toLowerCase().indexOf(value, i + 1)) != -1) {
            append(title.substring(j, i));
            j = i + value.length();
            append(title.substring(i, j), SEARCH_ATTRIBUTES);
        }
        append(title.substring(j));
    }
}
