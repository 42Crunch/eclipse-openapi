package com.xliic.core.actionSystem;

import org.eclipse.jface.action.Action;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class AnJActionEvent {

	@SuppressWarnings("unused")
	private final Action action;
	private volatile boolean enabled;

	public AnJActionEvent(@NotNull AnJAction action) {
		this.action = action;
		enabled = true;
	}

	public Project getProject() {
		return Project.getInstance();
	}

	public AnJActionEvent getPresentation() {
		return this;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	public boolean isEnabled() {
		return enabled;
	}
}
