package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;

public class ScanLogger {

    @NotNull
    private final Project project;

    public ScanLogger(@NotNull Project project) {
        this.project = project;
    }

    public void debug(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage("debug", message));
    }

    public void info(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage("info", message));
    }

    public void warning(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage("warning", message));
    }

    public void error(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage("error", message));
    }

    public void fatal(@NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage("fatal", message));
    }
    
    public void log(@NotNull String level, @NotNull String message) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ScanListener.TOPIC).sendLogMessage(level, message));
    }
}
