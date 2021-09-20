package com.xliic.idea.project;

import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;

public class Project {

	private volatile boolean isDisposed;

	public Project() {
		this.isDisposed = false;
	}

	public String getLocationHash() {
		return String.valueOf(this.hashCode());
	}

	public Shell getShell() {
		IWorkbench workbench = PlatformUI.getWorkbench();
		IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
		return window.getShell();
	}

	public boolean isDisposed() {
		return isDisposed;
	}

	public void dispose() {
		isDisposed = true;
	}
}
