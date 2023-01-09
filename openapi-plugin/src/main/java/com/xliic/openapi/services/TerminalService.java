package com.xliic.openapi.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.api.ITerminalService;

public final class TerminalService implements ITerminalService, Disposable {

    @NotNull
    private final Project project;

    public TerminalService(@NotNull Project project) {
        this.project = project;
    }

    public static TerminalService getInstance(@NotNull Project project) {
        return project.getService(TerminalService.class);
    }

    public void sendTextQuietly(@NotNull String tabName, @NotNull String command) {
        try {
            sendText(tabName, command);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendText(@NotNull String tabName, @NotNull String command) throws Exception {
        Process process = Runtime.getRuntime().exec(command);
        int exitCode = process.waitFor();
        if (exitCode != 0) {
            String result = new BufferedReader(new InputStreamReader(process.getErrorStream())).readLine();
            throw new Exception("Command exit code " + exitCode + ": " + result);
        }
    }

    @Override
    public void dispose() {
    }
}
