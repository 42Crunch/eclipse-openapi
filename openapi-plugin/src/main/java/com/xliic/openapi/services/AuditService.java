package com.xliic.openapi.services;

import static com.xliic.openapi.OpenApiBundle.message;
import static com.xliic.openapi.ToolWindowId.OPEN_API_HTML_REPORT;
import static com.xliic.openapi.ToolWindowId.OPEN_API_REPORT;
import static com.xliic.openapi.settings.Settings.Audit.AUDIT_RUNTIME_CLI;
import static com.xliic.openapi.utils.FileUtils.clearTempFile;
import static com.xliic.openapi.utils.FileUtils.saveToTempFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.services.IAuditService;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.parser.ast.node.FastNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAuditTask;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.DictionaryUtils;
import com.xliic.openapi.platform.dictionary.quickfix.FixGlobalDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.PreAuditDialog;
import com.xliic.openapi.report.AuditAPIs;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.task.AuditCliTask;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.AuditBuilder;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.AuditToDoReport;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

import okhttp3.Call;
import okhttp3.Response;
import okhttp3.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.PrettyPrinter;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;

public final class AuditService implements IAuditService, Disposable {

    private static final int MAX_PLATFORM_AUDIT_LIMIT = 10;
    public static final String RUNNING_SECURITY_AUDIT = "Running API contract security audit";
    public static final String RUNNING_SECURITY_AUDIT_CLI = "Running Security Audit using 42Crunch CLI";
    public static final String LOADING_KDB_ARTICLES = "Loading API contract security audit KDB articles";
    public static final String EXPORT_TEMP_DIR = "audit-report";
    
    @NotNull
    private final Project project;
    @Nullable
    private volatile String articles = null;
    @NotNull
    private final Map<String, Audit> cache = new HashMap<>();
    @NotNull
    private final Map<String, Boolean> pendingAudits = new HashMap<>();
    @NotNull
    private final AuditBuilder auditBuilder;

    public AuditService(@NotNull Project project) {
        this.project = project;
        auditBuilder = new AuditBuilder(project, false);
    }

    public interface Callback {
        void complete(@NotNull Node report, @Nullable AuditCompliance compliance, @Nullable AuditToDoReport todoReport);
        void reject(@NotNull String error);
        void cancel();
    }

    @SuppressWarnings("serial")
    public static class KdbException extends Exception {
        public KdbException(String message) {
            super(message);
        }
    }

    public static AuditService getInstance(@NotNull Project project) {
        return project.getService(AuditService.class);
    }

    public @Nullable String getArticles() {
        return articles;
    }

    public void setArticles(@Nullable String articles) {
        this.articles = articles;
    }

    public void downloadArticles() throws KdbException {
        if (getArticles() == null) {
            setKDB();
        }
    }

    public void downloadArticles(@NotNull ProgressIndicator progress) throws KdbException {
        if (getArticles() == null) {
            String progressText = progress.getText();
            progress.setText(LOADING_KDB_ARTICLES);
            try {
                setKDB();
            } finally {
                progress.setText(progressText);
            }
        }
    }

    public void downloadArticlesAsync() {
        try {
            AuditAPIs.getKDB(new okhttp3.Callback() {
                @Override
                public void onFailure(@NotNull Call call, @NotNull IOException e) {
                }
                @Override
                public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                    try (ResponseBody body = response.body()) {
                        if (response.code() == 200) {
                            if (body != null) {
                                setArticles(body.string().trim());
                            }
                        }
                    }
                }
            });
        } catch (IOException ignored) {
        }
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

    public void cleanAuditReport(@NotNull VirtualFile file) {
        Audit report = removeAuditReport(file.getPath());
        if (report != null) {
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
        }
    }

    public void processAuditReport(@NotNull VirtualFile file, @NotNull Node response) {
        processAuditReport(file, response, null, null);
    }

    public void processAuditReport(@NotNull VirtualFile file,
            @NotNull Node response,
            @Nullable AuditCompliance compliance,
            @Nullable AuditToDoReport todoReport) {

        Audit newReport = auditBuilder.setFileName(file.getPath()).setCompliance(compliance).setToDoReport(todoReport).build(response);
        setAuditReport(file.getPath(), newReport);
        saveAuditReportToTempFile(newReport, response);
        ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
            newReport.finalizeInReadAction();
            PsiFile psiFile = Utils.findPsiFile(project, file);
            if (psiFile != null) {
                DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
            }
            return null;
        });
        List<Issue> issues = new LinkedList<>();
        for (String fileName : newReport.getParticipantFileNames()) {
            for (Audit report : getAuditReportsForAuditParticipantFileName(fileName)) {
                if (report != newReport) {
                    List<Issue> removedIssues = report.removeIssuesForFile(fileName);
                    if (removedIssues != null) {
                        issues.addAll(removedIssues);
                    }
                }
            }
        }
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, OPEN_API_REPORT);
            WindowUtils.activateToolWindow(project, OPEN_API_HTML_REPORT, () -> {
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
            });
        });
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

    public void setAuditReport(@NotNull String fileName, @NotNull Audit report) {
        if (report.isDownloaded()) {
            List<String> keys = new LinkedList<>();
            for (Map.Entry<String, Audit> entry : cache.entrySet()) {
                String key = entry.getKey();
                Audit cacheReport = entry.getValue();
                if (cacheReport.isDownloaded()) {
                    keys.add(key);
                }
            }
            if (keys.size() >= MAX_PLATFORM_AUDIT_LIMIT) {
            	removeAuditReport(keys.get((int) Math.round((keys.size() - 1) * Math.random())));
            }
        }
        cache.put(fileName, report);
    }

    public Audit removeAuditReport(@NotNull String fileName) {
        Audit report = cache.remove(fileName);
        if (report != null && report.isTempFileSaved()) {
            clearAuditReportTempFile(report);
        }
        return report;
    }

    public boolean isNotAuditParticipantFile(@NotNull String fileName) {
        for (Audit audit : cache.values()) {
            if (audit.hasAuditParticipantFileName(fileName)) {
                return false;
            }
        }
        return true;
    }

    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditOperation payload) {
        Credentials.Type type = Credentials.getCredentialsType();
        if (type != null) {
        	actionPerformed(project, file, payload, type);
        } else {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                	actionPerformed(project, file, payload, Credentials.getCredentialsType());
                }
            });
        }
    }
    
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file, @NotNull Credentials.Type type) {
        actionPerformed(project, file, null, type);
    }

    public void actionPerformed(@NotNull Project project,
                                @NotNull VirtualFile file,
                                @Nullable AuditOperation payload,
                                @NotNull Credentials.Type type) {
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            runAudit(project, file, payload, type);
            return;
        }
        SettingsService settingsService = SettingsService.getInstance();
        String value = settingsService.getValue(Settings.Platform.Dictionary.PreAudit.CHOICE);
        if (Settings.Platform.Dictionary.PreAudit.ASK.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                PreAuditDialog dialog = new PreAuditDialog(project);
                dialog.show();
                int code = dialog.getExitCode();
                if (code == DialogWrapper.OK_EXIT_CODE) {
                    DictionaryUtils.suggestAlwaysUpdate(project);
                    updateAndRunAudit(action, project, file, payload, type);
                } else if (code == PreAuditDialog.NO_EXIT_CODE) {
                    DictionaryUtils.suggestNeverUpdate(project);
                    runAudit(project, file, payload, type);
                }
            } else {
                runAudit(project, file, payload, type);
            }
        } else if (Settings.Platform.Dictionary.PreAudit.ALWAYS.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                updateAndRunAudit(action, project, file, payload, type);
            } else {
                runAudit(project, file, payload, type);
            }
        } else {
            runAudit(project, file, payload, type);
        }
    }
    
    public void saveAuditReportToTempFile(@NotNull Audit report, @NotNull Node reportNode) {
        try {
            String text = getTextFromNode(reportNode);
            saveToTempFile(project, EXPORT_TEMP_DIR, report.getTempFile(), text, () -> report.setTempFileSaved(true));
        } catch (IOException e) {
            Logger.getInstance(AuditService.class).warn(e);
        }
    }

    public void clearAuditReportTempFile(@NotNull Audit report) {
        clearTempFile(project, EXPORT_TEMP_DIR, report.getTempFile());
    }

    private void updateAndRunAudit(FixGlobalDictionaryAction action,
                                   Project project,
                                   VirtualFile file,
                                   AuditOperation payload,
                                   Credentials.Type type) {
        action.actionPerformed(project, file, new ActionCallback() {
            @Override
            public void setDone() {
                runAudit(project, file, payload, type);
            }
        }, true);
    }

    private void runAudit(Project project, VirtualFile file, AuditOperation payload, Credentials.Type type) {
        final Callback callback = new Callback() {
            @Override
            public void complete(@NotNull Node report, @Nullable AuditCompliance compliance, @Nullable AuditToDoReport todoReport) {
                pendingAudits.remove(file.getPath());
                processAuditReport(file, report, compliance, todoReport);
            }
            @Override
            public void reject(@NotNull String error) {
                pendingAudits.remove(file.getPath());
                ApplicationManager.getApplication().invokeLater(() ->
                        project.getMessageBus().syncPublisher(AuditListener.TOPIC).cancelAudit());
                MsgUtils.notifyError(project, error);
            }
            @Override
            public void cancel() {
                pendingAudits.remove(file.getPath());
                ApplicationManager.getApplication().invokeLater(() ->
                        project.getMessageBus().syncPublisher(AuditListener.TOPIC).cancelAudit());
            }
        };
        boolean isFullAudit = payload == null || payload.isFull();
        // Paid users always run audit using the platform, free users use CLI or fallback to anond
        if (type == Credentials.Type.AnondToken) {
            CliService.getInstance().downloadOrUpdateIfNecessary(project, new CliService.Callback() {
                @Override
                public void complete(@NotNull String cliPath) {
                    startAuditTask(file, isFullAudit ? 
                        new AuditCliTask(project, type, file, callback) : new AuditCliTask(project, type, payload, callback));
                }
                @Override
                public void reject(@NotNull String error) {
                    callback.reject(error);
                }
                @Override
                public void cancel() {
                    pendingAudits.remove(file.getPath());
                    MsgUtils.notifyInfo(project, "42Crunch API Security Testing Binary is required to run Audit.");
                }
            }, true);
        } else if (type == Credentials.Type.ApiToken) {
            String auditRuntime = SettingsService.getInstance().getValue(Settings.Audit.AUDIT_RUNTIME);
            if (Objects.equals(auditRuntime, AUDIT_RUNTIME_CLI)) {
                startAuditTask(file, isFullAudit ? 
                    new AuditCliTask(project, type, file, callback) : new AuditCliTask(project, type, payload, callback));
            } else {
                startAuditTask(file, isFullAudit ? 
                    new PlatformAuditTask(project, file, callback) : new PlatformAuditTask(project, payload, callback));
            }
        }
    }

    private void startAuditTask(VirtualFile file, Task.Backgroundable task) {
        ApplicationManager.getApplication().invokeLater(() -> {
            cleanAuditReport(file);
            WindowUtils.activateToolWindow(project, OPEN_API_HTML_REPORT, () -> {
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).startAudit();
                pendingAudits.put(file.getPath(), Boolean.TRUE);
                ProgressManager.getInstance().run(task);
            });
        });
    }

    private void setKDB() throws KdbException {
        try {
            String newKdb = NetUtils.getKDB();
            if (newKdb == null) {
                throw new KdbException("Failed to read articles.json");
            } else {
                setArticles(newKdb);
            }
        } catch (IOException e) {
            throw new KdbException("Failed to read articles.json: " + e);
        }
    }
    
    private String getTextFromNode(Node reportNode) throws JsonProcessingException {
        PrettyPrinter printer = Utils.getPrinter("  ", "\n");
        if (reportNode instanceof FastNode) {
            return ((FastNode) reportNode).dump(printer);
        } else {
            JsonNode node = new YAMLMapper().readTree(reportNode.dump());
            return new ObjectMapper().writer(printer).writeValueAsString(node).trim();
        }
    }
}
