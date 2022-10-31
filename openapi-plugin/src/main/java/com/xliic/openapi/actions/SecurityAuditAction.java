package com.xliic.openapi.actions;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.platform.dictionary.quickfix.FixGlobalDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.PreAuditDialog;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.AuditConfigEmailDialogWrapper;
import com.xliic.openapi.settings.SettingsKeys;
import com.xliic.openapi.settings.SettingsKeys.Platform.Dictionary.PreAudit;

public class SecurityAuditAction extends ProjectAction {

    public SecurityAuditAction() {
        super("audit");
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
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
        PropertiesComponent settings = PropertiesComponent.getInstance();
        String value = settings.getValue(PreAudit.KEY);
        if (PreAudit.ASK.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                PreAuditDialog dialog = new PreAuditDialog(project);
                dialog.show();
                int code = dialog.getExitCode();
                if (code == DialogWrapper.OK_EXIT_CODE) {
                    updateAndRunAudit(action, project, file);
                } else if (code == PreAuditDialog.NO_EXIT_CODE) {
                    runAudit(project, file);
                } else if (code == PreAuditDialog.ALWAYS_EXIT_CODE) {
                    settings.setValue(PreAudit.KEY, PreAudit.ALWAYS);
                    updateAndRunAudit(action, project, file);
                } else if (code == PreAuditDialog.NEVER_EXIT_CODE) {
                    settings.setValue(PreAudit.KEY, PreAudit.NEVER);
                    runAudit(project, file);
                }
            } else {
                runAudit(project, file);
            }
        } else if (PreAudit.ALWAYS.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                updateAndRunAudit(action, project, file);
            } else {
                runAudit(project, file);
            }
        } else {
            runAudit(project, file);
        }
    }

    private void updateAndRunAudit(FixGlobalDictionaryAction action, Project project, VirtualFile file) {
        action.actionPerformed(project, file, new ActionCallback() {
            @Override
            public void setDone() {
                runAudit(project, file);
            }
        });
    }

    private void runAudit(Project project, VirtualFile file) {
        String token = PropertiesComponent.getInstance().getValue(SettingsKeys.TOKEN);
        if (StringUtils.isEmpty(token)) {
            new AuditConfigEmailDialogWrapper(project, file).showAndGet();
        } else {
            AuditService auditService = AuditService.getInstance(project);
            auditService.sendAuditRequest(token, file.getPath(), new AuditActionCallback(project, file));
        }
    }
}