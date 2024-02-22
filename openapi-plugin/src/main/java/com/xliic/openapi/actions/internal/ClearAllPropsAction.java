package com.xliic.openapi.actions.internal;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;

public class ClearAllPropsAction extends AnAction {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        SettingsService settingsService = SettingsService.getInstance();
        List<String> keys = settingsService.getKeys();
        for (String key : keys) {
            settingsService.unsetValue(key);
        }
        MsgUtils.info(project, "All settings have been cleared, reboot the IDE", true);
    }
}
