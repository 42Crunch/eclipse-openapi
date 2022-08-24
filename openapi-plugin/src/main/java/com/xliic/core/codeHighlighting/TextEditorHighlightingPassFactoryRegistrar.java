package com.xliic.core.codeHighlighting;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public interface TextEditorHighlightingPassFactoryRegistrar {

    public void registerHighlightingPassFactory(@NotNull TextEditorHighlightingPassRegistrar registar,
            @NotNull Project project);
}
