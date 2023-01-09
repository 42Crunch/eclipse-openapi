package com.xliic.core.ide;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.Utils;

public class CommonActionsManager {

    private static CommonActionsManager manager;

    public static CommonActionsManager getInstance() {
        if (manager == null) {
            manager = new CommonActionsManager();
        }
        return manager;
    }

    public AnJAction createExpandAllHeaderAction(@NotNull TreeExpander expander, @NotNull Tree tree) {
        return new AnJAction("Expand All", "Expand All", AllIcons.Actions.ExpandAll) {

            @Override
            public void update(AnJActionEvent event) {
                updatePresentation(event);
            }

            @Override
            public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
                tree.expandAll();
            }
        };
    }

    public AnJAction createCollapseAllHeaderAction(@NotNull TreeExpander expander, @NotNull Tree tree) {
        return new AnJAction("Collapse All", "Collapse All", AllIcons.Actions.CollapseAll) {

            @Override
            public void update(AnJActionEvent event) {
                updatePresentation(event);
            }

            @Override
            public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
                tree.collapseAll();
            }
        };
    }

    private void updatePresentation(AnJActionEvent event) {
        Project project = event.getProject();
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            event.getPresentation().setEnabled(astService.getRootNode(file) != null);
        } else {
            event.getPresentation().setEnabled(false);
        }
    }
}
