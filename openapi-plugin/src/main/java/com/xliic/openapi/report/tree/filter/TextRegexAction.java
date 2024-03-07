package com.xliic.openapi.report.tree.filter;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.openapi.SearchWidget;
import com.xliic.openapi.report.tree.ui.ReportPanel;

import icons.OpenApiIcons;

public class TextRegexAction extends ToggleAction {

    private final ReportPanel panel;
    private final FilterState filterState;

    public TextRegexAction(ReportPanel panel) {
        super(SearchWidget.ACTION_MATCH_REGEX, null, OpenApiIcons.Regex);
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.EDT;
    }

    @Override
    public boolean isSelected(@NotNull AnJActionEvent anActionEvent) {
        return filterState != null && filterState.isRegexState();
    }

    @Override
    public void setSelected(@NotNull AnJActionEvent anActionEvent, boolean b) {
        filterState.setRegexState(b);
        panel.fastReload();
    }
}
