package com.xliic.core.ui.treeStructure;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;

public abstract class DefaultTreeModel implements ITreeContentProvider, TreeModel {

	private final TreeViewer viewer;
	protected boolean asksAllowsChildren;

    public DefaultTreeModel(@NotNull TreeViewer viewer, boolean asksAllowsChildren) {
    	this.viewer = viewer;
    	this.asksAllowsChildren = asksAllowsChildren;
    }

    public void reload() {
        reload(null);
    }

    public void reload(TreeNode node) {
    	viewer.refresh(node);
    }

	@Override
	public Object[] getElements(Object inputElement) {
		return getChildren(inputElement);
	}

	@Override
	public Object[] getChildren(Object parentElement) {
		int count = getChildCount(parentElement);
		Object[] children = new Object[count];
		for (int i = 0 ; i < count ; i++) {
			children[i] = getChild(parentElement, i);
		}
		return children;
	}

	@Override
	public Object getParent(Object element) {
		return element instanceof DefaultMutableTreeNode ? ((DefaultMutableTreeNode) element).getParent() : null;
	}

	@Override
	public boolean hasChildren(Object element) {
		return !isLeaf(element);
	}
	
	public void valueForPathChanged(TreePath path, Object newValue) {
		DefaultMutableTreeNode node = (DefaultMutableTreeNode) path.getLastSegment();
		node.setUserObject(newValue);
		viewer.refresh(node);
	}
}
