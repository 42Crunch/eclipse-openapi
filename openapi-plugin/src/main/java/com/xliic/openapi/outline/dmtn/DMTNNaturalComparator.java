package com.xliic.openapi.outline.dmtn;

import java.util.Comparator;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import com.xliic.openapi.outline.node.BaseNode;

public class DMTNNaturalComparator implements Comparator<TreeNode> {

    @Override
    public int compare(TreeNode a, TreeNode b) {
        if ((a instanceof DefaultMutableTreeNode) && (b instanceof DefaultMutableTreeNode)) {
            BaseNode na = (BaseNode) ((DefaultMutableTreeNode) a).getUserObject();
            BaseNode nb = (BaseNode) ((DefaultMutableTreeNode) b).getUserObject();
            return Integer.compare(na.getRange().getStartOffset(), nb.getRange().getStartOffset());
        }
        return 0;
    }
}
