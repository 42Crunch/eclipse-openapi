package com.xliic.core.codeHighlighting;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.psi.PsiFile;

public interface TextEditorHighlightingPassFactory {

    public TextEditorHighlightingPass createHighlightingPass(@NotNull final PsiFile file, @NotNull final Editor editor);
}
