package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;

public class ScanLogger {

    @NotNull
    private final Project project;
    @NotNull
    private final String toId;
    
    public ScanLogger(@NotNull Project project, @NotNull String toId) {
        this.project = project;
        this.toId = toId;
    }

    public void debug(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, "debug", message));
    }

    public void info(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, "info", message));
    }

    public void warning(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, "warning", message));
    }

    public void error(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, "error", message));
    }

    public void fatal(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, "fatal", message));
    }
    
    public void log(@NotNull String level, @NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(toId, level, message));
    }
}
