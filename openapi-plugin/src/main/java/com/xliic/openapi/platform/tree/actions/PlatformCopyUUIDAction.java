package com.xliic.openapi.platform.tree.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

public class PlatformCopyUUIDAction extends AnJAction implements DumbAware {

    private final String id;

    public PlatformCopyUUIDAction(String id) {
        super("Copy UUID to Clipboard", "", null);
        this.id = id;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Utils.onCopyIssueId(id);
    }
}
