package com.xliic.openapi.platform.callback;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.decorator.PlatformErrorDecorator;
import com.xliic.openapi.services.PlatformService;
import okhttp3.Callback;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.List;
import java.util.Map;

public abstract class SuccessASTResponseWithFailureDecoratorCallback extends SuccessASTResponseCallback {

    protected final Tree tree;
    protected final DefaultMutableTreeNode parentDMTN;

    public SuccessASTResponseWithFailureDecoratorCallback(@NotNull Project project,
                                                          @NotNull Tree tree,
                                                          @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project);
        this.tree = tree;
        this.parentDMTN = parentDMTN;
    }

    @Override
    public void onFailure(@NotNull String reason) {
        SwingUtilities.invokeLater(() -> {
            parentDMTN.removeAllChildren();
            parentDMTN.add(new DefaultMutableTreeNode(new PlatformErrorDecorator(reason), false));
            Object nodeObj = parentDMTN.getUserObject();
            if (nodeObj instanceof PlatformRootCloud) {
                PlatformRootCloud pro = (PlatformRootCloud) nodeObj;
                pro.setChildrenUnavailable(false);
            } else if (nodeObj instanceof PlatformCollection) {
                PlatformCollection pro = (PlatformCollection) nodeObj;
                pro.setChildrenUnavailable(false);
            }
            PlatformService platformService = PlatformService.getInstance(project);
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            callbacks.remove(parentDMTN);
            List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
            PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
            model.reload(parentDMTN);
            TreeUtil.restoreExpandedPaths(tree, expandedPaths);
        });
    }
}
