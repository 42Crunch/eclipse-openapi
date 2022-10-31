package com.xliic.openapi.platform.tree.actions;

import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;

public class PlatformFilterRemoveAction extends AnJAction implements DumbAware {

    private final Tree tree;
    private final DefaultMutableTreeNode filterDecoratorDMTN;

    public PlatformFilterRemoveAction(@NotNull Tree tree, @NotNull DefaultMutableTreeNode filterDecoratorDMTN) {
        super("Remove Filter", "Remove filter", null);
        this.tree = tree;
        this.filterDecoratorDMTN = filterDecoratorDMTN;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        SwingUtilities.invokeLater(() -> {
            Object obj = filterDecoratorDMTN.getUserObject();
            if (obj instanceof PlatformFilterDecorator) {
                PlatformFilterDecorator filterDecoratorObj = (PlatformFilterDecorator) obj;
                DefaultMutableTreeNode parentDMTN = filterDecoratorObj.getParent();
                Object parentObj = parentDMTN.getUserObject();
                if (parentObj instanceof Filter) {
                    Filter filter = (Filter) parentObj;
                    filter.reset();
                    PlatformAsyncTreeModel model = (PlatformAsyncTreeModel) tree.getModel();
                    List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                    model.reload(parentDMTN);
                    TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                }
            }
        });
    }
}
