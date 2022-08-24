package com.xliic.core.ui.treeStructure;

import org.eclipse.jface.viewers.TreePath;

public interface TreeModel {
	
    public Object getRoot();

    public Object getChild(Object parent, int index);

    public int getChildCount(Object parent);

    public boolean isLeaf(Object node);
    
    public void valueForPathChanged(TreePath path, Object newValue);
}
