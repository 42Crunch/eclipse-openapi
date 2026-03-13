package com.xliic.openapi.graphql;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.listeners.TreeDocumentListener;

public class GqlDocumentListener extends TreeDocumentListener {

    public GqlDocumentListener(@NotNull Project project) {
        super(project);
    }
}
