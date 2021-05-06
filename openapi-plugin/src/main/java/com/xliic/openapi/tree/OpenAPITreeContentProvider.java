package com.xliic.openapi.tree;

import java.util.LinkedList;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.ITreeContentProvider;

public class OpenAPITreeContentProvider implements ITreeContentProvider {
	
	@Override
	public Object[] getChildren(Object parent) {   
        int count = ((TreeNode) parent).getChildCount();
        LinkedList<TreeNode> children = new LinkedList<>();
        
        for (int i = 0 ; i < count ; i++) {
            final DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) ((TreeNode) parent).getChildAt(i);
            final OpenApiTreeNode userObject = (OpenApiTreeNode) treeNode.getUserObject();
            if (userObject.isVisible()) {
            	children.add(((TreeNode) parent).getChildAt(i));
            }
        }
        return children.toArray();
	}
	
	@Override
	public Object getParent(Object element) {
		DefaultMutableTreeNode on = (DefaultMutableTreeNode) element;
	    return on.getParent();
	}
	
	@Override
	public boolean hasChildren(Object element) {
	    return getChildCount(element) > 0;
	}
	
	@Override
	public Object[] getElements(Object inputElement) {
	    return getChildren(inputElement);
	}
	
    private int getChildCount(Object parent) {
        int n = 0;
        int count = ((TreeNode) parent).getChildCount();
        for (int i = 0 ; i < count ; i++) {
            final DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) ((TreeNode) parent).getChildAt(i);
            final OpenApiTreeNode userObject = (OpenApiTreeNode) treeNode.getUserObject();
            if (userObject != null && userObject.isVisible()) {
                n += 1;
            }
        }
        return n;
    }
}