package com.xliic.openapi.utils;

import static com.xliic.core.notification.NotificationAction.createSimpleExpiring;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.notification.NotificationGroupManager;
import com.xliic.core.notification.NotificationType;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.openapi.config.ConfigService;

public class MsgUtils {

    private static final String GROUP_ID = "OpenAPI Editor general notifications";
    private static final String LIMIT_NOTIFICATIONS = "OpenAPI Editor limit left";
    private static final String UPGRADE_TEXT = "Upgrade";

    public static void offerUpgrade(@NotNull Project project) {
        final String message = "You have insufficient usage allowance left to complete your request. As an alternative, " +
                "upgrade to increase your allowances or wait until your monthly usage allowance renews.";
        final int rc = Messages.showOkCancelDialog(project, message, "View Allowances",
                "Upgrade", "Cancel", Messages.getQuestionIcon());
        if (rc == Messages.OK) {
            ConfigService.getInstance(project).createAndOpenConfigWindow();
        }
    }

    public static void notifyAuditsLimit(@NotNull Project project, long left) {
        String msg = "You have " + left + " per-operation Security Audits left this month. " +
                "Your usage allowance resets every month. Upgrade to increase allowances.";
        NotificationGroupManager.getInstance().getNotificationGroup(LIMIT_NOTIFICATIONS).
                createNotification(msg, NotificationType.INFORMATION).addAction(
                        createSimpleExpiring(UPGRADE_TEXT, () -> ConfigService.getInstance(project).createAndOpenConfigWindow())).notify(project);
    }

    public static void notifyScansLimit(@NotNull Project project, long left) {
        String msg = "You have " + left + " per-operation API Scans left this month. " +
                "Your usage allowance resets every month. Upgrade to increase allowances.";
        NotificationGroupManager.getInstance().getNotificationGroup(LIMIT_NOTIFICATIONS).
                createNotification(msg, NotificationType.INFORMATION).addAction(
                        createSimpleExpiring(UPGRADE_TEXT, () -> ConfigService.getInstance(project).createAndOpenConfigWindow())).notify(project);
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
