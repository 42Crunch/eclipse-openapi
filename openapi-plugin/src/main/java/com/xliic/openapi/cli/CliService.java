package com.xliic.openapi.cli;

import static com.xliic.openapi.cli.CliUtils.getCliAstPlatform;
import static com.xliic.openapi.settings.Settings.CliAst.REPOSITORY;

import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.ICliService;
import com.xliic.core.ui.Messages;
import com.xliic.openapi.config.jcef.messages.CliTest;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

public class CliService implements ICliService, Disposable {

    public static final String DEFAULT_VERSION = "0.0.0";
    private static final long CLI_UPDATE_CHECK_INTERVAL = 1000 * 60 * 60 * 8; // 8 hours
    private static final long CLI_DOWNLOAD_CHECK_INTERVAL = 1000 * 60 * 60 * 48; // 48 hours
    private static final String MANIFEST_ERROR = "Failed to download 42Crunch API Security Testing Binary, manifest not found";
    private static final String PLATFORM_ERROR = "Unknown platform "  + Utils.getOs() + ", arch " + Utils.getOsArch();

    private volatile long lastCliUpdateCheckTime;
    private volatile long lastCliDownloadCheckTime;

    public interface Callback {
        void complete(@NotNull String cliPath);
        void reject(@NotNull String error);
        void cancel();
        default void progress(long bytesRead, long contentLength) {}
    }

    public CliService() {
        lastCliUpdateCheckTime = 0;
        lastCliDownloadCheckTime = 0;
    }

    public static CliService getInstance() {
        return ApplicationManager.getApplication().getService(CliService.class);
    }

    public void downloadOrUpdateIfNecessary(@NotNull Project project, @NotNull Callback callback, boolean forceDownload) {
        downloadOrUpdateIfNecessary(project, callback, true, forceDownload);
    }

    public void downloadOrUpdateIfNecessary(@NotNull Project project, @NotNull Callback callback, boolean ask, boolean forceDownload) {
        String repository = SettingsService.getInstance().getValue(REPOSITORY);
        if (StringUtils.isEmpty(repository)) {
            callback.reject("Repository URL is not set");
            return;
        }
        String platform = getCliAstPlatform();
        if (platform == null) {
            callback.reject(PLATFORM_ERROR);
            return;
        }
        String cliPath = CliUtils.getCli();
        if (FileUtils.exists(cliPath)) {
            update(project, cliPath, repository, platform, callback, ask);
        } else {
            if (!forceDownload) {
                // Check if we already offered to download
                long currentTime = new Date().getTime();
                if (currentTime - lastCliDownloadCheckTime < CLI_DOWNLOAD_CHECK_INTERVAL) {
                    callback.cancel();
                    return;
                }
                lastCliDownloadCheckTime = currentTime;
            }
            CliUtils.ensureDirectories(project);
            download(project, cliPath, repository, platform, callback, ask);
        }
    }

    private void update(Project project, String cliPath, String repository, String platform, Callback callback, boolean ask) {
        long currentTime = new Date().getTime();
        if (currentTime - lastCliUpdateCheckTime > CLI_UPDATE_CHECK_INTERVAL) {
            lastCliUpdateCheckTime = currentTime;
            String version;
            CliAstManifestEntry manifest;
            try {
                version = CliTest.getVersion(cliPath);
                manifest = CliUtils.getCliUpdate(repository, version, platform);
            } catch (Exception e) {
                callback.reject("Error during API Security Testing Binary update: " + e);
                return;
            }
            // There is no version greater than the current one
            if (manifest == null) {
                callback.complete(cliPath);
                return;
            }
            if (ask) {
                final int rc = getDialog(project, "New version " + manifest.getVersion() + " of 42Crunch API Security Testing Binary is available, download?");
                if (rc != Messages.OK) {
                    return;
                }
            }
            ProgressManager.getInstance().run(new CliBinaryTask(project, cliPath, manifest, callback));
        } else {
            callback.complete(cliPath);
        }
    }

    private void download(Project project, String cliPath, String repository, String platform, Callback callback, boolean ask) {
        lastCliUpdateCheckTime = new Date().getTime();
        if (ask) {
            final int rc = getDialog(project, "42Crunch API Security Testing Binary is not found, download?");
            if (rc != Messages.OK) {
            	callback.cancel();
                return;
            }
        }
        CliAstManifestEntry manifest;
        try {
            manifest = CliUtils.getCliUpdate(repository, DEFAULT_VERSION, platform);
        } catch (Exception e) {
            callback.reject("Error during API Security Testing Binary download: " + e);
            return;
        }
        if (manifest == null) {
            callback.reject(MANIFEST_ERROR);
            return;
        }
        ProgressManager.getInstance().run(new CliBinaryTask(project, cliPath, manifest, callback));
    }

    private static int getDialog(Project project, String message) {
        return Messages.showOkCancelDialog(project, message,"Download", "Download", "Cancel", Messages.getQuestionIcon());
    }

    @Override
    public void dispose() {
    }
}
