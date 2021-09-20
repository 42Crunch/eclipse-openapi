package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.Messages;
import com.xliic.idea.SwingUtilities;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.settings.AuditConfigTokenDialogWrapper;

public class EmailDialogDoOkActionCallback extends ActionCallback {

	private final Project project;
	private final VirtualFile file;

	public EmailDialogDoOkActionCallback(@NotNull Project project, @NotNull VirtualFile file) {
		this.project = project;
		this.file = file;
	}

	@Override
	public void setDone() {
		SwingUtilities.invokeLater(() -> {
			new AuditConfigTokenDialogWrapper(project, file).showAndGet();
		});
	}

	@Override
	public void setRejected() {
		Messages.showMessageDialog(project, getError(), OpenApiBundle.message("openapi.error.title"),
				Messages.getErrorIcon());
	}
}
