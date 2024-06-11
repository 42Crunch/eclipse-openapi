package com.xliic.openapi.utils;

import static com.xliic.core.notification.NotificationAction.createSimpleExpiring;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.notification.NotificationGroupManager;
import com.xliic.core.notification.NotificationType;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;

public class MsgUtils {

    private static final String GROUP_ID = "OpenAPI Editor general notifications";
    private static final String LIMIT_NOTIFICATIONS = "OpenAPI Editor limit left";
    private static final String UPGRADE_TEXT = "Upgrade";
    private static final String UPGRADE_URL = "https://42crunch.com/ide-upgrade/";
    
    public static void notifyLimit(@NotNull Project project, long left, @NotNull String type) {
          String msg = "You have " + left + " " + type + " left. Consider upgrading your 42Crunch subscription.";
          NotificationGroupManager.getInstance().getNotificationGroup(LIMIT_NOTIFICATIONS).
          createNotification(msg, NotificationType.INFORMATION).addAction(
                  createSimpleExpiring(UPGRADE_TEXT, () -> BrowserUtil.browse(UPGRADE_URL))).notify(project);
    }

    public static void notifyError(@NotNull Project project, @NotNull String msg) {
        NotificationGroupManager.getInstance().getNotificationGroup(GROUP_ID).createNotification(msg, NotificationType.ERROR).notify(project);
    }

    public static void notifyInfo(@NotNull Project project, @NotNull String msg) {
        NotificationGroupManager.getInstance().getNotificationGroup(GROUP_ID).createNotification(msg, NotificationType.INFORMATION).notify(project);
    }

    public static void error(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, "Error", Messages.getErrorIcon()));
        } else {
            Messages.showMessageDialog(project, msg, "Error", Messages.getErrorIcon());
        }
    }

    public static void warning(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, "Warning", Messages.getWarningIcon()));
        } else {
            Messages.showMessageDialog(project, msg, "Warning", Messages.getWarningIcon());
        }
    }

    public static void info(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        info(project, msg, "Info", insideEDT);
    }

    public static void info(@NotNull Project project, @NotNull String msg, @NotNull String title, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, title, Messages.getInformationIcon()));
        } else {
            Messages.showMessageDialog(project, msg, title, Messages.getInformationIcon());
        }
    }
    
    public static boolean confirm(@NotNull Project project, @NotNull String msg) {
        return Messages.showOkCancelDialog(project, msg, "Confirm", "Yes", "Cancel", Messages.getQuestionIcon()) == Messages.OK;
    }
}
