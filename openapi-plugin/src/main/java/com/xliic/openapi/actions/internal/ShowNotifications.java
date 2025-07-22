package com.xliic.openapi.actions.internal;

import org.apache.commons.lang3.RandomStringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.notification.NotificationGroupManager;
import com.xliic.core.notification.NotificationType;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.dictionary.DictionaryUtils;
import com.xliic.openapi.utils.MsgUtils;

public class ShowNotifications extends AnAction implements DumbAware {

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

        Project project = anActionEvent.getProject();

        // Test notification balloons
        DictionaryUtils.suggestAlwaysUpdate(project);
        DictionaryUtils.suggestNeverUpdate(project);
   		MsgUtils.notifyAuditsLimit(project, 10);
   		MsgUtils.notifyScansLimit(project, 15);
   		MsgUtils.notifyError(project, "Random error text " + RandomStringUtils.random(50, true, false));
   		MsgUtils.notifyInfo(project, "Random info text " + RandomStringUtils.random(100, true, false));
   		NotificationGroupManager.getInstance().getNotificationGroup("").createNotification(
   				"Random warning text " + RandomStringUtils.random(150, true, false), NotificationType.WARNING).notify(project);

        // Test native logging
   		Logger.getInstance(ShowNotifications.class).info("Plugin info message");
   		Logger.getInstance(ShowNotifications.class).warn("Plugin warn message");
   		Logger.getInstance(ShowNotifications.class).error("Plugin error message");
   		Logger.getInstance(ShowNotifications.class).debug("Plugin debug message");
   		Logger.getInstance(ShowNotifications.class).trace("Plugin trace message");

        // Test native logging with throwable
   		try {
   			int a = 0;
   			@SuppressWarnings("unused")
			int b = 5 / a;
   		} catch (Exception e) {
   			Logger.getInstance(ShowNotifications.class).info(e);
   			Logger.getInstance(ShowNotifications.class).warn(e);
   			Logger.getInstance(ShowNotifications.class).error(e);
   		}
    }
}
