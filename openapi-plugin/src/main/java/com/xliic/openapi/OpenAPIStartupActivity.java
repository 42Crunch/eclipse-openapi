package com.xliic.openapi;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;

import org.apache.commons.lang.RandomStringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.startup.StartupActivity;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.settings.SettingsKeys;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {
	
	public static final String PluginTempDir = getPluginTempDir();

	@Override
	public void runActivity(@NotNull Project project) {
        // Load quickfix configuration
        QuickFixService.getInstance().load();
        // Set default properties values
        if (!PropertiesComponent.getInstance().isValueSet(SettingsKeys.ABC_SORT)) {
            PropertiesComponent.getInstance().setValue(SettingsKeys.ABC_SORT, true);
        }
		// Set preview properties
		PropertiesComponent pc = PropertiesComponent.getInstance();
		if (!pc.isValueSet(PreviewKeys.PORT)) {
			pc.setValue(PreviewKeys.PORT, DEFAULT_SERVER_PORT, DEFAULT_SERVER_PORT);
		}
		if (!pc.isValueSet(PreviewKeys.RENDERER)) {
			pc.setValue(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX, DEFAULT_RENDERER_INDEX);
		}
	}
	
    private static String getPluginTempDir() {
        return "xliic_" + RandomStringUtils.random(10, true, false).toLowerCase();
    }
}