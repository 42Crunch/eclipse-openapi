package com.xliic.openapi.graphql.scan.config;

import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME_CLI;
import static com.xliic.openapi.utils.Utils.turnOffVcsShowConfirmation;
import static com.xliic.openapi.utils.Utils.turnOnVcsShowConfirmation;
import static com.xliic.openapi.webapp.editor.WebFileEditor.GQL_SCANCONF_EDITOR_ID;

import org.apache.commons.io.FilenameUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.IGqlScanConfService;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.graphql.scan.config.payload.GqlScanConfOperation;
import com.xliic.openapi.graphql.scan.config.task.GqlScanCliConfTask;
import com.xliic.openapi.graphql.scan.config.task.GqlScanConfTask;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

public final class GqlScanConfService implements IGqlScanConfService, Disposable {

    @NotNull
    private final Project project;
    private volatile boolean inProgress;

    public GqlScanConfService(@NotNull Project project) {
        this.project = project;
        inProgress = false;
    }

    public static GqlScanConfService getInstance(@NotNull Project project) {
        return project.getService(GqlScanConfService.class);
    }

    public boolean isInProgress() {
        return inProgress;
    }

    public void scanConfActionPerformed(@NotNull VirtualFile file, @NotNull GqlScanConfOperation payload) {
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

    private void scanConfActionPerformed(@NotNull VirtualFile file, @NotNull GqlScanConfOperation payload, @NotNull Credentials.Type type) {
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

    private void createScanConf(@NotNull VirtualFile file, @NotNull GqlScanConfOperation payload, @NotNull Credentials.Type type) {
        String title = FilenameUtils.getBaseName(file.getPath());
        boolean turnedOff = turnOffVcsShowConfirmation(project);
        String scanConfPath = ScanConfigUtils.getScanConfPath(project, file.getPath(), title);
        GqlScanConfTask.Callback callback = new GqlScanConfTask.Callback() {
            @Override
            public void setDone(@NotNull String text, @NotNull String config, boolean configCreated) {
                inProgress = false;
                payload.setOas(text);
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
                MsgUtils.notifyError(project,"Failed to create default config, please run Audit to check your OpenAPI for errors: " + e);
                if (turnedOff) {
                    turnOnVcsShowConfirmation(project);
                }
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
            String config = Utils.getTextFromFile(scanConfPath, true);
            inProgress = false;
            if (config == null) {
                callback.setRejected(new Exception("Failed to read config from " + scanConfPath));
            } else {
                String text = Utils.getTextFromFile(file.getPath(), true);
                if (text != null) {
                    callback.setDone(text, config, false);
                } else {
                    callback.setRejected(new Exception("Failed to read text from " + file.getPath()));
                }
            }
        } else {
            ProgressManager.getInstance().run(new GqlScanCliConfTask(project, file, scanConfPath, type, callback));
        }
    }

    private void showScanConfTab(GqlScanConfOperation payload, String scanConfPath, boolean turnedOff) {
        String alias = ScanConfigUtils.getAlias(scanConfPath);
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        Preferences prefs = PrefsService.getInstance(project).getPreferences(file);
        Environment myEnv = EnvService.getInstance(project).getEnv();
        WindowUtils.openWebTab(project, GQL_SCANCONF_EDITOR_ID, alias, () -> {
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
