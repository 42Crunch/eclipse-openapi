package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.PropertiesComponent;
import com.xliic.idea.StartupActivity;
import com.xliic.idea.project.Project;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.services.PreviewService;
import com.xliic.openapi.services.SnippetService;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;

public class OpenAPIStartupActivity implements StartupActivity.DumbAware {

    @Override
    public void runActivity(@NotNull Project project) {

        // Load snippets from disk
        SnippetService.getInstance(project).load();

        // Set plugin properties
        PropertiesComponent pc = PropertiesComponent.getInstance();
        if (!pc.isValueSet(PreviewKeys.PORT)) {
            pc.setValue(PreviewKeys.PORT, DEFAULT_SERVER_PORT, DEFAULT_SERVER_PORT);
        }
        if (!pc.isValueSet(PreviewKeys.RENDERER)) {
            pc.setValue(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX, DEFAULT_RENDERER_INDEX);
        }

        // Create web server resources
        try {
            PreviewService.getInstance().initWebResources();
        }
        catch (Exception e) {
            e.printStackTrace();
            return;
        }

        // Run jetty web socket server in a thread
        ApplicationManager.getApplication().executeOnPooledThread(() -> {
            try {
                PreviewService.getInstance().startServer();
            }
            catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
}