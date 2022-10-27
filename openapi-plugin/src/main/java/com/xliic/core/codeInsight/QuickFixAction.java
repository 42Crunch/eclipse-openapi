package com.xliic.core.codeInsight;

import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.core.util.TextRange;

public class QuickFixAction {

    public static void registerQuickFixAction(@Nullable HighlightInfo info, @Nullable IntentionAction action) {}

    public static void registerQuickFixActions(
            @Nullable HighlightInfo info,
            @Nullable TextRange fixRange,
            @NotNull Iterable<? extends IntentionAction> actions) {}

    public static void registerQuickFixActions(
            @NotNull TextEditorHighlightingPass pass,
            @NotNull String pointer,
            @NotNull List<IntentionAction> actions) {
        pass.addPointerActions(pointer, actions);
    }
}
