package com.xliic.openapi.utils;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;

public class MsgUtils {

    public static void error(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, "Error", Messages.getErrorIcon()));
        } else {
            Messages.showMessageDialog(project, msg, "Error", Messages.getErrorIcon());
        }
    }

    public static void warning(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, "Warning", Messages.getWarningIcon()));
        } else {
            Messages.showMessageDialog(project, msg, "Warning", Messages.getWarningIcon());
        }
    }

    public static void info(@NotNull Project project, @NotNull String msg, boolean insideEDT) {
        info(project, msg, "Info", insideEDT);
    }

    public static void info(@NotNull Project project, @NotNull String msg, @NotNull String title, boolean insideEDT) {
        if (insideEDT) {
            ApplicationManager.getApplication().invokeAndWait(() ->
                    Messages.showMessageDialog(project, msg, title, Messages.getInformationIcon()));
        } else {
            Messages.showMessageDialog(project, msg, title, Messages.getInformationIcon());
        }
    }
}
