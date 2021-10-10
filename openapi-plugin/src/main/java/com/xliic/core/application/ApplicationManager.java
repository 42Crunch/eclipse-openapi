package com.xliic.core.application;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Computable;

public class ApplicationManager {

	private final static ApplicationManager applicationManager = new ApplicationManager();

	public static ApplicationManager getApplication() {
		return applicationManager;
	}

	public void invokeLater(@NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}

	public void runReadAction(@NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}

	public <T> T runReadAction(@NotNull Computable<T> computable) {
		return computable.get();
	}

	public void runWriteAction(@NotNull Runnable runnable) {
		Display.getDefault().asyncExec(runnable);
	}

	public void executeOnPooledThread(@NotNull Runnable runnable) {
		Thread thread = new Thread(runnable);
		thread.start();
	}
}