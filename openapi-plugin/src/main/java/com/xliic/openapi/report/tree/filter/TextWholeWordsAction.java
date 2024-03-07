package com.xliic.openapi.report.tree.filter;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.openapi.SearchWidget;
import com.xliic.openapi.report.tree.ui.ReportPanel;

import icons.OpenApiIcons;

public class TextWholeWordsAction extends ToggleAction {

    private final ReportPanel panel;
    private final FilterState filterState;

    public TextWholeWordsAction(ReportPanel panel) {
        super(SearchWidget.ACTION_MATCH_WORD, null, OpenApiIcons.Words);
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.EDT;
    }

    @Override
    public boolean isSelected(@NotNull AnJActionEvent anActionEvent) {
        return filterState != null && filterState.isWholeWordsState();
    }

    @Override
    public void setSelected(@NotNull AnJActionEvent anActionEvent, boolean b) {
        filterState.setWholeWordsState(b);
        panel.fastReload();
    }
}
