package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.getAlias;
import static com.xliic.openapi.utils.MsgUtils.notifyTokenNotFound;

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
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
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

public final class ScanService implements IScanService, Disposable {

    public static final String TERMINAL_TAB = "Scan";

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Node> failedFileAndReport;
    private volatile boolean scanTaskInProgress;

    public ScanService(@NotNull Project project) {
        this.project = project;
        failedFileAndReport = new HashMap<>(1);
        scanTaskInProgress = false;
    }

    public static ScanService getInstance(@NotNull Project project) {
        return project.getService(ScanService.class);
    }

    public void runScan(@NotNull ScanRunConfig config) {
        if (scanTaskInProgress) {
            return;
        }
        String runtime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        boolean useDocker = Settings.Platform.Scan.RUNTIME_DOCKER.equals(runtime);
        boolean hasCli = CliUtils.hasCli();
        boolean useScandMgr = !useDocker && !hasCli;
        if (useScandMgr) {
            ScandManagerConnection connection = new ScandManagerConnection();
            if (StringUtils.isEmpty(connection.getUrl())) {
            	MsgUtils.notifyError(project, "Scand-manager url is not defined");
                return;
            }
        }
        String scanConfPath = config.getScanConfPath();
        String tabId = "Scan report " + ScanConfigUtils.getAlias(scanConfPath);
        ScanDockerTask.Callback callback = new ScanDockerTask.Callback() {
            @Override
            public void setDone(@NotNull String scanConfPath, @NotNull ScanReport report) {
                scanTaskInProgress = false;
                resetFailedFileAndReport();
                showScanResultsTab(scanConfPath, report);
            }
            @Override
            public void setRejected(@NotNull Exception e) {
                scanTaskInProgress = false;
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
        String token = SettingsService.getInstance().getValue(Settings.Audit.TOKEN);
        scanTaskInProgress = true;
        WindowUtils.openWebTab(project, "scan", tabId, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).startScan(tabId);
            if (hasCli && !StringUtils.isEmpty(token)) {
                ProgressManager.getInstance().run(new ScanCliTask(project, tabId, config, callback));
            } else {
                if (hasCli) {
                    notifyTokenNotFound(project, "docker");
                }
                if (useScandMgr) {
                    ProgressManager.getInstance().run(new ScanJobTask(project, tabId, config, callback));
                } else {
                    ProgressManager.getInstance().run(new ScanDockerTask(project, tabId, config, callback));
                }
            }
        });
    }

    private void showScanResultsTab(String scanConfPath, ScanReport report) {
        String id = "Scan report " + getAlias(scanConfPath);
        WindowUtils.openWebTab(project, "scan", id, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(id, report);
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
