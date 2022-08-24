package com.xliic.core.codeInsight;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.TextRange;

public class QuickFixAction {

    public static void registerQuickFixAction(@Nullable HighlightInfo info, @Nullable IntentionAction action) {
    }

    public static void registerQuickFixActions(@Nullable HighlightInfo info, @Nullable TextRange fixRange,
            @NotNull Iterable<? extends IntentionAction> actions) {
    }
}
