package com.xliic.idea;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.project.Project;

public interface StartupActivity {
	public interface DumbAware {
		public void runActivity(@NotNull Project project);
	}
}
