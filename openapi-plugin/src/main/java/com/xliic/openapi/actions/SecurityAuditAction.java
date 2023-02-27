package com.xliic.openapi.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.FixGlobalDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.PreAuditDialog;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings.Platform.Dictionary.PreAudit;
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
        Credentials.Type type = Credentials.getCredentialsType();
        if (type == null) {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                    actionPerformed(project, file, Credentials.getCredentialsType());
                }
            });
        } else {
            actionPerformed(project, file, type);
        }
    }

    private void actionPerformed(Project project, VirtualFile file, Credentials.Type type) {
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            runAudit(project, file, type);
            return;
        }
        PropertiesComponent settings = PropertiesComponent.getInstance();
        String value = settings.getValue(PreAudit.CHOICE);
        if (PreAudit.ASK.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                PreAuditDialog dialog = new PreAuditDialog(project);
                dialog.show();
                int code = dialog.getExitCode();
                if (code == DialogWrapper.OK_EXIT_CODE) {
                    updateAndRunAudit(action, project, file, type);
                } else if (code == PreAuditDialog.NO_EXIT_CODE) {
                    runAudit(project, file, type);
                } else if (code == PreAuditDialog.ALWAYS_EXIT_CODE) {
                    settings.setValue(PreAudit.CHOICE, PreAudit.ALWAYS);
                    updateAndRunAudit(action, project, file, type);
                } else if (code == PreAuditDialog.NEVER_EXIT_CODE) {
                    settings.setValue(PreAudit.CHOICE, PreAudit.NEVER);
                    runAudit(project, file, type);
                }
            } else {
                runAudit(project, file, type);
            }
        } else if (PreAudit.ALWAYS.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                updateAndRunAudit(action, project, file, type);
            } else {
                runAudit(project, file, type);
            }
        } else {
            runAudit(project, file, type);
        }
    }

    private void updateAndRunAudit(FixGlobalDictionaryAction action, Project project, VirtualFile file, Credentials.Type type) {
        action.actionPerformed(project, file, new ActionCallback() {
            @Override
            public void setDone() {
                runAudit(project, file, type);
            }
        });
    }

    private void runAudit(Project project, VirtualFile file, Credentials.Type type) {
        AuditService auditService = AuditService.getInstance(project);
        auditService.runAudit(project, file, type);
    }
}