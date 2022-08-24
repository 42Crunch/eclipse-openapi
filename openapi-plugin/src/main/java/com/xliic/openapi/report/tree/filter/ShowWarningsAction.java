package com.xliic.openapi.report.tree.filter;

import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

public class ShowWarningsAction extends ToggleAction implements DumbAware {

    private final ReportPanel panel;
    private final FilterState filterState;

    public ShowWarningsAction(ReportPanel panel) {
        super(OpenApiBundle.message("openapi.action.show.warnings"), "", OpenApiIcons.ReportWarning);
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }

    @Override
    public boolean isSelected(@NotNull AnJActionEvent event) {
        return filterState != null && filterState.isShowWarning();
    }

    @Override
    public void setSelected(@NotNull AnJActionEvent event, boolean showWarning) {
        filterState.setShowWarning(showWarning);
        panel.reloadAndRestoreExpansion();
    }
}
