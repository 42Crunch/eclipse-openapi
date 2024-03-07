package com.xliic.openapi.report.tree.filter;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanel;

import icons.OpenApiIcons;

public class ShowErrorAction extends ToggleAction implements DumbAware {

    private final ReportPanel panel;
    private final FilterState filterState;

    public ShowErrorAction(ReportPanel panel) {
        super(OpenApiBundle.message("openapi.action.show.errors"), "", OpenApiIcons.ReportError);
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }
    
    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.EDT;
    }

    @Override
    public boolean isSelected(@NotNull AnJActionEvent event) {
        return filterState != null && filterState.isShowError();
    }

    @Override
    public void setSelected(@NotNull AnJActionEvent event, boolean showError) {
        filterState.setShowError(showError);
        panel.fastReload();
    }
}
