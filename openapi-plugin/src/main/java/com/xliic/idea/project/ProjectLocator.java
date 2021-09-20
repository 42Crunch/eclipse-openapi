package com.xliic.idea.project;

import java.util.Collection;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class ProjectLocator {

	private final static ProjectLocator projectLocator = new ProjectLocator();

	public static ProjectLocator getInstance() {
		return projectLocator;
	}

	@NotNull
	public Collection<Project> getProjectsForFile(@NotNull VirtualFile file) {
		return List.of(OpenAPIAbstractUIPlugin.getInstance().getProject());
	}
}
