package com.xliic.core.ui.treeStructure;

public interface TreeModel {
	
    public Object getRoot();

    public Object getChild(Object parent, int index);

    public int getChildCount(Object parent);

    public boolean isLeaf(Object node);
}
