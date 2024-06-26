package com.xliic.openapi.config.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.webapp.messages.WebAppProduce;

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
        CliService.getInstance().downloadOrUpdateIfNecessary(project, new CliService.Callback() {
            @Override
            public void complete(@NotNull String cliPath) {
                ApplicationManager.getApplication().invokeLater(() -> {
                    project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(true, cliPath);
                });
            }
            @Override
            public void reject(@NotNull String error) {
                ApplicationManager.getApplication().invokeLater(() -> {
                    project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(false, error);
                });
            }
            @Override
            public void cancel() {
            }
            public void progress(long bytesRead, long contentLength) {
                ApplicationManager.getApplication().invokeLater(() -> {
                    project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliDownload(new Progress(bytesRead, contentLength));
                });
            }
        }, false);
    }
}
