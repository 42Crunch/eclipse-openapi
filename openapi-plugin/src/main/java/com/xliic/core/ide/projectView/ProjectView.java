package com.xliic.core.ide.projectView;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class ProjectView {

	private final static ProjectView projectView = new ProjectView();

	public static ProjectView getInstance(@NotNull Project project) {
		return projectView;
	}

	public void refresh() {
		// todo
	}
}
