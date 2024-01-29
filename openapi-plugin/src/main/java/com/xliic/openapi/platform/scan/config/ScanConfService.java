package com.xliic.openapi.platform.scan.config;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.config.task.ScanCliConfTask;
import com.xliic.openapi.platform.scan.config.task.ScanConfTask;
import com.xliic.openapi.platform.scan.config.task.ScanPlatformConfTask;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.utils.*;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.settings.Settings.CliAst.DEFAULT_REPOSITORY;
import static com.xliic.openapi.settings.Settings.CliAst.REPOSITORY;
import static com.xliic.openapi.utils.MsgUtils.notifyTokenNotFound;
import static com.xliic.openapi.utils.Utils.turnOffVcsShowConfirmation;
import static com.xliic.openapi.utils.Utils.turnOnVcsShowConfirmation;

public final class ScanConfService implements IScanConfService, Disposable {

    @NotNull
    private final Project project;
    private volatile boolean scanConfTaskInProgress;

    public ScanConfService(@NotNull Project project) {
        this.project = project;
        scanConfTaskInProgress = false;
    }

    public static ScanConfService getInstance(@NotNull Project project) {
        return project.getService(ScanConfService.class);
    }

    public void scanConfActionPerformed(@NotNull VirtualFile file, @NotNull ScanConfOperation payload) {
        if (scanConfTaskInProgress) {
            return;
        }
        if (CliUtils.hasCli()) {
            String cliPath = CliUtils.getCli();
            if (FileUtils.exists(cliPath)) {
                createScanConf(file, payload);
            } else {
                final int rc = Messages.showOkCancelDialog(project, "42Crunch CLI is not found, download?",
                        "Download", "Download", "Cancel", Messages.getQuestionIcon());
                if (rc == Messages.OK) {
                    scanConfTaskInProgress = true;
                    ProgressManager.getInstance().run(new Task.Backgroundable(project, "Downloading 42Crunch CLI", false) {
                        @Override
                        public void run(@NotNull ProgressIndicator progress) {
                            String repository = PropertiesComponent.getInstance().getValue(REPOSITORY, DEFAULT_REPOSITORY);
                            if (StringUtils.isEmpty(repository)) {
                                scanConfTaskInProgress = false;
                                MsgUtils.notifyError(project,"Repository URL is not set");
                                return;
                            }
                            try {
                                String downloadUrl = CliUtils.getCliDownloadUrl(repository);
                                NetUtils.download(downloadUrl, cliPath, (bytesRead, contentLength, done) -> {
                                    if (done) {
                                        scanConfTaskInProgress = false;
                                        createScanConf(file, payload);
                                    } else {
                                        progress.setText("Downloading 42Crunch CLI: " + Progress.getPercent(bytesRead, contentLength));
                                    }
                                });
                            } catch (Exception e) {
                                ApplicationManager.getApplication().invokeLater(() -> {
                                    scanConfTaskInProgress = false;
                                    MsgUtils.notifyError(project, e.toString());
                                });
                            }
                        }
                    });
                }
            }
        } else {
            createScanConf(file, payload);
        }
    }

    private void createScanConf(@NotNull VirtualFile file, @NotNull ScanConfOperation payload) {
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
                scanConfTaskInProgress = false;
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
            	e.printStackTrace();
                scanConfTaskInProgress = false;
                MsgUtils.notifyError(project,"Failed to create default config: " + e);
                if (turnedOff) {
                    turnOnVcsShowConfirmation(project);
                }
            }
        };
        scanConfTaskInProgress = true;
        if (FileUtils.exists(scanConfPath)) {
            String oas = bundle.getJsonText();
            String config = Utils.getTextFromFile(scanConfPath, true);
            if (config == null) {
                callback.setRejected(new Exception("Failed to read config from " + scanConfPath));
            } else {
                callback.setDone(oas, config, false);
            }
        } else {
            boolean hasCli = CliUtils.hasCli();
            String token = PropertiesComponent.getInstance().getValue(Settings.Audit.TOKEN);
            ScanConfTask task;
            if (hasCli && !StringUtils.isEmpty(token)) {
                task = new ScanCliConfTask(project, payload.getPath(), bundle, scanConfPath, callback);
            } else {
                if (hasCli) {
                    notifyTokenNotFound(project, "platform connection");
                }
                task = new ScanPlatformConfTask(project, payload.getPath(), bundle, scanConfPath, callback);
            }
            ProgressManager.getInstance().run(task);
        }
    }

    private void showScanConfTab(ScanConfOperation payload, String scanconfUri, boolean turnedOff) {
        String alias = ScanConfigUtils.getAlias(scanconfUri);
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        Preferences prefs = PrefsService.getInstance(project).getPreferences(file);
        Environment myEnv = EnvService.getInstance(project).getEnv();
        WindowUtils.openWebTab(project, "scanconf", alias, () -> {
            project.getMessageBus().syncPublisher(ScanListener.TOPIC).showScanConfOperation(payload, myEnv, prefs);
            if (turnedOff) {
                turnOnVcsShowConfirmation(project);
            }
        });
    }

    @Override
    public void dispose() {
    }
}
