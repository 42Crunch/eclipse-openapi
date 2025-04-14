package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.getAlias;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_CLI;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_DOCKER;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_SCAND_MANAGER;
import static com.xliic.openapi.webapp.editor.WebFileEditor.SCAN_EDITOR_ID;
import static com.xliic.openapi.utils.FileUtils.clearTempFile;
import static com.xliic.openapi.utils.FileUtils.saveToTempFile;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.IScanService;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanCliTask;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scand.task.ScanJobTask;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.WindowUtils;

public final class ScanService implements IScanService, Disposable {

    public static final String TERMINAL_TAB = "Scan";
    public static final String EXPORT_TEMP_DIR = "scan-report";
    
    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, ScanExport> exportData = new HashMap<>();
    private volatile boolean inProgress;

    public ScanService(@NotNull Project project) {
        this.project = project;
        inProgress = false;
    }

    public static ScanService getInstance(@NotNull Project project) {
        return project.getService(ScanService.class);
    }

    public void runScan(@NotNull VirtualFile file, @NotNull ScanRunConfig config, boolean isFullScan) {
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
                showScanResultsTab(scanConfPath, report, isFullScan);
                saveScanReportToTempFile(file.getPath(), report.getReport());
            }
            @Override
            public void setRejected(@NotNull Exception e) {
                inProgress = false;
                if (e instanceof ScanGeneralError) {
                	ScanGeneralError ge = (ScanGeneralError) e;
                    showGeneralError(tabId, ge.getMessage(), ge.getCode(), ge.getDetails());
                } else {
                    showGeneralError(tabId, e.getMessage(), null, null);
                }
            }
            @Override
            public void cancel() {
                inProgress = false;
            }
        };       
        Credentials.Type type = Credentials.getCredentialsType();
        WindowUtils.openWebTab(project, SCAN_EDITOR_ID, tabId, file.getPath(), () -> {
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
    
    @Nullable
    public ScanExport getExportData(@NotNull String filePath) {
        return exportData.get(filePath);
    }

    private void saveScanReportToTempFile(@NotNull String filePath, @NotNull String report) {
        if (!exportData.containsKey(filePath)) {
            exportData.put(filePath, new ScanExport());
        }
        ScanExport scanExport = exportData.get(filePath);
        saveToTempFile(project, EXPORT_TEMP_DIR, scanExport.getTempFile(), report, () -> scanExport.setTempFileSaved(true));
    }

    public void clearScanReportTempFile(@NotNull String filePath) {
        ScanExport scanExport = exportData.remove(filePath);
        if (scanExport == null) {
            return;
        }
        clearTempFile(project, EXPORT_TEMP_DIR, scanExport.getTempFile());
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

    @Override
    public void dispose() {
    	exportData.clear();
    }

    private void showGeneralError(String webAppId, String message, String code, String details) {
        ApplicationManager.getApplication().invokeAndWait(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showGeneralError(webAppId, message, code, details));
    }
}
