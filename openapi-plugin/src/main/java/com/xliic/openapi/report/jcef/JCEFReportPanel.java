package com.xliic.openapi.report.jcef;

import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.AuditParameters;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.HTMLService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class JCEFReportPanel extends JBCefBrowser
implements LafManagerListener, FileListener, WindowListener, AuditListener, Disposable {

    private final Project project;
    private final ToolWindow toolWindow;
    private final JCEFLoadHandlerAdapter loadHandlerAdapter;
    private final HTMLService htmlService;
    private AuditParameters lastAuditParameters;

    public JCEFReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        super(parent);
        this.project = project;
        this.toolWindow = toolWindow;
        lastAuditParameters = null;
        loadHandlerAdapter = new JCEFLoadHandlerAdapter(project,this);
        htmlService = HTMLService.getInstance();

        getJBCefClient().addLoadHandler(loadHandlerAdapter, getCefBrowser());
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);

        ApplicationManager.getApplication().getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);

        htmlService.initWebUI(this);
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file != null) {
            handleSelectedFile(file);
        }
    }

    @Override
    public void lookAndFeelChanged(@NotNull LafManager source) {
        boolean isDarkTheme = HTMLService.isDarkTheme(source.getCurrentLookAndFeel());
        htmlService.changeActiveColorTheme(this, isDarkTheme);
    }

    @Override
    public void dispose() {
        super.dispose();
        lastAuditParameters = null;
        loadHandlerAdapter.dispose();
        getJBCefClient().removeLoadHandler(loadHandlerAdapter, getCefBrowser());
    }

    @Override
    public void handleToolWindowRegistered(@NotNull String id) {
        if (ToolWindowId.OPEN_API_HTML_REPORT.equals(id)) {
            reportNotAvailable();
            if (toolWindow.isVisible()) {
                toolWindow.hide(null);
            }
        }
    }

    @Override
    public void handleToolWindowOpened(@NotNull String id) {}

    @Override
    public void handleAllFilesClosed() {
        reportNotAvailable();
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        AuditService auditService = AuditService.getInstance(project);
        for (Audit report : auditService.getAuditReportsForAuditParticipantFileName(newFile.getPath())) {
            if (lastAuditParameters != null && report == lastAuditParameters.getReport()) {
                update(report);
                break;
            }
        }
    }

    @Override
    public void handleDocumentChanged(@NotNull VirtualFile file) {
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (selectedFile != null) {
            Audit audit = auditService.getAuditReport(selectedFile.getPath());
            if (audit != null) {
                update(audit);
            }
        }
        else {
            reportNotAvailable();
        }
    }

    @Override
    public void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues) {
        if (!issues.isEmpty()) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
            if (report != null) {
                update(report, file, report.getIssueIds(file, issues));
            }
        }
    }

    @Override
    public void handleAuditReportReady(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.getAuditReport(file.getPath());
        if (!report.isPlatform() || report.isShowAsHTML()) {
            update(report);
            toolWindow.show(null);
        }
    }

    @Override
    public void handleIssuesFixed(@NotNull List<Issue> issues) {
        if (!issues.isEmpty()) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(issues.get(0).getAuditFileName());
            if (report != null) {
                update(report);
            }
        }
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit audit = auditService.getAuditReport(file.getPath());
        if (audit != null) {
            if (audit.isPlatform()) {
                if (audit.isShowAsHTML()) {
                    update(audit);
                }
                else {
                    reportNotAvailable();
                }
            }
            else {
                update(audit);
            }
        }
        else if (auditService.isNotAuditParticipantFile(file.getPath())) {
            reportNotAvailable();
        }
    }

    @Override
    public void handleAuditReportClean(@NotNull Audit report) {}

    public void updateLastReport() {
        if (lastAuditParameters == null) {
            reportNotAvailable();
        }
        else if (lastAuditParameters.isPartialReport()) {
            update(lastAuditParameters.getReport(), lastAuditParameters.getFile(), lastAuditParameters.getIds());
        }
        else {
            update(lastAuditParameters.getReport());
        }
    }

    private void update(Audit report) {
        lastAuditParameters = new AuditParameters(report);
        htmlService.showFullReport(this, report);
    }

    private void update(Audit report, VirtualFile file, List<Integer> ids) {
        lastAuditParameters = new AuditParameters(report, file, ids);
        if (!report.isShowAsHTML()) {
            report.setShowAsHTML(true);
        }
        htmlService.showPartialReport(this, report, file, ids);
    }

    private void reportNotAvailable() {
        lastAuditParameters = null;
        htmlService.showNoReport(this);
    }
}
