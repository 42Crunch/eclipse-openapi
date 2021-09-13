package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.StartupActivity;
import com.xliic.idea.project.Project;
import com.xliic.openapi.services.SnippetService;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {

	@Override
	public void runActivity(@NotNull Project project) {

		// Load snippets from disk
		SnippetService.getInstance(project).load();
	}
}