package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;

public class ScanLogger {

    @NotNull
    private final Project project;
    @NotNull
    private final String webAppId;
    
    public ScanLogger(@NotNull Project project, @NotNull String webAppId) {
        this.project = project;
        this.webAppId = webAppId;
    }

    public void debug(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, "debug", message));
    }

    public void info(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, "info", message));
    }

    public void warning(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, "warning", message));
    }

    public void error(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, "error", message));
    }

    public void fatal(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, "fatal", message));
    }
    
    public void log(@NotNull String level, @NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(webAppId, level, message));
    }
}
