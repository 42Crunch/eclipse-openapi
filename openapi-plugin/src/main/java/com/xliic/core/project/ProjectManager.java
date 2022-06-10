package com.xliic.core.project;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ProjectManager {
	
	private static ProjectManager manager;
	
	public static @Nullable ProjectManager getInstanceIfCreated() {
		if (manager == null) {
			manager = new ProjectManager();
		}
		return manager;
	}
	
	public @NotNull Project [] getOpenProjects() {
		Project[] projects = new Project[1];
		projects[0] = Project.getInstance();
		return projects;
	}
}
