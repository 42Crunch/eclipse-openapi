package com.xliic.openapi.tree;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.openapi.parser.dmtn.DMTNAlphabeticalComparator;
import com.xliic.openapi.parser.dmtn.DMTNNaturalComparator;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.tree.node.RootNode;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;

import java.util.*;

public class SortTreeModel extends DefaultTreeModel {

    private static final DMTNNaturalComparator naturalComparator = new DMTNNaturalComparator();
    private static final DMTNAlphabeticalComparator alphabeticalComparator = new DMTNAlphabeticalComparator();

    private Comparator<TreeNode> comparator;

    public SortTreeModel(@NotNull TreeViewer viewer, @NotNull TreeNode root, boolean asksAllowsChildren) {
        super(viewer, root, asksAllowsChildren);
        boolean sortABC = PropertiesComponent.getInstance().getBoolean(SettingsKeys.ABC_SORT);
        comparator = getComparator(sortABC);
    }

    public void setSortABC(boolean sortABC) {
        comparator = getComparator(sortABC);
    }

    @Override
    public Object getChild(Object parent, int index) {
        Object element = ((DefaultMutableTreeNode) parent).getUserObject();
        if (element instanceof RootNode) {
            return super.getChild(parent, index);
        } else {
            Enumeration<? extends TreeNode> children = ((TreeNode) parent).children();
            List<? extends TreeNode> list = Collections.list(children);
            list.sort(comparator);
            return list.get(index);
        }
    }

    private static Comparator<TreeNode> getComparator(boolean sortABC) {
        return sortABC ? alphabeticalComparator : naturalComparator;
    }
}
