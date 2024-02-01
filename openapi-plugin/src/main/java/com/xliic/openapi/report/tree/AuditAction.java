package com.xliic.openapi.report.tree;

import org.jetbrains.annotations.NotNull;

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

    @NotNull
    private final AuditOperation payload;

    public AuditAction(@NotNull String name, @NotNull AuditOperation payload) {
        super(name, "", OpenApiIcons.Audit);
        this.payload = payload;
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        Project project = event.getProject();
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        event.getPresentation().setEnabled(bundle != null && bundle.isBundleComplete());
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Project project = event.getProject();
        VirtualFile file = payload.getPsiFile().getVirtualFile();
        AuditService auditService = AuditService.getInstance(project);
        Credentials.Type type = Credentials.getCredentialsType(project);
        if (type == null) {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                    auditService.actionPerformed(project, file, payload, Credentials.getCredentialsType(project));
                }
            });
        } else {
            auditService.actionPerformed(project, file, payload, type);
        }
    }
}