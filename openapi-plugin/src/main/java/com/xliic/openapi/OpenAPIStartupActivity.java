package com.xliic.openapi;

import org.apache.commons.lang.RandomStringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.startup.StartupActivity;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.services.SnippetService;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {
	
	public static final String PluginTempDir = getPluginTempDir();

	@Override
	public void runActivity(@NotNull Project project) {

		// Load snippets from disk
		SnippetService.getInstance(project).load();

		// Load quickfix configuration
		QuickFixService.getInstance().load();
	}
	
    private static String getPluginTempDir() {
        return "xliic_" + RandomStringUtils.random(10, true, false).toLowerCase();
    }
}