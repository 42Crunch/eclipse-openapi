package com.xliic.openapi.platform.dictionary;

import static com.xliic.core.notification.NotificationAction.createSimpleExpiring;
import static com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit.ALWAYS;
import static com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit.CHOICE;
import static com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit.NEVER;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.notification.NotificationGroupManager;
import com.xliic.core.notification.NotificationType;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;

public class DictionaryUtils {

    private static final String DICTIONARY = "OpenAPI Editor dictionary";
    private static final String CHOICE_ALWAYS_TEXT = "Remember your choice and always update document with Data Dictionary properties?";
    private static final String CHOICE_NEVER_TEXT = "Remember your choice and never update document with Data Dictionary properties?";
    private static final String ALWAYS_UPDATE = "Always update";
    private static final String NEVER_UPDATE = "Never update";
    private static final String CANCEL = "Cancel";

    public static void suggestAlwaysUpdate(@NotNull Project project) {
        NotificationGroupManager.getInstance().getNotificationGroup(DICTIONARY)
                .createNotification(CHOICE_ALWAYS_TEXT, NotificationType.INFORMATION)
                .addAction(createSimpleExpiring(ALWAYS_UPDATE, () -> SettingsService.getInstance().setValue(CHOICE, ALWAYS)))
                .addAction(createSimpleExpiring(CANCEL, () -> {}))
                .notify(project);
    }

    public static void suggestNeverUpdate(@NotNull Project project) {
        NotificationGroupManager.getInstance().getNotificationGroup(DICTIONARY)
                .createNotification(CHOICE_NEVER_TEXT, NotificationType.INFORMATION)
                .addAction(createSimpleExpiring(NEVER_UPDATE, () -> SettingsService.getInstance().setValue(CHOICE, NEVER)))
                .addAction(createSimpleExpiring(CANCEL, () -> {}))
                .notify(project);
    }
}
