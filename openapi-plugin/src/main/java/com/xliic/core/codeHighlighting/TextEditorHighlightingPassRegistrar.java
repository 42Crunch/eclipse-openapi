package com.xliic.core.codeHighlighting;

import org.jetbrains.annotations.NotNull;

public abstract class TextEditorHighlightingPassRegistrar {

    public abstract int registerTextEditorHighlightingPass(@NotNull TextEditorHighlightingPassFactory factory, final int[] runAfterCompletionOf,
            int[] runAfterStartingOf, boolean runIntentionsPassAfter, int forcedPassId);
}
