package com.xliic.openapi.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

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

    public void sendText(@NotNull String tabName, @NotNull List<String> cmdList) throws Exception {
        String cmdArray[] = new String[cmdList.size()];
        Process process = Runtime.getRuntime().exec(cmdList.toArray(cmdArray));
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
