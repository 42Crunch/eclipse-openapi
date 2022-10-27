package com.xliic.openapi.services.api;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public interface IKDBService {

    public String getText();

    public void setText(@NotNull String text);

    public void notifyWhenKDBReady(@NotNull Project project);
}
