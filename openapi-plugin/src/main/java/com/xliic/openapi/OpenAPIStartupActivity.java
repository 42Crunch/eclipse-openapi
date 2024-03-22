package com.xliic.openapi;

import static com.xliic.openapi.settings.Settings.Outline.SHOW_OUTLINE_DEMO;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.startup.StartupActivity;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.inlined.AnnotationService;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.settings.SettingsService;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {

    public OpenAPIStartupActivity() {
        // Load values into cache to avoid performance issues in EDT threads
    	SettingsService.getInstance().loadCache();
    }

    @Override
    public void runActivity(@NotNull Project project) {
        // Download and cache KDB articles to boost first security audit
        AuditService.getInstance(project).downloadArticlesAsync();
        // Load quickfix configuration
        QuickFixService.getInstance().load();
        // Subscribe for events
        PlatformService.getInstance(project).subscribe();
        DictionaryService.getInstance(project).subscribe();
        EnvService.getInstance(project).subscribe();
        AnnotationService.getInstance(project).subscribe();
        // Platform
        if (PlatformConnection.isPlatformIntegrationEnabled()) {
            PlatformService.getInstance(project).createPlatformWindow(false);
            DictionaryService.getInstance(project).reload();
        }
        // Show outline demo if needed
        if (SettingsService.getInstance().getBoolean(SHOW_OUTLINE_DEMO)) {
            ApplicationManager.getApplication().invokeAndWait(() -> EclipseWorkbenchUtil.openPerspective());
            SettingsService.getInstance().setValue(SHOW_OUTLINE_DEMO, false);
        }
    }
}