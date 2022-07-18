package com.xliic.openapi;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;

import org.apache.commons.lang.RandomStringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.startup.StartupActivity;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.settings.SettingsKeys;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {
	
	public static final String PluginTempDir = getPluginTempDir();

    private static final String PREFIX = "xliic";
    private static final int LENGTH = 10;
    
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
        // Platform
    	// Eclipse Development Note 
    	// Call getInstance to initialize the service to subscribe for events
		PlatformService platformService = PlatformService.getInstance(project);
        PlatformConnection.setDefaultPlatformURL();
        if (!PlatformConnection.isEmpty()) {
        	// Eclipse Development Note 
        	// The project may have been deleted occasionally
        	platformService.invokeAndWaitToCreatePlatformWindow(false);
        }
	}
	
    public static boolean isMyPluginTempDir(@NotNull String dirName) {
        return PluginTempDir.equals(dirName);
    }

    public static boolean isPluginTempDirTemplate(@NotNull String dirName) {
        if (dirName.contains("_")) {
            String[] items = dirName.split("_");
            return (items.length == 2) && PREFIX.equals(items[0]) && (items[1].length() == LENGTH);
        }
        return false;
    }

    private static String getPluginTempDir() {
        return PREFIX + "_" + RandomStringUtils.random(LENGTH, true, false).toLowerCase();
    }
}