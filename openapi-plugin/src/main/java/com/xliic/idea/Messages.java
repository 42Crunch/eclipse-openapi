package com.xliic.idea;

import javax.swing.Icon;

import org.eclipse.jface.dialogs.MessageDialog;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.project.Project;

public class Messages {

	public static void showMessageDialog(@Nullable Project project, String message, @NotNull String title,
			@Nullable Icon icon) {
		MessageDialog.openError(project.getShell(), title, message);
	}

	public static Icon getErrorIcon() {
		return null;
	}
}
