package com.xliic.openapi.parser.dmtn;

import com.xliic.openapi.tree.node.BaseNode;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;
import java.util.Comparator;

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
