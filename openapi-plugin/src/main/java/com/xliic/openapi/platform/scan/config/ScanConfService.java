package com.xliic.openapi.platform.scan.config;

import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_CLI;
import static com.xliic.openapi.utils.Utils.turnOffVcsShowConfirmation;
import static com.xliic.openapi.utils.Utils.turnOnVcsShowConfirmation;
import static com.xliic.openapi.webapp.editor.WebFileEditor.SCANCONF_EDITOR_ID;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.IScanConfService;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.config.payload.ScanConfWithOas;
import com.xliic.openapi.platform.scan.config.task.ScanCliConfTask;
import com.xliic.openapi.platform.scan.config.task.ScanConfTask;
import com.xliic.openapi.platform.scan.config.task.ScanPlatformConfTask;
import com.xliic.openapi.platform.scan.config.task.update.ScanUpdateCliConfTask;
import com.xliic.openapi.platform.scan.config.task.update.ScanUpdateConfTask;
import com.xliic.openapi.platform.scan.config.task.update.ScanUpdatePlatformConfTask;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

public final class ScanConfService implements IScanConfService, Disposable {

    @NotNull
    private final Project project;
    private volatile boolean inProgress;

    public ScanConfService(@NotNull Project project) {
        this.project = project;
        inProgress = false;
    }

    public static ScanConfService getInstance(@NotNull Project project) {
        return project.getService(ScanConfService.class);
    }
    
    public boolean isInProgress() {
        return inProgress;
    }
    
    public void updateScanconf(@NotNull VirtualFile file, @NotNull String scanConfPath) {
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle == null || !bundle.isBundleComplete()) {
            MsgUtils.notifyError(project,"Failed to bundle, check OpenAPI file for errors.");
            bundleService.notifyOfErrors(file.getPath());
            return;
        }
        inProgress = true;
        ScanUpdateConfTask.Callback callback = new ScanUpdateConfTask.Callback() {
            @Override
            public void setDone(@NotNull String oas, @NotNull String config) {
                inProgress = false;
                String alias = ScanConfigUtils.getAlias(scanConfPath);
                ScanConfWithOas payload = new ScanConfWithOas(oas, config);
                WindowUtils.openWebTab(project, SCANCONF_EDITOR_ID, alias, () -> {
                    project.getMessageBus().syncPublisher(ScanListener.TOPIC).loadUpdatedScanConf(alias, payload);
                });
            }
            @Override
            public void setRejected(@NotNull Exception e) {
                inProgress = false;
                MsgUtils.notifyError(project,"Failed to update default config: " + e);
            }
        };
        ScanUpdateConfTask task;
        Credentials.Type type = Credentials.getCredentialsType();
        if (type == Credentials.Type.AnondToken) {
            task = new ScanUpdateCliConfTask(project, bundle, callback);
        } else {
            final String runtime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
            if (RUNTIME_CLI.equals(runtime)) {
                task = new ScanUpdateCliConfTask(project, bundle, callback);
            } else {
                task = new ScanUpdatePlatformConfTask(project, bundle, callback);
            }
        }
        ProgressManager.getInstance().run(task);
    }

    public void scanConfActionPerformed(@NotNull VirtualFile file, @NotNull ScanConfOperation payload) {
        Credentials.Type type = Credentials.getCredentialsType();
        if (type != null) {
            scanConfActionPerformed(file, payload, type);
        } else {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                	new Thread(() -> scanConfActionPerformed(file, payload, Credentials.getCredentialsType())).start();
                }
            });
        }
    }

    private void scanConfActionPerformed(@NotNull VirtualFile file, @NotNull ScanConfOperation payload, @NotNull Credentials.Type type) {
        if (inProgress) {
            return;
        }
        inProgress = true;
        final String runtime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        // Free users and platform users who chose to use CLI for scan must have CLI available
        if (type == Credentials.Type.AnondToken || (type == Credentials.Type.ApiToken && RUNTIME_CLI.equals(runtime))) {
            CliService.getInstance().downloadOrUpdateIfNecessary(project, new CliService.Callback() {
                @Override
                public void complete(@NotNull String cliPath) {
                    createScanConf(file, payload, type);
                }
                @Override
                public void reject(@NotNull String error) {
                    MsgUtils.notifyError(project, error);
                    inProgress = false;
                }
                @Override
                public void cancel() {
                    MsgUtils.notifyInfo(project, "42Crunch API Security Testing Binary is required to run Scan.");
                    inProgress = false;
                }
            }, true);
        } else {
            createScanConf(file, payload, type);
        }
    }
    
    private void createScanConf(@NotNull VirtualFile file, @NotNull ScanConfOperation payload, @NotNull Credentials.Type type) {
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle == null || !bundle.isBundleComplete()) {
            MsgUtils.notifyError(project,"Failed to bundle, check OpenAPI file for errors.");
            bundleService.notifyOfErrors(file.getPath());
            return;
        }
        String title = ScanConfigUtils.getScanTitle(bundle);
        boolean turnedOff = turnOffVcsShowConfirmation(project);
        String scanConfPath = ScanConfigUtils.getScanConfPath(project, file.getPath(), title);
        ScanConfTask.Callback callback = new ScanConfTask.Callback() {
            @Override
            public void setDone(@NotNull String oas, @NotNull String config, boolean configCreated) {
                inProgress = false;
                payload.setOas(oas);
                payload.setConfig(config);
                payload.setScanConfPath(scanConfPath);
                if (configCreated) {
                    MsgUtils.notifyInfo(project,"Saved Conformance Scan configuration to: " + scanConfPath);
                }
                showScanConfTab(payload, scanConfPath, turnedOff);
            }
            @Override
            public void setRejected(@NotNull Exception e) {
                inProgress = false;
                MsgUtils.notifyError(project, "Failed to create default config, please run Audit to check your OpenAPI for errors: " + e);
                if (turnedOff) {
                    turnOnVcsShowConfirmation(project);
                }
                Logger.getInstance(ScanConfService.class).error(e);
            }
            @Override
            public void cancel() {
                inProgress = false;
                if (turnedOff) {
                    turnOnVcsShowConfirmation(project);
                }
            }
        };
        if (FileUtils.exists(scanConfPath)) {
            String oas = bundle.getJsonText();
            String config = Utils.getTextFromFile(scanConfPath, true);
            inProgress = false;
            if (config == null) {
                callback.setRejected(new Exception("Failed to read config from " + scanConfPath));
            } else {
                callback.setDone(oas, config, false);
            }
        } else {
            ScanConfTask task;
            if (type == Credentials.Type.AnondToken) {
                // Free users must use CLI for scan, there is no need to fall back to anond for initial audit
                // if there is no CLI available, they will not be able to run scan or create a scan config in any case
                task = new ScanCliConfTask(project, bundle, scanConfPath, callback);
            } else {
                final String runtime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
                if (RUNTIME_CLI.equals(runtime)) {
                    task = new ScanCliConfTask(project, bundle, scanConfPath, callback);
                } else {
                    // This will run audit on the platform as well
                    task = new ScanPlatformConfTask(project, bundle, scanConfPath, callback);
                }
            }
            ProgressManager.getInstance().run(task);
        }
    }

    private void showScanConfTab(ScanConfOperation payload, String scanConfPath, boolean turnedOff) {
        String alias = ScanConfigUtils.getAlias(scanConfPath);
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        Preferences prefs = PrefsService.getInstance(project).getPreferences(file);
        Environment myEnv = EnvService.getInstance(project).getEnv();
        WindowUtils.openWebTab(project, SCANCONF_EDITOR_ID, alias, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanConfOperation(alias, payload, myEnv, prefs);
            if (turnedOff) {
                turnOnVcsShowConfirmation(project);
            }
        });
    }

    @Override
    public void dispose() {
    }
}
