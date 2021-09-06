package com.xliic.idea.action;

import com.xliic.idea.project.Project;

public class AnActionEvent {
	
	private final AnAction action;
	
	public AnActionEvent(AnAction action) {
		this.action = action;
	}

	public Project getProject() {
		return new Project();
	}
	
	public AnActionEvent getPresentation() {
		return this;
	}
	
	public void setEnabled(boolean enabled) {
		action.setEnabled(enabled);
	}
}
