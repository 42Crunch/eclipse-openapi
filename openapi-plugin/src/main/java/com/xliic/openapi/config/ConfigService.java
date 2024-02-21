package com.xliic.openapi.config;

import static com.xliic.openapi.ToolWindowId.CONFIG;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.services.IConfigService;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.utils.WindowUtils;

public final class ConfigService implements IConfigService {

    @NotNull
    private final Project project;

    public ConfigService(@NotNull Project project) {
        this.project = project;
    }

    public static ConfigService getInstance(@NotNull Project project) {
        return project.getService(ConfigService.class);
    }

    public void createOrActiveEnvWindow() {
        WindowUtils.openWebTab(project, "config", CONFIG, () ->
        	project.getMessageBus().syncPublisher(ConfigListener.TOPIC).loadConfig(new Config(true)));
    }
}
