package com.xliic.idea;

import org.jetbrains.annotations.NotNull;

import org.eclipse.swt.widgets.Display;

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

	public void executeOnPooledThread(@NotNull Runnable runnable) {
    	Thread thread = new Thread(runnable);
    	thread.start();
	}
}
