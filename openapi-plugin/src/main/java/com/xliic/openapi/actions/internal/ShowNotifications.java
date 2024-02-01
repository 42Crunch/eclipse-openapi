package com.xliic.openapi.actions.internal;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.notification.NotificationGroupManager;
import com.xliic.core.notification.NotificationType;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.openapi.utils.MsgUtils;

import org.apache.commons.lang3.RandomStringUtils;
import org.jetbrains.annotations.NotNull;

public class ShowNotifications extends AnAction implements DumbAware {

    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(true);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
   		MsgUtils.notifyLimit(project, 10, "per-operation Conformance Scans");
   		MsgUtils.notifyTokenNotFound(project, "docker");
   		MsgUtils.notifyError(project, "Random error text " + RandomStringUtils.random(50, true, false));
   		MsgUtils.notifyInfo(project, "Random info text " + RandomStringUtils.random(100, true, false));
   		NotificationGroupManager.getInstance().getNotificationGroup("").createNotification(
   				"Random warning text " + RandomStringUtils.random(150, true, false), NotificationType.WARNING).notify(project);
    }
}
