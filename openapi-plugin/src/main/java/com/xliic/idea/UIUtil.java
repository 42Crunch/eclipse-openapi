package com.xliic.idea;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

public class UIUtil {

	public static void invokeLaterIfNeeded(@NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}
}
