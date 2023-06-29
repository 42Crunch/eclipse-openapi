package com.xliic.openapi.actions.internal;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.settings.Settings.Platform;
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
        PropertiesComponent.getInstance().cleanAll(updatedKeys, prevData);
        SecurityPropertiesComponent.getInstance().cleanAll(updatedKeys, prevData);
        updatedKeys.add(Platform.TURNED_OFF);
        project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData);
        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).loadConfig(new Config());
        MsgUtils.info(project, "All properties have been cleared, reboot the IDE", true);
    }
}
