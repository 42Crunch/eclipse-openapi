package com.xliic.core.notification;

import org.jetbrains.annotations.NotNull;

public class NotificationGroupManager {

    private static final NotificationGroupManager manager = new NotificationGroupManager();

    @NotNull
    public static NotificationGroupManager getInstance() {
        return manager;
    }
    
    @NotNull
    public NotificationGroup getNotificationGroup(@NotNull String groupId) {
    	return new NotificationGroup(groupId);
    }
}
