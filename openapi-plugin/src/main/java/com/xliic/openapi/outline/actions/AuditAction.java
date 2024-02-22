package com.xliic.openapi.outline.actions;

import static com.xliic.openapi.settings.Credentials.getCredentialsType;
import static com.xliic.openapi.settings.Credentials.hasCredentialsType;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.wizard.WizardCallback;

import icons.OpenApiIcons;

public class AuditAction extends AnJAction implements DumbAware {

    private static final String NAME = "Audit";

    @NotNull
    private final AuditOperation payload;

    public AuditAction(@NotNull AuditOperation payload) {
        super(NAME, "", OpenApiIcons.SecurityAudit);
        this.payload = payload;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            event.getPresentation().setEnabled(false);
        } else {
            VirtualFile file = payload.getPsiFile().getVirtualFile();
            BundleResult bundle = BundleService.getInstance(project).getBundle(file.getPath());
            event.getPresentation().setEnabled(bundle != null && bundle.isBundleComplete());
        }
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        AuditService auditService = AuditService.getInstance(project);
        if (hasCredentialsType()) {
            auditService.actionPerformed(project, file, payload, getCredentialsType(project));
        } else {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                    auditService.actionPerformed(project, file, payload, getCredentialsType(project));
                }
            });
        }
    }
}
