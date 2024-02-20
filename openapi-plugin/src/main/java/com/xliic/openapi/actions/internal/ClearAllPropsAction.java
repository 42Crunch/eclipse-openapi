package com.xliic.openapi.actions.internal;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.MsgUtils;

public class ClearAllPropsAction extends AnAction {

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        Set<String> updatedKeys = new HashSet<>();
        Map<String, Object> prevData = new HashMap<>();
        SettingsService settingsService = SettingsService.getInstance();
        List<String> keys = settingsService.getKeys();
        for (String key : keys) {
            updatedKeys.add(key);
            settingsService.unsetValue(key);
        }
        project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData);
        MsgUtils.info(project, "All settings have been cleared, reboot the IDE", true);
    }
}
