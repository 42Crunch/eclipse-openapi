package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectManagerListener;
import com.xliic.openapi.services.PlatformService;

public class OpenAPIProjectManagerListener extends ProjectManagerListener {

    @Override
    public void projectClosingBeforeSave(@NotNull Project project) {
        PlatformService platformService = PlatformService.getInstance(project);
        platformService.clearPlatformFileModifications();
    }
}
