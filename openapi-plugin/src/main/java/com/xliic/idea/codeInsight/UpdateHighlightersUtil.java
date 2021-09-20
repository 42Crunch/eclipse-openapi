package com.xliic.idea.codeInsight;

import java.util.Collection;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.codeHighlighting.EditorColorsScheme;
import com.xliic.idea.document.Document;
import com.xliic.idea.project.Project;

public class UpdateHighlightersUtil {

	public static void setHighlightersToEditor(@NotNull Project project, @NotNull Document document, int startOffset,
			int endOffset, @NotNull Collection<? extends HighlightInfo> highlights,
			@Nullable EditorColorsScheme colorsScheme, int group) {
		// todo
	}
}
