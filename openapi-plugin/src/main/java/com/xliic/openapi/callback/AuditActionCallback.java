package com.xliic.openapi.callback;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;

public class AuditActionCallback extends ActionCallback {

	private final Project project;
	private final VirtualFile file;

	public AuditActionCallback(@NotNull Project project, @NotNull VirtualFile file) {
		this.project = project;
		this.file = file;
	}

	public void setBeforeRequest() {
        AuditService auditService = AuditService.getInstance(project);
        if (auditService.hasAuditReport(file.getPath())) {
            Audit report = auditService.removeAuditReport(file.getPath());
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
        }
	}

	@Override
	public void setDone() {
        AuditService auditService = AuditService.getInstance(project);
        SwingUtilities.invokeLater(() -> {

            List<Issue> issues = new LinkedList<>();
            Audit newAudit = auditService.getAuditReport(file.getPath());
            for (String fileName : newAudit.getParticipantFileNames()) {
                for (Audit audit : auditService.getAuditReportsForAuditParticipantFileName(fileName)) {
                    if (audit != newAudit) {
                        issues.addAll(audit.removeIssuesForFile(fileName));
                    }
                }
            }

            OpenApiUtils.activateToolWindow(project, ToolWindowId.OPEN_API_REPORT);
            OpenApiUtils.activateToolWindow(project, ToolWindowId.OPEN_API_HTML_REPORT);

            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleIssuesFixed(issues);
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file);

			ApplicationManager.getApplication().invokeLater(() -> {
				OpenFileDescriptor fileDescriptor = new OpenFileDescriptor(project, file);
				FileEditorManager.getInstance(project).openEditor(fileDescriptor, true);
			});

            // Report issues with unknown location
            StringBuilder sb = new StringBuilder();
            for (Issue issue : newAudit.getIssues()) {
                if (issue.getRangeMarker() == null) {
                    sb.append(OpenApiBundle.message("openapi.audit.issue.bad.location",
                            issue.getId(), issue.getPointer())).append(" ");
                }
            }
            if (sb.length() > 0) {
                SwingUtilities.invokeLater(() -> {
                    Messages.showMessageDialog(project,
                            OpenApiBundle.message("openapi.audit.issues.notification", sb.toString()),
                            OpenApiBundle.message("openapi.warning.title"), Messages.getWarningIcon());
                });
            }
		});
	}

    @Override
    public void setRejected() {
        SwingUtilities.invokeLater(() -> {
            Messages.showMessageDialog(project, getError(),
                    OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon());
        });
    }
}
