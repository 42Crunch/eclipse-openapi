package com.xliic.openapi.outline.dmtn;

import java.util.Comparator;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.PanelNode;

public class DMTNNaturalComparator implements Comparator<TreeNode> {

    @NotNull
    private final List<String> panelsOrder;

    public DMTNNaturalComparator(@NotNull List<String> panelsOrder) {
        this.panelsOrder = panelsOrder;
    }

    @Override
    public int compare(TreeNode a, TreeNode b) {
        if ((a instanceof DefaultMutableTreeNode) && (b instanceof DefaultMutableTreeNode)) {
            Object oa = ((DefaultMutableTreeNode) a).getUserObject();
            Object ob = ((DefaultMutableTreeNode) b).getUserObject();
            BaseNode na = (BaseNode) oa;
            BaseNode nb = (BaseNode) ob;
            if (oa instanceof PanelNode && ob instanceof PanelNode) {
                return panelsOrder.indexOf(na.getName()) - panelsOrder.indexOf(nb.getName());
            }
            return Integer.compare(na.getRange().getStartOffset(), nb.getRange().getStartOffset());
        }
        return 0;
    }
}
