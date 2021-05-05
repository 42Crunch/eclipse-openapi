package com.crunch42.openapi.report.tree;

import org.eclipse.jface.viewers.ITreeViewerListener;
import org.eclipse.jface.viewers.TreeExpansionEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.ui.IWorkbench;
import javax.validation.constraints.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;

public class ReportTreeExpansionListener implements ITreeViewerListener {

	private final TreeViewer viewer;
    private final Set<String> expandedKeys = new HashSet<>();

    public ReportTreeExpansionListener(@NotNull IWorkbench workbench, @NotNull TreeViewer viewer) {
        this.viewer = viewer;
    }

    @Override
    public void treeExpanded(TreeExpansionEvent event) {
    	Object obj = event.getElement();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        expandedKeys.add((((DefaultMutableTreeNode) obj).getUserObject()).toString());
    }

    @Override
    public void treeCollapsed(TreeExpansionEvent event) {
    	Object obj = event.getElement();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        expandedKeys.remove((((DefaultMutableTreeNode) obj).getUserObject()).toString());
    }
    
    public void expand(Collection<DefaultMutableTreeNode> nodes) {
        for (DefaultMutableTreeNode node : nodes) {
            if (node != null && expandedKeys.contains(((ReportFileObject) node.getUserObject()).getFileName())) {
            	viewer.expandToLevel(node, 1);
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
