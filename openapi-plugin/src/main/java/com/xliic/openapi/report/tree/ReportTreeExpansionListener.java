package com.xliic.openapi.report.tree;

import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.ui.treeStructure.TreeExpansionEvent;
import com.xliic.core.ui.treeStructure.TreeExpansionListener;

import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class ReportTreeExpansionListener extends TreeExpansionListener {

    private final Tree tree;
    private final Set<String> expandedKeys = new HashSet<>();

    public ReportTreeExpansionListener(@NotNull Tree tree) {
        this.tree = tree;
    }

    @Override
    public void treeExpanded(TreeExpansionEvent event) {
        Object obj = event.getLastPathComponent();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        expandedKeys.add((((DefaultMutableTreeNode) obj).getUserObject()).toString());
    }

    @Override
    public void treeCollapsed(TreeExpansionEvent event) {
        Object obj = event.getLastPathComponent();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        expandedKeys.remove((((DefaultMutableTreeNode) obj).getUserObject()).toString());
    }

    public void expand(Collection<DefaultMutableTreeNode> nodes) {
        for (DefaultMutableTreeNode node : nodes) {
            if (node != null && expandedKeys.contains(((ReportFileObject) node.getUserObject()).getFileName())) {
                tree.expandPath(TreePathUtil.pathToTreeNode(node));
            }
        }
    }

    public void clear() {
        expandedKeys.clear();
    }

    public void replace(String newKey, String oldKey) {
        if (expandedKeys.contains(oldKey)) {
            expandedKeys.remove(oldKey);
            expandedKeys.add(newKey);
        }
    }

    public void addNodeExpandedState(DefaultMutableTreeNode node) {
        expandedKeys.add(node.toString());
    }

    public void clearNodeExpandedState(DefaultMutableTreeNode node) {
        expandedKeys.remove(node.toString());
    }
}
