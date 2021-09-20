package com.xliic.idea.codeHighlighting;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;

public interface TextEditorHighlightingPassFactory {

	public TextEditorHighlightingPass createHighlightingPass(@NotNull final PsiFile file, @NotNull final Editor editor);
}
