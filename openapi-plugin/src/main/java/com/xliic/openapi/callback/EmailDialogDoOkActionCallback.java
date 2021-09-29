package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
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
