package com.xliic.core.codeInsight;

import java.util.Collection;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.EditorColorsScheme;
import com.xliic.core.project.Project;

public class UpdateHighlightersUtil {

    public static void setHighlightersToEditor(@NotNull Project project, @NotNull Document document, int startOffset, int endOffset,
            @NotNull Collection<? extends HighlightInfo> highlights, @Nullable EditorColorsScheme colorsScheme, int group) {
    }
}
