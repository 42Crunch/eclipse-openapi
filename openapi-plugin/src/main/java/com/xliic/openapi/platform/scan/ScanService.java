package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.getAlias;
import static com.xliic.openapi.webapp.editor.WebFileEditor.SCAN_EDITOR_ID;
import static com.xliic.openapi.settings.Settings.Platform.Scan.*;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.services.IScanService;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanCliTask;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scand.task.ScanJobTask;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;
import com.xliic.openapi.settings.Credentials;

public final class ScanService implements IScanService, Disposable {

    public static final String TERMINAL_TAB = "Scan";

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Node> failedFileAndReport;
    private volatile boolean inProgress;

    public ScanService(@NotNull Project project) {
        this.project = project;
        failedFileAndReport = new HashMap<>(1);
        inProgress = false;
    }

    public static ScanService getInstance(@NotNull Project project) {
        return project.getService(ScanService.class);
    }

    public void runScan(@NotNull ScanRunConfig config, boolean isFullScan) {
        if (inProgress) {
            return;
        }
        inProgress = true;
        final String runtime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        if (RUNTIME_SCAND_MANAGER.equals(runtime)) {
            ScandManagerConnection connection = new ScandManagerConnection();
            if (StringUtils.isEmpty(connection.getUrl())) {
            	MsgUtils.notifyError(project, "Scand-manager url is not defined");
            	inProgress = false;
                return;
            }
        }
        String scanConfPath = config.getScanConfPath();
        String tabId = "Scan report " + ScanConfigUtils.getAlias(scanConfPath);
        ScanDockerTask.Callback callback = new ScanDockerTask.Callback() {
            @Override
            public void setDone(@NotNull String scanConfPath, @NotNull ScanReport report) {
                inProgress = false;
                resetFailedFileAndReport();
                showScanResultsTab(scanConfPath, report, isFullScan);
            }
            @Override
            public void setRejected(@NotNull Exception e) {
                inProgress = false;
                resetFailedFileAndReport();
                if (e instanceof ScanGeneralError) {
                	ScanGeneralError ge = (ScanGeneralError) e;
                    if (ge.getReport() != null) {
                        saveFailedFileAndReport(ge.getReport());
                    }
                    showGeneralError(tabId, ge.getMessage(), ge.getCode(), ge.getDetails());
                } else {
                    showGeneralError(tabId, e.getMessage(), null, null);
                }
            }
        };       
        Credentials.Type type = Credentials.getCredentialsType();
        WindowUtils.openWebTab(project, SCAN_EDITOR_ID, tabId, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).startScan(tabId);
            if (type == Credentials.Type.AnondToken) {
                ProgressManager.getInstance().run(new ScanCliTask(project, tabId, config, callback, isFullScan));
            } else {
                if (RUNTIME_CLI.equals(runtime)) {
                    ProgressManager.getInstance().run(new ScanCliTask(project, tabId, config, callback, isFullScan));
                } else if (RUNTIME_DOCKER.equals(runtime)) {
                    ProgressManager.getInstance().run(new ScanDockerTask(project, tabId, config, callback));
                } else {
                    ProgressManager.getInstance().run(new ScanJobTask(project, tabId, config, callback));
                }
            }
        });
    }

    private void showScanResultsTab(String scanConfPath, ScanReport report, boolean isFullScan) {
        String id = "Scan report " + getAlias(scanConfPath);
        WindowUtils.openWebTab(project, SCAN_EDITOR_ID, id, () -> {
            if (isFullScan) {
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showFullScanReport(id, report);
            } else {
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(id, report);
            }
        });
    }

    public @Nullable Node getFailedReport() {
        return failedFileAndReport.size() == 1 ? failedFileAndReport.values().iterator().next() : null;
    }

    @Override
    public void dispose() {
        failedFileAndReport.clear();
    }

    private void saveFailedFileAndReport(Node report) {
        if (failedFileAndReport.size() == 1) {
            String filePath = failedFileAndReport.keySet().iterator().next();
            saveFailedFileAndReport(filePath, report);
        }
    }

    private void saveFailedFileAndReport(String filePath, Node report) {
        failedFileAndReport.put(filePath, report);
    }

    private void resetFailedFileAndReport() {
        if (failedFileAndReport.size() == 1) {
            String filePath = failedFileAndReport.keySet().iterator().next();
            resetFailedFileAndReport(filePath);
        }
    }

    private void resetFailedFileAndReport(String filePath) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.removeAuditReport(filePath);
        if (report != null) {
            ApplicationManager.getApplication().invokeAndWait(() -> {
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleAuditReportClean(report);
                PsiFile psiFile = Utils.findPsiFile(project, filePath);
                if (psiFile != null) {
                    DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                }
            });
        }
        saveFailedFileAndReport(filePath, null);
    }

    private void showGeneralError(String toId, String message, String code, String details) {
        ApplicationManager.getApplication().invokeAndWait(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showGeneralError(toId, message, code, details));
    }
}
