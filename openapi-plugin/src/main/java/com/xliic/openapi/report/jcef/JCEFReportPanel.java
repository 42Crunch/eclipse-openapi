package com.xliic.openapi.report.jcef;

import com.fasterxml.jackson.databind.module.SimpleModule;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.PanelBrowser;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.AuditParameters;
import com.xliic.openapi.report.AuditSerializer;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.KDBService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import static com.xliic.openapi.OpenApiUtils.getURI;

public class JCEFReportPanel extends PanelBrowser implements FileListener, WindowListener, AuditListener, Disposable {

    private AuditParameters lastAuditParameters;

    public JCEFReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        super(project, toolWindow, parent, "audit");
        lastAuditParameters = null;
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file != null) {
            handleSelectedFile(file);
        }
    }

    @Override
    protected @NotNull String getLoadingMessage() {
        return "Loading API Contract Security Audit KDB Articles...";
    }

    @Override
    protected @Nullable String getMainHTML(String page, String styleCss) {
        return page.replace("${style}", styleCss);
    }

    @Override
    protected @Nullable String getInitJS() {
        String kdb = KDBService.getInstance().getText();
        if (kdb != null) {
            return "window.initWebJS(" + jsonfy(kdb) + ")";
        }
        return null;
    }

    @Override
    protected void loadComplete() {
        updateLastReport();
    }

    @Override
    protected @Nullable Function<Object, JBCefJSQuery.Response> getBrowserFunction() {
        return new JCEFPostMessageListener(project, getCefBrowser().getBrowser());
    }

    @Override
    protected void addSerializer(@NotNull SimpleModule module) {
        module.addSerializer(Audit.class, new AuditSerializer());
    }

    @Override
    public void dispose() {
        super.dispose();
        lastAuditParameters = null;
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
    public void handleClosedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (selectedFile != null) {
            Audit audit = auditService.getAuditReport(selectedFile.getPath());
            if (audit != null) {
                update(audit);
            }
        } else {
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
    public void handleKDBReady(@NotNull String text) {
        init();
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit audit = auditService.getAuditReport(file.getPath());
        if (audit != null) {
            if (audit.isPlatform()) {
                if (audit.isShowAsHTML()) {
                    update(audit);
                } else {
                    reportNotAvailable();
                }
            } else {
                update(audit);
            }
        } else if (auditService.isNotAuditParticipantFile(file.getPath())) {
            reportNotAvailable();
        }
    }

    public void updateLastReport() {
        if (lastAuditParameters == null) {
            reportNotAvailable();
        } else if (lastAuditParameters.isPartialReport()) {
            update(lastAuditParameters.getReport(), lastAuditParameters.getFile(), lastAuditParameters.getIds());
        } else {
            update(lastAuditParameters.getReport());
        }
    }

    private void update(Audit report) {
        lastAuditParameters = new AuditParameters(report);
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showFullReport");
            put("report", serialize(report));
        }};
        sendMessage(parameters);
    }

    private void update(Audit report, VirtualFile file, List<Integer> ids) {
        lastAuditParameters = new AuditParameters(report, file, ids);
        if (!report.isShowAsHTML()) {
            report.setShowAsHTML(true);
        }
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showPartialReport");
            put("report", serialize(report));
            put("uri", getURI(file));
            put("ids", ids);
        }};
        sendMessage(parameters);
    }

    private void reportNotAvailable() {
        lastAuditParameters = null;
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showNoReport");
        }};
        sendMessage(parameters);
    }
}
