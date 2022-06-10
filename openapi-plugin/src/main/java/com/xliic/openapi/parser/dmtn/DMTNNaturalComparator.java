package com.xliic.openapi.parser.dmtn;

import com.xliic.openapi.tree.node.SimpleNode;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;
import java.util.Comparator;

public class DMTNNaturalComparator implements Comparator<TreeNode> {

    @Override
    public int compare(TreeNode a, TreeNode b) {
        if ((a instanceof DefaultMutableTreeNode) && (b instanceof DefaultMutableTreeNode)) {
            SimpleNode na = (SimpleNode) ((DefaultMutableTreeNode) a).getUserObject();
            SimpleNode nb = (SimpleNode) ((DefaultMutableTreeNode) b).getUserObject();
            return Integer.compare(na.getRange().getStartOffset(), nb.getRange().getStartOffset());
        }
        return 0;
    }
}
