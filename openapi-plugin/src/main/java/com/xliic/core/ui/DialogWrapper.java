package com.xliic.core.ui;

import org.eclipse.jface.dialogs.StatusDialog;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;

public class DialogWrapper extends StatusDialog {

	protected DialogWrapper(@Nullable Project project, boolean canBeParent) {
		super(EclipseUtil.getShell());
	}

	public void showAndGet() {
		open();
	}
}
