package com.xliic.idea.project;

import org.jetbrains.annotations.NotNull;

public class ProjectView {

	private final static ProjectView projectView = new ProjectView();

	public static ProjectView getInstance(@NotNull Project project) {
		return projectView;
	}

	public void refresh() {
		// todo
	}
}
