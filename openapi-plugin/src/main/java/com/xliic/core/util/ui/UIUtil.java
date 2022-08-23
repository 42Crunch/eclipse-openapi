package com.xliic.core.util.ui;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.Color;

public class UIUtil {

	public static void invokeLaterIfNeeded(@NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}
	
	public static Color getTreeBackground() {
		return null;
	}
}
