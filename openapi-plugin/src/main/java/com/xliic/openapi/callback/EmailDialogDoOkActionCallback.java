package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.MsgUtils;
import com.xliic.openapi.settings.audit.TokenDialog;

public class EmailDialogDoOkActionCallback extends ActionCallback {

    private final Project project;
    private final VirtualFile file;

    public EmailDialogDoOkActionCallback(@NotNull Project project, @NotNull VirtualFile file) {
        this.project = project;
        this.file = file;
    }

    @Override
    public void setDone() {
        ApplicationManager.getApplication().invokeLater(() -> new TokenDialog(project, file).showAndGet());
    }

    @Override
    public void setRejected() {
        MsgUtils.error(project, getError(), true);
    }
}
