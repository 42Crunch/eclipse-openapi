package com.xliic.openapi.actions.internal;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;

public class ClearCredentialsAction extends AnAction {

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
        settingsService.unsetValue(Settings.Audit.EMAIL);
        settingsService.unsetValue(Settings.Audit.TOKEN);
        settingsService.unsetValue(Settings.Platform.Credentials.URL);
        settingsService.unsetValue(Settings.Platform.Credentials.API_KEY);
        MsgUtils.info(project, "Credentials have been cleared", true);
    }
}
