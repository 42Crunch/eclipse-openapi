package com.xliic.core.command;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class WriteCommandAction {

	public static void runWriteCommandAction(Project project, @NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}
}
