package com.xliic.openapi.outline.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.utils.Utils;

import org.jetbrains.annotations.NotNull;

public class CopyPointerAction extends AnJAction implements DumbAware {

    @NotNull
    private final String pointer;

    public CopyPointerAction(@NotNull String pointer) {
        super("Copy JSON Pointer", "", AllIcons.Actions.Copy);
        this.pointer = "#" + pointer;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Utils.onCopyIssueId(pointer);
    }
}
