package com.xliic.core.ui.treeStructure;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ITreeViewerListener;
import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

public abstract class TreeExpansionListener implements ITreeViewerListener {

    @Override
    public void treeCollapsed(org.eclipse.jface.viewers.TreeExpansionEvent event) {
        treeCollapsed(new TreeExpansionEvent(event.getElement()));
    }

    @Override
    public void treeExpanded(org.eclipse.jface.viewers.TreeExpansionEvent event) {
        treeExpanded(new TreeExpansionEvent(event.getElement()));
    }

    public void treeExpanded(@NotNull TreePath path) {
        treeExpanded(new TreeExpansionEvent(path.getLastSegment()));
    }

    public void treeCollapsed(@NotNull TreePath path) {
        treeCollapsed(new TreeExpansionEvent(path.getLastSegment()));
    }

    public void treeExpanded(@NotNull DefaultMutableTreeNode root) {
        dfs(root, true);
    }

    public void treeCollapsed(@NotNull DefaultMutableTreeNode root) {
        dfs(root, false);
    }

    protected abstract void treeCollapsed(TreeExpansionEvent event);
    protected abstract void treeExpanded(TreeExpansionEvent event);

    private void dfs(DefaultMutableTreeNode node, boolean expand) {
        if (node.getParent() != null) {
            treeExpandOrCollapse(node, expand);
        }
        for (int i = 0 ; i < node.getChildCount() ; i++) {
            dfs((DefaultMutableTreeNode) node.getChildAt(i), expand);
        }
    }

    private void treeExpandOrCollapse(DefaultMutableTreeNode node, boolean expand) {
        if (expand) {
            treeExpanded(new TreeExpansionEvent(node));
        } else {
            treeCollapsed(new TreeExpansionEvent(node));
        }
    }
}
