package com.xliic.openapi.platform.tree.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.DictionaryService;

public class PlatformRefreshAction extends AnJAction implements DumbAware {

    private final Project project;
    private final Tree tree;

    public PlatformRefreshAction(@NotNull Project project, @NotNull Tree tree) {
        super("Reload", "Reload all tree from platform", AllIcons.Actions.Refresh);
        this.project = project;
        this.tree = tree;
    }

    @Override
    public void update(AnJActionEvent event) {
        event.getPresentation().setEnabled(PlatformUtils.hasCollectionsLoaded(project, tree));
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
        anActionEvent.getPresentation().setEnabled(false);
        DictionaryService ddService = DictionaryService.getInstance(project);
        ddService.reload(true, false);
        PlatformUtils.reloadAll(project, tree);
    }
}
