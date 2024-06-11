package com.xliic.openapi.actions.internal;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.whatsnew.WhatsNewService;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.settings.Settings.Plugin.VERSION;

public class WhatsNewAction extends AnAction {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project != null) {
            WhatsNewService whatsNewService = WhatsNewService.getInstance(project);
            if (whatsNewService.hasWhatsNewWebPage()) {
                SettingsService.getInstance().setValue(VERSION, "1.00");
                whatsNewService.openWhatsNewPageIfNeeded();
            }
        }
    }
}
