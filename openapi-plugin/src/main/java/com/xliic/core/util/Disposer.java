package com.xliic.core.util;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.ui.popup.JBPopup;

public class Disposer {

	public static void register(@NotNull JBPopup parent, @NotNull Disposable child) {
		parent.registerDisposable(child);
	}
}
