package com.xliic.openapi.platform.tree.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessResponseCallback;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;

public class PlatformDeleteAPIAction extends AnJAction implements DumbAware {

    private static final String CONFIRM_MSG = "Are you sure you want to delete the selected API?";

    private final Project project;
    private final Tree tree;
    private final String apiId;

    public PlatformDeleteAPIAction(@NotNull Project project, @NotNull Tree tree, @NotNull String apiId) {
        super("Delete", "Delete API", null);
        this.project = project;
        this.tree = tree;
        this.apiId = apiId;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        final int rc = Messages.showOkCancelDialog(project, CONFIRM_MSG, "Confirm", "Yes", "Cancel", Messages.getQuestionIcon());
        if (rc == Messages.OK) {
            PlatformAPIs.deleteAPI(apiId, new SuccessResponseCallback(project) {
                @Override
                public void onCode200Response() {
                    SwingUtilities.invokeLater(() -> PlatformAPIUtils.delete(tree, apiId));
                }
            });
        }
    }
}
