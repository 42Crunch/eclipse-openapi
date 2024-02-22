package com.xliic.openapi.report.tree.filter;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.ui.SearchDialogWrapper;
import com.xliic.core.util.Icon;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.report.tree.ui.ReportPanel;

public class ShowFilterAction extends AnJAction {

    private final ReportPanel panel;
    private final FilterState filterState;

    public ShowFilterAction(ReportPanel panel) {
        super("Search", "", new Icon(OpenAPIImages.Filter));
        this.panel = panel;
        this.filterState = panel.getFilterState();
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.EDT;
    }
    
    @Override
    public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
        String text = filterState.getSearchText();
        boolean caseSensitive = filterState.isCaseSensitiveState();
        boolean regex = filterState.isRegexState();
        boolean wholeWords = filterState.isWholeWordsState();
        SearchDialogWrapper dialog = new SearchDialogWrapper(panel.getProject(), text, caseSensitive, regex, wholeWords);
        dialog.open();
        if (dialog.isUpdated()) {
            filterState.setSearchText(dialog.getText());
            filterState.setCaseSensitiveState(dialog.isCaseSensitive());
            filterState.setRegexState(dialog.isRegex());
            filterState.setWholeWordsState(dialog.isWholeWords());
            panel.reloadAndRestoreExpansion();
        }
    }
}
