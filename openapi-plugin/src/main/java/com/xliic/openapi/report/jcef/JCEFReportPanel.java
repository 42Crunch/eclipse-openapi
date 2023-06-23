package com.xliic.openapi.report.jcef;

import java.util.List;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.report.jcef.messages.LoadKdb;
import com.xliic.openapi.report.jcef.messages.ShowFullReport;
import com.xliic.openapi.report.jcef.messages.ShowNoReport;
import com.xliic.openapi.report.jcef.messages.ShowPartialReport;
import com.xliic.openapi.report.jcef.messages.StartAudit;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.WebApp;

public class JCEFReportPanel extends WebApp implements FileListener, AuditListener, Disposable {

    private static final String AUDIT_REPORT = "com.xliic.openapi.report.jcef.JCEFReportPanel[AuditReport]";

    public JCEFReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent, @NotNull ViewPartHandler handler) {
        super(project, toolWindow, "audit", parent, handler);
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFReportFunction(project, browser, name);
    }

    @Override
    public void startAudit() {
        new StartAudit().send(getCefBrowser());
    }

    @Override
    public void showGeneralError() {
        reportNotAvailable();
    }

    @Override
    public void onLoadEnd() {
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            handleSelectedFile(file);
        }
    }

    @Override
    public void handleAllFilesClosed() {
        Audit report = (Audit) cache.get(AUDIT_REPORT);
        if (report != null && !report.isDownloaded()) {
            reportNotAvailable();
        }
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        AuditService auditService = AuditService.getInstance(project);
        for (Audit report : auditService.getAuditReportsForAuditParticipantFileName(newFile.getPath())) {
            if (report == cache.get(AUDIT_REPORT)) {
                update(report, auditService.getArticles());
                break;
            }
        }
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        VirtualFile selectedFile = Utils.getSelectedOpenAPIFile(project);
        if (selectedFile != null) {
            Audit report = auditService.getAuditReport(selectedFile.getPath());
            if (report != null) {
                update(report, auditService.getArticles());
            }
        } else {
            Audit report = (Audit) cache.get(AUDIT_REPORT);
            if (report != null) {
                if (report.getAuditFileName().equals(file.getPath()) || !report.isDownloaded()) {
                    reportNotAvailable();
                }
            }
        }
    }

    @Override
    public void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues) {
        if (!issues.isEmpty()) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
            if (report != null) {
                update(report, file, report.getIssueIds(file, issues), auditService.getArticles());
            }
        }
    }

    @Override
    public void handleAuditReportReady(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.getAuditReport(file.getPath());
        if (!report.isDownloaded() || report.getDisplayOptions().isShowInBrowser()) {
            update(report, auditService.getArticles());
            window.show(null);
        }
    }

    @Override
    public void handleIssuesFixed(@NotNull List<Issue> issues) {
        if (!issues.isEmpty()) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
            if (report != null) {
                update(report, auditService.getArticles());
            }
        }
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.getAuditReport(file.getPath());
        if (report != null) {
            if (report.isDownloaded()) {
                if (report.getDisplayOptions().isShowInBrowser()) {
                    update(report, auditService.getArticles());
                } else {
                    reportNotAvailable();
                }
            } else {
                update(report, auditService.getArticles());
            }
        } else if (auditService.isNotAuditParticipantFile(file.getPath())) {
            reportNotAvailable();
        }
    }

    private void update(Audit report, String kdb) {
        new LoadKdb(kdb).send(getCefBrowser());
        new ShowFullReport(project, report).send(getCefBrowser());
        cache.put(AUDIT_REPORT, report);
    }

    private void update(Audit report, VirtualFile file, List<Integer> ids, String kdb) {
        new LoadKdb(kdb).send(getCefBrowser());
        new ShowPartialReport(project, report, file, ids).send(getCefBrowser());
        cache.put(AUDIT_REPORT, report);
    }

    private void reportNotAvailable() {
        new ShowNoReport().send(getCefBrowser());
        cache.remove(AUDIT_REPORT);
    }
}
