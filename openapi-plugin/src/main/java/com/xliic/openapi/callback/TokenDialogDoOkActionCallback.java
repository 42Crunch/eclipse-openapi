package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.AuditService;

public class TokenDialogDoOkActionCallback extends ActionCallback {

    private final Project project;
    private final String token;
    private final VirtualFile file;

    public TokenDialogDoOkActionCallback(@NotNull Project project, @NotNull VirtualFile file, @NotNull String token) {
        this.project = project;
        this.token = token;
        this.file = file;
    }

    @Override
    public void setDone() {
        ApplicationManager.getApplication().invokeLater(() -> {
            AuditService auditService = AuditService.getInstance(project);
            auditService.sendAuditRequest(token, file.getPath(), new AuditActionCallback(project, file));
        });
    }
}
