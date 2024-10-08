package com.xliic.openapi.services;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.services.ITerminalService;
import com.xliic.openapi.utils.ExecUtils;

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
    	String cmd = cmdList.remove(0);
        ExecUtils.asyncExecFile(cmd, cmdList);
    }

    @Override
    public void dispose() {
    }
}
