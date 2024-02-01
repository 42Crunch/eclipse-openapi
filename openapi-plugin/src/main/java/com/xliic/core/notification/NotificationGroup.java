package com.xliic.core.notification;

import org.jetbrains.annotations.NotNull;

public class NotificationGroup {
	
	@NotNull 
	private final String groupId;
	
	NotificationGroup(@NotNull String groupId) {
		this.groupId = groupId;
	}

	public Notification createNotification(@NotNull String msg, @NotNull NotificationType type) {
		return new Notification(msg, type);
	}
}
