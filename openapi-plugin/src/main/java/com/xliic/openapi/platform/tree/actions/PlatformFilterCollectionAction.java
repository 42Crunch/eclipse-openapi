package com.xliic.openapi.platform.tree.actions;

import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.filter.PlatformTreeFilter;
import com.xliic.openapi.platform.tree.node.core.Filter;

public class PlatformFilterCollectionAction extends AnJAction implements DumbAware {

    private final Project project;
    private final Tree tree;
    private final DefaultMutableTreeNode filterDMTN;

    public PlatformFilterCollectionAction(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode filterDMTN) {
        super("Filter", "Filter collections", null);
        this.project = project;
        this.tree = tree;
        this.filterDMTN = filterDMTN;
    }
    
    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        final PlatformTreeFilter chooser = new PlatformTreeFilter(project, "Filter Collections by Name");
        if (chooser.showAndGet()) {
            if (chooser.isUpdated()) {
                SwingUtilities.invokeLater(() -> {
                    Object filterObj = filterDMTN.getUserObject();
                    if (filterObj instanceof Filter) {
                        Filter filter = (Filter) filterObj;
                        filter.setFilterName(chooser.getValue());
                        PlatformAsyncTreeModel model = (PlatformAsyncTreeModel) tree.getModel();
                        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                        model.reload(filterDMTN);
                        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                    }
                });
            }
        }
    }
}
