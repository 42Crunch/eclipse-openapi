package com.xliic.core.git;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class GitUtil {
	
	private static final GitRepositoryManager manager = new GitRepositoryManager(Project.getInstance());
	
	public static @NotNull GitRepositoryManager getRepositoryManager(@NotNull Project project) {
		return manager;
	}
}
