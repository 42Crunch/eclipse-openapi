package com.xliic.openapi.actions.internal;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.util.EclipseUtil;

public class CloseWebEditors extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(true);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
    	EclipseUtil.closeAllWebPages();
    }
}
