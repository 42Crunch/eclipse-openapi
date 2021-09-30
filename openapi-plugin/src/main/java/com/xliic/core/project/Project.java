package com.xliic.core.project;

import org.eclipse.swt.widgets.Shell;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.utils.WorkbenchUtils;

public class Project {

	private volatile boolean isDisposed;

	public Project() {
		this.isDisposed = false;
	}

	@Nullable
	public String getBasePath() {
		return "";
	}

	public String getLocationHash() {
		return String.valueOf(this.hashCode());
	}

	public Shell getShell() {
		return WorkbenchUtils.getIWorkbenchWindow().getShell();
	}

	public boolean isDisposed() {
		return isDisposed;
	}

	public void dispose() {
		isDisposed = true;
	}
}
