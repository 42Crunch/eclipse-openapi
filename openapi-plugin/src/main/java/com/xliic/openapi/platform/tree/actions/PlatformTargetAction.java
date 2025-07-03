package com.xliic.openapi.platform.tree.actions;

import static com.xliic.openapi.platform.tree.utils.PlatformUtils.goToTreeNode;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformFileData;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.utils.Utils;

public class PlatformTargetAction extends AnJAction implements DumbAware {

    @NotNull
    private final Project project;
    @NotNull
    private final Tree tree;
    private final boolean forApi;

    public PlatformTargetAction(@NotNull Project project, @NotNull Tree tree, boolean forApi) {
        super("Navigate to selected " + (forApi ? "API" : "Collection"), null, AllIcons.General.Locate);
        this.project = project;
        this.tree = tree;
        this.forApi = forApi;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            PlatformFileData data = PlatformService.getInstance(project).getFileData(file.getPath());
            if (data != null) {
                Node root = ASTService.getInstance(project).getRootNode(file.getPath());
                if (root != null) {
                    DefaultMutableTreeNode rootDMTN = (DefaultMutableTreeNode) tree.getModel().getRoot();
                    event.getPresentation().setEnabled(rootDMTN != null);
                    return;
                }
            }
        }
        event.getPresentation().setEnabled(false);
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            PlatformFileData data = PlatformService.getInstance(project).getFileData(file.getPath());
            if (data != null) {
                Node root = ASTService.getInstance(project).getRootNode(file.getPath());
                if (root != null) {
                    DefaultMutableTreeNode rootDMTN = (DefaultMutableTreeNode) tree.getModel().getRoot();
                    for (int i = 0; i < rootDMTN.getChildCount(); i++) {
                        DefaultMutableTreeNode child = (DefaultMutableTreeNode) rootDMTN.getChildAt(i);
                        Object obj = child.getUserObject();
                        if (obj instanceof PlatformRootCloud) {
                            targetTreeNode(child, data);
                        }
                    }
                }
            }
        }
    }

    private void targetTreeNode(DefaultMutableTreeNode findFromDMTN, PlatformFileData data) {
        for (int i = 0; i < findFromDMTN.getChildCount(); i++) {
            DefaultMutableTreeNode colDMTN = (DefaultMutableTreeNode) findFromDMTN.getChildAt(i);
            PlatformCollection col = (PlatformCollection) colDMTN.getUserObject();
            if (data.getColId().equals(col.getId())) {
                if (forApi) {
                    if (colDMTN.getChildCount() == 0) {
                        // APIs not loaded yet
                        data.setWaitForTargeting(true);
                        PlatformUtils.targetTreeNode(tree, findFromDMTN, colDMTN, () -> tree.expandPath(TreePathUtil.pathToTreeNode(colDMTN)));
                        return;
                    }
                    for (int j = 0; j < colDMTN.getChildCount(); j++) {
                        DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) colDMTN.getChildAt(j);
                        PlatformAPI api = (PlatformAPI) apiDMTN.getUserObject();
                        if (data.getApiId().equals(api.getId())) {
                            PlatformUtils.targetTreeNode(tree, colDMTN, apiDMTN, () -> goToTreeNode(tree, apiDMTN));
                            return;
                        }
                    }
                } else {
                    PlatformUtils.targetTreeNode(tree, findFromDMTN, colDMTN, () -> goToTreeNode(tree, colDMTN));
                    return;
                }
            }
        }
    }
}
