package com.xliic.openapi.launchpad;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.launchpad.ui.LaunchPadPanelView;
import com.xliic.openapi.utils.WindowUtils;

public class LaunchPadAction extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void update(@NotNull AnActionEvent event) {
    	// todo: condition?
        event.getPresentation().setEnabled(true);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        ToolWindowManager manager = ToolWindowManager.getInstance(project);
        ToolWindow window = manager.getToolWindow(ToolWindowId.LAUNCH_PAD);
        if (window != null && !window.isDisposed()) {
        	LaunchPadPanelView view = (LaunchPadPanelView) window.getView();
            if (view != null && !view.isReady()) {
                window.remove();
            }
        }
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, ToolWindowId.LAUNCH_PAD);
        });
    }
}
