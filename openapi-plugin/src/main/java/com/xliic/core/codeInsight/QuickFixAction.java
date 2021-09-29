package com.xliic.core.codeInsight;

import org.jetbrains.annotations.Nullable;

public class QuickFixAction {

	public static void registerQuickFixAction(@Nullable HighlightInfo info, @Nullable IntentionAction action) {
		info.addAction(action);
	}
}
