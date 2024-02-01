package com.xliic.openapi.config.jcef.messages;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.utils.CliUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import static com.xliic.openapi.settings.Settings.CliAst.DEFAULT_REPOSITORY;
import static com.xliic.openapi.settings.Settings.CliAst.REPOSITORY;

public class CliDownload extends WebAppProduce {

    @NotNull
    private final Project project;

    public CliDownload(@NotNull Project project) {
        // Running in EDT would have broken down download progress
        super("downloadCli", false, false);
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        String repository = PropertiesComponent.getInstance().getValue(REPOSITORY, DEFAULT_REPOSITORY);
        if (StringUtils.isEmpty(repository)) {
            notifyError("Repository URL is not set");
            return;
        }
        CliUtils.ensureDirectories(project);
        String cliPath = CliUtils.getCli();
        try {
            String downloadUrl = CliUtils.getCliDownloadUrl(repository);
            NetUtils.download(downloadUrl, cliPath, (bytesRead, contentLength, done) -> {
                ApplicationManager.getApplication().invokeLater(() -> {
                    if (done) {
                        String os = Utils.getOs();
                        if ("linux".equals(os) || "darwin".equals(os)) {
                            FileUtils.chmod(cliPath);
                        }
                        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(true, cliPath);
                    } else {
                        project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(new Progress(bytesRead, contentLength));
                    }
                });
            });
        } catch (Exception e) {
            notifyError(e.toString());
        }
    }

    private void notifyError(String error) {
        ApplicationManager.getApplication().invokeLater(() -> {
            project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(false, error);
        });
    }
}
