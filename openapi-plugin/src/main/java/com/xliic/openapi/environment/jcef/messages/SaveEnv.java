package com.xliic.openapi.environment.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveEnv extends WebAppProduce {

    @NotNull
    private final Project project;

    public SaveEnv(@NotNull Project project) {
        super("saveEnv");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String type = (String) map.get("name");
            Map<String, Object> env = (Map<String, Object>) map.get("environment");
            EnvService.getInstance(project).saveEnv(type, env);
        }
    }
}
