package com.xliic.core.ui.treeStructure;

import java.util.LinkedList;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;

public class DefaultTreeContentProvider implements ITreeContentProvider {
	
    @Override
    public Object[] getElements(Object inputElement) {
        return getChildren(inputElement);
    }

    @Override
    public Object[] getChildren(Object parent) {
        return parent instanceof DefaultMutableTreeNode ? getChildren(((DefaultMutableTreeNode) parent)) : new Object[0];
    }
	
    @Override
    public Object getParent(Object element) {
        return element instanceof DefaultMutableTreeNode ? ((DefaultMutableTreeNode) element).getParent() : null;
    }
    
    @Override
    public boolean hasChildren(Object element) {
        return element instanceof DefaultMutableTreeNode ? ((DefaultMutableTreeNode) element).getChildCount() > 0 : false;
    }

    @Override
    public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
    }

    @Override
    public void dispose() {
    }
    
	private Object[] getChildren(DefaultMutableTreeNode parent) {   
		LinkedList<TreeNode> children = new LinkedList<>(); 
		for (int i = 0 ; i < parent.getChildCount() ; i++) {
			children.add(parent.getChildAt(i));
		}
		return children.toArray();
	}
}
