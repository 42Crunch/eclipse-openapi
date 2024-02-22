package com.xliic.openapi.outline.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.outline.ui.OutlinePanel;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;


public class AbcSortAction extends ToggleAction implements DumbAware {

    @NotNull
    private final Project project;
    @NotNull
    private final OutlinePanel panel;
    private boolean abcSort;

    public AbcSortAction(@NotNull Project project, @NotNull OutlinePanel panel) {
        super("Sort Alphabetically", "Sort alphabetically", AllIcons.ObjectBrowser.Sorted);
        this.project = project;
        this.panel = panel;
        abcSort = SettingsService.getInstance().getBoolean(Settings.Outline.ABC_SORT);
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public final boolean isSelected(@NotNull AnJActionEvent event) {
        return abcSort;
    }

    @Override
    public final void setSelected(@NotNull AnJActionEvent event, boolean flag) {
        abcSort = flag;
        panel.sortTree(abcSort);
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            event.getPresentation().setEnabled(astService.getRootNode(file) != null);
        } else {
            event.getPresentation().setEnabled(false);
        }
    }
}
