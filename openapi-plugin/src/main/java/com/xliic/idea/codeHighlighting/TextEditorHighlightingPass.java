package com.xliic.idea.codeHighlighting;

import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.ProgressIndicator;
import com.xliic.idea.codeInsight.HighlightInfo;
import com.xliic.idea.document.Document;
import com.xliic.idea.project.Project;

public abstract class TextEditorHighlightingPass {

	protected final Project myProject;
	protected final Document myDocument;

	public TextEditorHighlightingPass(@NotNull Project project, @NotNull Document document,
			boolean runIntentionPassAfter) {
		myProject = project;
		myDocument = document;
	}

	public abstract void doCollectInformation(@NotNull ProgressIndicator progress);

	public abstract void doApplyInformationToEditor();

	public final int getId() {
		return -1;
	}

	@Nullable
	public EditorColorsScheme getColorsScheme() {
		return null;
	}

	public abstract List<HighlightInfo> getInformationToEditor();
}
