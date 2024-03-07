package com.xliic.openapi.report.tree.filter;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.openapi.SearchWidget;
import com.xliic.openapi.report.tree.ui.ReportPanel;

import icons.OpenApiIcons;

public class TextCaseSensitiveAction extends ToggleAction {

    private final ReportPanel panel;
    private final FilterState filterState;

    public TextCaseSensitiveAction(ReportPanel panel) {
        super(SearchWidget.ACTION_MATCH_CASE, null, OpenApiIcons.MatchCase);
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.EDT;
    }

    @Override
    public boolean isSelected(@NotNull AnJActionEvent anActionEvent) {
        return filterState != null && filterState.isCaseSensitiveState();
    }

    @Override
    public void setSelected(@NotNull AnJActionEvent anActionEvent, boolean b) {
        filterState.setCaseSensitiveState(b);
        panel.fastReload();
    }
}
