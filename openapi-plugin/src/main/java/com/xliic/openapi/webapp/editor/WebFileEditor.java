package com.xliic.openapi.webapp.editor;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.WebApp;

public abstract class WebFileEditor extends WebApp {

    public WebFileEditor(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, file.getId(), file.getResourceId(), parent, file.getHandler());
    }
}
