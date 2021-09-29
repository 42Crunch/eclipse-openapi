package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.startup.StartupActivity;
import com.xliic.openapi.services.SnippetService;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {

	@Override
	public void runActivity(@NotNull Project project) {

		// Load snippets from disk
		SnippetService.getInstance(project).load();
	}
}