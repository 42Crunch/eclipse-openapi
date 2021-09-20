package com.xliic.idea.action;

import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class AnActionEvent {

	private final AnAction action;

	public AnActionEvent(AnAction action) {
		this.action = action;
	}

	public Project getProject() {
		return OpenAPIAbstractUIPlugin.getInstance().getProject();
	}

	public AnActionEvent getPresentation() {
		return this;
	}

	public void setEnabled(boolean enabled) {
		action.setEnabled(enabled);
	}
}
