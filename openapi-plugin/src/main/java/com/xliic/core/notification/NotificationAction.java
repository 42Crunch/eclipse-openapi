package com.xliic.core.notification;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;

public class NotificationAction extends AnAction {
	
	@NotNull
	private final String text;
	@NotNull
	private final String href;
	@NotNull
	private final Runnable action;
	
    public NotificationAction(@NotNull String text, @NotNull String href, @NotNull Runnable action) {
		super();
		this.text = text;
		this.href = href;
		this.action = action;
	}

	public static @NotNull NotificationAction createSimpleExpiring(@NotNull String text, @NotNull Runnable action) {
        return new NotificationAction(text, "href_" + text.toLowerCase().replace(" ", "_"), action);
    }

	public @NotNull String getText() {
		return text;
	}

	public @NotNull String getHref() {
		return href;
	}

	public void actionPerformed() {
		action.run();
	}

	@Override
	protected void actionPerformed(@NotNull AnActionEvent event) {
	}

	@Override
	protected @NotNull ActionUpdateThread getActionUpdateThread() {
		return ActionUpdateThread.BGT;
	}
}
