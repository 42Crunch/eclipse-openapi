package com.xliic.openapi.platform.tree.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessResponseCallback;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import com.xliic.openapi.utils.MsgUtils;

public class PlatformDeleteCollectionAction extends AnJAction implements DumbAware {

    private static final String CONFIRM_MSG = "Are you sure you want to delete the selected collection?";
    private static final String NOT_EMPTY_MSG = "This collection is not empty, please remove all APIs in the collection first.";

    private final Project project;
    private final Tree tree;
    private final String collectionId;
    private final boolean isEmpty;

    public PlatformDeleteCollectionAction(@NotNull Project project, @NotNull Tree tree, @NotNull String collectionId, boolean isEmpty) {
        super("Delete", "Delete collection", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
        this.isEmpty = isEmpty;
    }
    
    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        if (isEmpty) {
            if (MsgUtils.confirm(project, CONFIRM_MSG)) {
                PlatformAPIs.deleteCollection(collectionId, new SuccessResponseCallback(project) {
                    @Override
                    public void onCode200Response() {
                        SwingUtilities.invokeLater(() -> PlatformCollectionUtils.delete(tree, collectionId));
                    }
                });
            }
        } else {
            MsgUtils.warning(project, NOT_EMPTY_MSG, true);
        }
    }
}
