package com.xliic.core.ui.treeStructure;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;

public class DefaultTreeModel implements ITreeContentProvider, TreeModel {

	protected final TreeViewer viewer;
	protected TreeNode root;
	protected boolean asksAllowsChildren;

    public DefaultTreeModel(@NotNull TreeViewer viewer, @NotNull TreeNode root, boolean asksAllowsChildren) {
    	this.viewer = viewer;
    	this.root = root;
    	this.asksAllowsChildren = asksAllowsChildren;
    }
    
    public void setRoot(TreeNode root) {
    	if (!isDisposed()) {
        	this.root = (DefaultMutableTreeNode) root;
        	viewer.setInput(root);
    	}
    }

    public void reload() {
        reload(null);
    }

    public void reload(TreeNode node) {
    	if (!isDisposed()) {
    		viewer.refresh(node);
    	}
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
	
	@Override
	public Object getRoot() {
		return root;
	}

	@Override
    public Object getChild(Object parent, int index) {
        return ((TreeNode) parent).getChildAt(index);
    }

	@Override
    public int getChildCount(Object parent) {
        return ((TreeNode) parent).getChildCount();
    }

	@Override
    public boolean isLeaf(Object node) {
        if (asksAllowsChildren) {
        	return !((TreeNode) node).getAllowsChildren();
        }
        return ((TreeNode) node).isLeaf();
    }
	
	@Override
	public void valueForPathChanged(TreePath path, Object newValue) {
		if (!isDisposed()) {
			DefaultMutableTreeNode node = (DefaultMutableTreeNode) path.getLastSegment();
			node.setUserObject(newValue);
			viewer.refresh(node, true);
		}
	}
	
    private boolean isDisposed() {
    	return viewer == null || viewer.getControl().isDisposed();
    }
}
