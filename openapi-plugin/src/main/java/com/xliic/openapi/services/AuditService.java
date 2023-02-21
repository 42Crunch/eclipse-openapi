package com.xliic.openapi.services;

import static com.xliic.openapi.OpenApiBundle.message;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAuditTask;
import com.xliic.openapi.report.AnonAuditTask;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.api.IAuditService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public final class AuditService implements IAuditService, Disposable {

    private static final int MAX_PLATFORM_AUDIT_LIMIT = 10;
    public static final String RUNNING_SECURITY_AUDIT = "Running API contract security audit";

    private final Project project;
    private final Map<String, Audit> cache = new HashMap<>();
    private final Map<String, Boolean> pendingAudits = new HashMap<>();

    public AuditService(@NotNull Project project) {
        this.project = project;
    }

    public interface Callback {
        void complete(@NotNull Node report);
        void reject(@NotNull String error);
    }

    public static AuditService getInstance(@NotNull Project project) {
        return project.getService(AuditService.class);
    }

    public boolean isFileBeingAudited(@NotNull String fileName) {
        return !getAuditReportsForAuditParticipantFileName(fileName).isEmpty();
    }

    public void update(@NotNull VirtualFile file) {
        ASTService astService = ASTService.getInstance(project);
        List<Audit> reports = getAuditReportsForAuditParticipantFileName(file.getPath());
        if (!reports.isEmpty()) {
            Node root = astService.getRootNode(file);
            if (root != null) {
                ApplicationManager.getApplication().runReadAction(() -> {
                    Document document = FileDocumentManager.getInstance().getDocument(file);
                    if (document != null) {
                        for (Audit audit : reports) {
                            audit.updateRangeMarkers(file.getPath(), document, root);
                        }
                    }
                });
            }
        }
    }

    public boolean isAuditAlreadyInProgress(@NotNull VirtualFile file) {
        return Boolean.TRUE.equals(pendingAudits.get(file.getPath()));
    }

    public void runAudit(@NotNull Project project, @NotNull VirtualFile file, @NotNull Credentials.Type type) {
        final Callback callback = new Callback() {
            @Override
            public void complete(@NotNull Node report) {
                pendingAudits.remove(file.getPath());
                processAuditReport(file, report);
            }
            @Override
            public void reject(@NotNull String error) {
                pendingAudits.remove(file.getPath());
                MsgUtils.error(project, error, true);
            }
        };
        if (type == Credentials.Type.Anon) {
            cleanAuditReport(file);
            pendingAudits.put(file.getPath(), Boolean.TRUE);
            ProgressManager.getInstance().run(new AnonAuditTask(project, file, callback));
        } else if (type == Credentials.Type.Platform) {
            cleanAuditReport(file);
            pendingAudits.put(file.getPath(), Boolean.TRUE);
            ProgressManager.getInstance().run(new PlatformAuditTask(project, file, callback));
        }
    }

    public void cleanAuditReport(@NotNull VirtualFile file) {
        Audit report = removeAuditReport(file.getPath());
        if (report != null) {
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
        }
    }

    public void processAuditReport(@NotNull VirtualFile file, @NotNull Node response) {
        Audit newReport = ApplicationManager.getApplication().runReadAction((Computable<Audit>) () -> {
            Audit report = new Audit(project, file.getPath(), response, false);
            setAuditReport(file.getPath(), report);
            PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
            if (psiFile != null) {
                DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
            }
            return report;
        });
        List<Issue> issues = new LinkedList<>();
        for (String fileName : newReport.getParticipantFileNames()) {
            for (Audit report : getAuditReportsForAuditParticipantFileName(fileName)) {
                if (report != newReport) {
                    issues.addAll(report.removeIssuesForFile(fileName));
                }
            }
        }
        ApplicationManager.getApplication().invokeAndWait(() -> {
            Utils.activateToolWindow(project, ToolWindowId.OPEN_API_REPORT);
            Utils.activateToolWindow(project, ToolWindowId.OPEN_API_HTML_REPORT);
            if (!issues.isEmpty()) {
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleIssuesFixed(issues);
            }
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportReady(file);
            FileEditorManager.getInstance(project).openEditor(new OpenFileDescriptor(project, file), true);
            List<Issue> hiddenIssues = newReport.getHiddenIssues();
            if (!hiddenIssues.isEmpty()) {
                StringBuilder sb = new StringBuilder();
                for (Issue issue : hiddenIssues) {
                    sb.append(message("openapi.audit.issue.bad.location", issue.getId(), issue.getPointer()));
                    sb.append(" ");
                }
                MsgUtils.warning(project, message("openapi.audit.issues.notification", sb.toString()), true);
            }
        }, ModalityState.NON_MODAL);
    }

    @Override
    public void dispose() {
        project.dispose();
        cache.clear();
        pendingAudits.clear();
    }

    public Audit getAuditReport(@NotNull String fileName) {
        return cache.get(fileName);
    }

    public void removeIssues(@NotNull List<Issue> issues) {
        Map<String, List<Issue>> issuesMap = new HashMap<>();
        for (Issue issue : issues) {
            String key = issue.getAuditFileName();
            if (!issuesMap.containsKey(key)) {
                issuesMap.put(key, new LinkedList<>());
            }
            issuesMap.get(key).add(issue);
        }
        for (Map.Entry<String, List<Issue>> entry : issuesMap.entrySet()) {
            cache.get(entry.getKey()).removeIssues(entry.getValue());
        }
    }

    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (cache.containsKey(oldFileName)) {
            setAuditReport(newFile.getPath(), removeAuditReport(oldFileName));
        }
        if (!cache.isEmpty()) {
            for (Audit audit : cache.values()) {
                audit.handleFileNameChanged(newFile, oldFileName);
            }
        }
    }

    public List<Issue> getIssuesForAuditParticipantFileName(@NotNull String fileName) {
        List<Issue> issues = new LinkedList<>();
        for (Audit audit : cache.values()) {
            issues.addAll(audit.getIssuesForAuditParticipantFileName(fileName));
        }
        return issues;
    }

    public List<Audit> getAuditReportsForAuditParticipantFileName(@NotNull String fileName) {
        List<Audit> reports = new LinkedList<>();
        for (Audit audit : cache.values()) {
            if (audit.hasAuditParticipantFileName(fileName)) {
                reports.add(audit);
            }
        }
        return reports;
    }

    public void setAuditReport(@NotNull String fileName, @NotNull Audit audit) {
        if (audit.isPlatform() && audit.isShowAsHTML()) {
            List<String> keys = new LinkedList<>();
            for (Map.Entry<String, Audit> entry : cache.entrySet()) {
                String key = entry.getKey();
                Audit report = entry.getValue();
                if (report.isPlatform() && report.isShowAsHTML()) {
                    keys.add(key);
                }
            }
            if (keys.size() >= MAX_PLATFORM_AUDIT_LIMIT) {
                cache.remove(keys.get((int) Math.round((keys.size() - 1) * Math.random())));
            }
        }
        cache.put(fileName, audit);
    }

    public Audit removeAuditReport(@NotNull String fileName) {
        return cache.remove(fileName);
    }

    public boolean isNotAuditParticipantFile(@NotNull String fileName) {
        for (Audit audit : cache.values()) {
            if (audit.hasAuditParticipantFileName(fileName)) {
                return false;
            }
        }
        return true;
    }
}
