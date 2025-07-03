package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.platform.scan.config.ScanConfigUtils.getAlias;
import static com.xliic.openapi.settings.Settings.Platform.Scan.*;
import static com.xliic.openapi.webapp.editor.WebFileEditor.SCAN_EDITOR_ID;

import java.nio.file.Path;
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
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanCliTask;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scand.task.ScanJobTask;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.WindowUtils;
import com.xliic.openapi.webapp.chunks.ChunksProvider;
import com.xliic.openapi.webapp.chunks.FileChunksProvider;
import com.xliic.openapi.webapp.chunks.MemoryChunksProvider;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public final class ScanService implements IScanService, Disposable {

    public static final String TERMINAL_TAB = "Scan";
    public static final String EXPORT_TEMP_DIR = "scan-report";
    
    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, ScanExport> exportData = new HashMap<>();
    @NotNull
    private final Map<String, ChunksProvider> chunksProviders = new HashMap<>();
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
        final String runtime = SettingsService.getInstance().getValue(RUNTIME);
        if (RUNTIME_SCAND_MANAGER.equals(runtime)) {
            ScandManagerConnection connection = new ScandManagerConnection();
            if (StringUtils.isEmpty(connection.getUrl())) {
            	MsgUtils.notifyError(project, "Scand-manager url is not defined");
            	inProgress = false;
                return;
            }
        }
        String scanConfPath = config.getScanConfPath();
        String alias = getAlias(scanConfPath);
        String tabId = "Scan report " + alias;
        ScanDockerTask.Callback callback = new ScanDockerTask.Callback() {
            @Override
            public void setDone(@NotNull String scanConfPath, @NotNull ScanReport report) {
                inProgress = false;
                showScanResultsTab(tabId, alias, report);
                saveScanReportToTempFile(file.getPath(), report);
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

    private void saveScanReportToTempFile(String filePath, ScanReport report) {
        ScanExport newScanExport = new ScanExport();
        newScanExport.save(project, report.getReport(), report.getFilePath());
        ScanExport scanExport = exportData.remove(filePath);
        exportData.put(filePath, newScanExport);
        if (scanExport != null) {
            scanExport.remove();
        }
    }

    public void onWebFileClosed(@NotNull WebVirtualFile webFile) {
        ChunksProvider manager = chunksProviders.remove(webFile.getId());
        if (manager != null) {
            manager.abort();
        }
        String filePath = webFile.getGenFilePath();
        if (filePath != null) {
            ScanExport scanExport = exportData.remove(filePath);
            if (scanExport != null) {
            	scanExport.remove();
            }
        }
    }

    // Only for internal action call
    public void generateLargeScanReport(@NotNull String webAppId, @NotNull String alias, @NotNull Path filePath) {
        WindowUtils.openWebTab(project, SCAN_EDITOR_ID, webAppId, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(webAppId, alias);
            ChunksProvider manager = new FileChunksProvider(project, webAppId, filePath);
            chunksProviders.put(webAppId, manager);
            manager.start();
        });
    }

    @Nullable
    public ChunksProvider getChunksProvider(@NotNull String webAppId) {
        return chunksProviders.get(webAppId);
    }

    private void showScanResultsTab(String id, String alias, ScanReport report) {
        ChunksProvider manager;
        if (report.getFilePath() != null) {
            manager = new FileChunksProvider(project, id, report.getFilePath());
        } else if (report.getReport() != null)  {
            manager = new MemoryChunksProvider(project, id, report.getReport());
        } else {
            manager = null;
        }
        if (manager != null) {
            chunksProviders.put(id, manager);
            WindowUtils.openWebTab(project, SCAN_EDITOR_ID, id, () -> {
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(id, alias);
                manager.start();
            });
        }
    }

    @Override
    public void dispose() {
    	exportData.clear();
        chunksProviders.values().forEach(ChunksProvider::abort);
        chunksProviders.clear();
    }

    private void showGeneralError(String webAppId, String message, String code, String details) {
        ApplicationManager.getApplication().invokeAndWait(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).showGeneralError(webAppId, message, code, details));
    }
}
