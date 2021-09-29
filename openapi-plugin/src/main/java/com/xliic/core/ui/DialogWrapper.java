package com.xliic.core.ui;

import org.eclipse.jface.dialogs.StatusDialog;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;

public class DialogWrapper extends StatusDialog {

	protected DialogWrapper(@Nullable Project project, boolean canBeParent) {
		super(project.getShell());
	}

	public void showAndGet() {
		open();
	}
}
