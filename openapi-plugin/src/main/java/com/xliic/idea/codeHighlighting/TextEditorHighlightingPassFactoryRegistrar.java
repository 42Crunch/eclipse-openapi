package com.xliic.idea.codeHighlighting;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.project.Project;

public interface TextEditorHighlightingPassFactoryRegistrar {

	public void registerHighlightingPassFactory(@NotNull TextEditorHighlightingPassRegistrar registar,
			@NotNull Project project);
}
