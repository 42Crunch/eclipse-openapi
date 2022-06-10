package com.xliic.openapi.services;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.task.AuditTask;
import com.xliic.openapi.report.task.TokenTask;
import com.xliic.openapi.services.api.IAuditService;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public final class AuditService implements IAuditService, Disposable {

    private final Project project;
    private final Map<String, Audit> cache = new HashMap<>();
    private volatile boolean taskInProgress;

    public AuditService(@NotNull Project project) {
        this.project = project;
        taskInProgress = false;
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

    public void sendAuditRequest(@NotNull String token, @NotNull String fileName, @NotNull AuditActionCallback callback) {
        if (taskInProgress) {
            callback.reject("Generating audit report for " + fileName + " in progress");
        }
        else {
            BundleService bundleService = BundleService.getInstance(project);
            BundleResult bundleResult = bundleService.getBundle(fileName);
            if (bundleResult == null) {
                callback.reject("Failed to find bundle for " + fileName);
            }
            else {
                taskInProgress = true;
                try {
                    callback.setBeforeRequest();
                    String text = bundleResult.getJsonText();
                    ProgressManager.getInstance().run(new AuditTask(project, token, fileName, text, callback));
                }
                catch (Throwable any) {
                    notifyTaskComplete();
                }
            }
        }
    }

    public void sendGenerateTokenRequest(@NotNull String email, @NotNull EmailDialogDoOkActionCallback callback) {
        if (taskInProgress) {
            callback.reject("Generating token for " + email + " in progress");
        }
        else {
            taskInProgress = true;
            ProgressManager.getInstance().run(new TokenTask(project, email, callback));
        }
    }

    public void notifyTaskComplete() {
        taskInProgress = false;
    }

    @Override
    public void dispose() {
    	project.dispose();
        cache.clear();
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
