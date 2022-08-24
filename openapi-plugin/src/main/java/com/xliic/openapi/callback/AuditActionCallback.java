package com.xliic.openapi.callback;

import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;

import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;
import java.util.List;

import static com.xliic.openapi.OpenApiBundle.message;

public class AuditActionCallback extends ActionCallback {

    private final Project project;
    private final VirtualFile file;

    public AuditActionCallback(@NotNull Project project, @NotNull VirtualFile file) {
        this.project = project;
        this.file = file;
    }

    public void setBeforeRequest() {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.removeAuditReport(file.getPath());
        if (report != null) {
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
        }
    }

    public void setDone(@NotNull Node response, boolean isLocal) {

        AuditService auditService = AuditService.getInstance(project);
        Audit newAudit = ApplicationManager.getApplication().runReadAction((Computable<Audit>) () ->  {
            Audit report;
            if (isLocal) {
                report = new Audit(project, file.getPath(), response, true);
            } else {
                report = new Audit(project, file.getPath(), response);
            }
            auditService.setAuditReport(file.getPath(), report);
            PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
            if (psiFile != null) {
                DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
            }
            return auditService.getAuditReport(file.getPath());
        });

        List<Issue> issues = new LinkedList<>();
        for (String fileName : newAudit.getParticipantFileNames()) {
            for (Audit audit : auditService.getAuditReportsForAuditParticipantFileName(fileName)) {
                if (audit != newAudit) {
                    issues.addAll(audit.removeIssuesForFile(fileName));
                }
            }
        }

        SwingUtilities.invokeLater(() -> {

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
            for (Issue issue : newAudit.getHiddenIssues()) {
                sb.append(message("openapi.audit.issue.bad.location", issue.getId(), issue.getPointer()));
                sb.append(" ");
            }
            if (sb.length() > 0) {
                SwingUtilities.invokeLater(() -> Messages.showMessageDialog(project,
                        message("openapi.audit.issues.notification", sb.toString()),
                        message("openapi.warning.title"), Messages.getWarningIcon()));
            }
        });
    }

    @Override
    public void setRejected() {
        SwingUtilities.invokeLater(() -> Messages.showMessageDialog(project, getError(),
                message("openapi.error.title"), Messages.getErrorIcon()));
    }
}
