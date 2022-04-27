package com.xliic.core.project;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class ProjectLocator {

	private final static ProjectLocator projectLocator = new ProjectLocator();

	public static ProjectLocator getInstance() {
		return projectLocator;
	}

	@NotNull
	public Collection<Project> getProjectsForFile(@NotNull VirtualFile file) {
		if (file.getIFile().getProject() == null) {
			return Collections.emptyList();
		}
		return List.of(OpenAPIAbstractUIPlugin.getInstance().getProject());
	}
}
