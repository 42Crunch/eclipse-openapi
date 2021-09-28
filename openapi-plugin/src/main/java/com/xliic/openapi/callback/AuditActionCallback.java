package com.xliic.openapi.callback;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.Messages;
import com.xliic.idea.SwingUtilities;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.file.OpenFileDescriptor;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.DataService;

public class AuditActionCallback extends ActionCallback {

	private final Project project;
	private final VirtualFile file;

	public AuditActionCallback(@NotNull Project project, @NotNull VirtualFile file) {
		this.project = project;
		this.file = file;
	}

	public void setBeforeRequest() {
		DataService dataService = DataService.getInstance(project);
		if (dataService.hasAuditReport(file.getPath())) {
			Objects.requireNonNull(ReportPanel.getInstance(project))
					.handleAuditReportClean(dataService.removeAuditReport(file.getPath()));
		}
	}

	@Override
	public void setDone() {
		SwingUtilities.invokeLater(() -> {
			Objects.requireNonNull(ReportPanel.getInstance(project)).handleAuditReportReady(file);
			Objects.requireNonNull(HTMLReportPanel.getInstance(project)).handleAuditReportReady(file);
			ApplicationManager.getApplication().invokeLater(() -> {
				FileEditorManager.getInstance(project).openEditor(new OpenFileDescriptor(project, file), true);
			});
		});
	}

	@Override
	public void setRejected() {
		SwingUtilities.invokeLater(() -> {
			Messages.showMessageDialog(project, getError(), OpenApiBundle.message("openapi.error.title"),
					Messages.getErrorIcon());
		});
	}
}
