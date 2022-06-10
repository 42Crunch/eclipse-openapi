package com.xliic.core.ui;

import org.eclipse.jface.dialogs.MessageDialog;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;

public class Messages {

	public static void showMessageDialog(@Nullable Project project, 
										 @NotNull String message, 
										 @NotNull String title,
										 @Nullable Icon icon) {
		if (icon == Icon.ERROR) {
			MessageDialog.openError(EclipseUtil.getShell(), title, message);	
		} else if (icon == Icon.WARNING) {
			MessageDialog.openWarning(EclipseUtil.getShell(), title, message);
		} else if (icon == Icon.INFO) {
			MessageDialog.openInformation(EclipseUtil.getShell(), title, message);
		}
	}

	public static Icon getErrorIcon() {
		return Icon.ERROR;
	}

	public static Icon getWarningIcon() {
		return Icon.WARNING;
	}
}
