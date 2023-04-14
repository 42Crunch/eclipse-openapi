package com.xliic.openapi.environment.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class ShowEnvWindow extends WebAppProduce {

    @NotNull
    private final Project project;

    public ShowEnvWindow(@NotNull Project project) {
        super("showEnvWindow");
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        EnvService.getInstance(project).createOrActiveEnvWindow();
    }
}
