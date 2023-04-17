package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.SCAN;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scan.task.ScanTask;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.services.api.IScanService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.WindowUtils;

public final class ScanService implements IScanService, SettingsListener {

    public static final String TERMINAL_TAB = "Scan";
    private static final String CREDENTIALS_ERROR_MSG = "Platform integration not enabled, please check your 42Crunch credentials";
    private static final String TASK_IN_PROGRESS_ERROR_MSG = "Another scan task already in progress, please wait";

    @NotNull
    private final Project project;
    private volatile boolean scanTaskInProgress;

    public ScanService(@NotNull Project project) {
        this.project = project;
        scanTaskInProgress = false;
    }

    public static ScanService getInstance(@NotNull Project project) {
        return project.getService(ScanService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public void runScan(@NotNull ScanRunConfig config) {
        scanTaskInProgress = true;
        ProgressManager.getInstance().run(new ScanDockerTask(project, config, new ScanDockerTask.Callback() {
            @Override
            public void setDone(@NotNull ScanReport report) {
                scanTaskInProgress = false;
                ApplicationManager.getApplication().invokeAndWait(() ->
                        project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanReport(report));
            }
            @Override
            public void setRejected(@NotNull String error) {
                scanTaskInProgress = false;
                MsgUtils.error(project, error, true);
            }
        }));
    }

    private void createOrActiveScanWindow(@NotNull ScanOperation payload) {
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        PrefsService prefsService = PrefsService.getInstance(project);
        Preferences prefs = prefsService.getPreferences(file);
        Environment myEnv = EnvService.getInstance(project).getEnv();
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, SCAN, () ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).scanOperation(payload, myEnv, prefs));
        }, ModalityState.NON_MODAL);
    }

    public void scanActionPerformed(@NotNull VirtualFile file, @NotNull ScanOperation payload) {
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            MsgUtils.error(project, CREDENTIALS_ERROR_MSG, true);
            return;
        }
        if (scanTaskInProgress) {
            MsgUtils.error(project, TASK_IN_PROGRESS_ERROR_MSG, true);
            return;
        }
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle != null && bundle.isBundleComplete()) {
            scanTaskInProgress = true;
            ProgressManager.getInstance().run(new ScanTask(project, payload.getPath(), bundle, new ScanTask.Callback() {
                @Override
                public void setDone(@NotNull String oas, @NotNull String config) {
                    payload.setOas(oas);
                    payload.setRawOas(oas);
                    payload.setConfig(config);
                    createOrActiveScanWindow(payload);
                    scanTaskInProgress = false;
                }
                @Override
                public void setRejected(@NotNull String error) {
                    scanTaskInProgress = false;
                    MsgUtils.error(project, error, true);
                }
            }));
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            if (!PlatformConnection.isPlatformIntegrationEnabled()) {
                ToolWindowManager manager = ToolWindowManager.getInstance(project);
                ToolWindow window = manager.getToolWindow(SCAN);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
            }
        }
    }
}
