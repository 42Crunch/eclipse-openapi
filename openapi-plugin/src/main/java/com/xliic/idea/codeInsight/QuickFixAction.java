package com.xliic.idea.codeInsight;

import org.jetbrains.annotations.Nullable;

import com.xliic.idea.action.IntentionAction;

public class QuickFixAction {

	public static void registerQuickFixAction(@Nullable HighlightInfo info, @Nullable IntentionAction action) {
		info.addAction(action);
	}
}
