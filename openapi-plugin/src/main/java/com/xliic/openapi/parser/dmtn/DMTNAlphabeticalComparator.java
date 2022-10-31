package com.xliic.openapi.parser.dmtn;

import java.util.Comparator;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import com.xliic.openapi.tree.node.BaseNode;

public class DMTNAlphabeticalComparator implements Comparator<TreeNode> {

    @Override
    public int compare(TreeNode a, TreeNode b) {
        if ((a instanceof DefaultMutableTreeNode) && (b instanceof DefaultMutableTreeNode)) {
            BaseNode na = (BaseNode) ((DefaultMutableTreeNode) a).getUserObject();
            BaseNode nb = (BaseNode) ((DefaultMutableTreeNode) b).getUserObject();
            return na.getName().compareTo(nb.getName());
        }
        return 0;
    }
}
