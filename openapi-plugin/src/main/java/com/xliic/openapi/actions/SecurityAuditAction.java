package com.xliic.openapi.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.MsgUtils;

public class SecurityAuditAction extends ProjectAction {

    public SecurityAuditAction() {
        super("audit", false);
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        if (auditService.isAuditAlreadyInProgress(file)) {
            MsgUtils.info(project, "Audit for " + file.getPath() + " is already in progress", false);
            return;
        }
        String rootFileName = file.getPath();
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundleResult = bundleService.getBundle(rootFileName);
        if (bundleResult == null) {
            return;
        }
        if (!bundleResult.isBundleComplete()) {
            bundleService.notifyOfErrors(rootFileName);
            return;
        }
        if (Credentials.hasCredentialsType()) {
            auditService.actionPerformed(project, file, Credentials.getCredentialsType(project));
        } else {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                    auditService.actionPerformed(project, file, Credentials.getCredentialsType(project));
                }
            });
        }
    }
}