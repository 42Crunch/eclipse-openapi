package com.xliic.openapi.platform.tree.mouse;

import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.core.Paginator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadMoreDecorator;
import com.xliic.openapi.platform.tree.ui.PlatformPanel;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.List;

public class PlatformLeftMouseClickHandler {

    private final Tree tree;

    public PlatformLeftMouseClickHandler(@NotNull PlatformPanel panel) {
        tree = panel.getTree();
    }

    public void handle(MouseEvent event) {
        DefaultMutableTreeNode clickedDMTN = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if (clickedDMTN == null) {
            return;
        }
        PlatformAsyncTreeModel model = (PlatformAsyncTreeModel) tree.getModel();
        Object clickedObj = clickedDMTN.getUserObject();
        if (clickedObj instanceof PlatformLoadMoreDecorator) {
            DefaultMutableTreeNode parentDMTN = ((PlatformLoadMoreDecorator) clickedObj).getParent();
            Paginator paginator = (Paginator) parentDMTN.getUserObject();
            paginator.increasePageSize();
            List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
            model.reload(parentDMTN);
            TreeUtil.restoreExpandedPaths(tree, expandedPaths);
        }
    }
}
