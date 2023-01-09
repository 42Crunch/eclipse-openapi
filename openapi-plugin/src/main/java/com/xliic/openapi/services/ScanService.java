package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.SCAN;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.passwordSafe.PasswordSafe;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.MsgUtils;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.Environment;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.platform.scan.task.ScanDockerTask;
import com.xliic.openapi.platform.scan.task.ScanTask;
import com.xliic.openapi.services.api.IScanService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;

public final class ScanService implements IScanService, SettingsListener, Disposable {

    public static final String TERMINAL_TAB = "Scan";
    private static final CredentialAttributes CREDENTIAL_ATTRIBUTES = Settings.createCredentialAttributes(Settings.Platform.Scan.ENV_SECRETS_KEY);
    private static final String CREDENTIALS_ERROR_MSG = "Platform integration not enabled, please check your 42Crunch credentials";
    private static final String TASK_IN_PROGRESS_ERROR_MSG = "Another scan task already in progress, please wait";

    @NotNull
    private final Map<String, Preferences> preferences = new HashMap<>();
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

    public void saveEnv(@NotNull String type, @NotNull Map<String, Object> env) {
        String value = Settings.objectToString(env);
        if (value != null) {
            if (Environment.DEFAULT_KEY.equals(type)) {
                PropertiesComponent.getInstance().setValue(Settings.Platform.Scan.ENV_DEFAULT_KEY, value);
            } else if (Environment.SECRETS_KEY.equals(type)) {
                PasswordSafe.getInstance().set(CREDENTIAL_ATTRIBUTES, new Credentials("", value));
            }
        }
    }

    @NotNull
    public Preferences getPreferences(@NotNull VirtualFile file) {
        return preferences.getOrDefault(file.getPath(), new Preferences());
    }

    public void savePrefs(@NotNull String fileName, @NotNull Preferences prefs) {
        preferences.put(fileName, prefs);
    }

    @NotNull
    public Environment loadEnv() {
        String value = PropertiesComponent.getInstance().getValue(Settings.Platform.Scan.ENV_DEFAULT_KEY);
        String password = PasswordSafe.getInstance().getPassword(CREDENTIAL_ATTRIBUTES);
        return new Environment(value, password);
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
        Preferences prefs = preferences.getOrDefault(file.getPath(), new Preferences());
        Environment myEnv = loadEnv();
        ApplicationManager.getApplication().invokeAndWait(() -> {
            OpenApiUtils.activateToolWindow(project, SCAN);
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).scanOperation(payload, myEnv, prefs);
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

    @Override
    public void dispose() {
        preferences.clear();
        scanTaskInProgress = false;
    }
}
