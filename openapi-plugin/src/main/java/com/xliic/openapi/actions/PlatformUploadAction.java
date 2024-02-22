package com.xliic.openapi.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.FixGlobalDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.PreAuditDialog;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;

public class PlatformUploadAction extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void update(@NotNull AnActionEvent event) {
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            event.getPresentation().setVisible(false);
            return;
        }
        event.getPresentation().setEnabled(false);
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        if (root == null) {
            return;
        }
        PlatformService platformService = PlatformService.getInstance(project);
        event.getPresentation().setEnabled(platformService.isFileDirty(file) && !platformService.isFileReadOnly(file));
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = Utils.getSelectedFile(project);
        if (file == null) {
            return;
        }
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundleResult = bundleService.getBundle(file.getPath());
        if (bundleResult == null) {
            return;
        }
        if (!bundleResult.isBundleComplete()) {
            bundleService.notifyOfErrors(file.getPath());
            return;
        }
        String value = SettingsService.getInstance().getValue(Settings.Platform.Dictionary.PreAudit.CHOICE);
        if (Settings.Platform.Dictionary.PreAudit.ASK.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                PreAuditDialog dialog = new PreAuditDialog(project);
                dialog.show();
                int code = dialog.getExitCode();
                if (code == DialogWrapper.OK_EXIT_CODE) {
                    updateAndRunSaveToPlatform(action, project, file);
                } else if (code == PreAuditDialog.NO_EXIT_CODE) {
                    runSaveToPlatform(project, file);
                } else if (code == PreAuditDialog.ALWAYS_EXIT_CODE) {
                	SettingsService.getInstance().setValue(Settings.Platform.Dictionary.PreAudit.CHOICE, Settings.Platform.Dictionary.PreAudit.ALWAYS);
                    updateAndRunSaveToPlatform(action, project, file);
                } else if (code == PreAuditDialog.NEVER_EXIT_CODE) {
                	SettingsService.getInstance().setValue(Settings.Platform.Dictionary.PreAudit.CHOICE, Settings.Platform.Dictionary.PreAudit.NEVER);
                    runSaveToPlatform(project, file);
                }
            } else {
                runSaveToPlatform(project, file);
            }
        } else if (Settings.Platform.Dictionary.PreAudit.ALWAYS.equals(value)) {
            FixGlobalDictionaryAction action = new FixGlobalDictionaryAction();
            if (action.update(project, file)) {
                updateAndRunSaveToPlatform(action, project, file);
            } else {
                runSaveToPlatform(project, file);
            }
        } else {
            runSaveToPlatform(project, file);
        }
    }

    private void updateAndRunSaveToPlatform(FixGlobalDictionaryAction action, Project project, VirtualFile file) {
        action.actionPerformed(project, file, new ActionCallback() {
            @Override
            public void setDone() {
                SwingUtilities.invokeLater(() -> runSaveToPlatform(project, file));
            }
        }, false);
    }

    private void runSaveToPlatform(Project project, VirtualFile file) {
        PlatformService platformService = PlatformService.getInstance(project);
        if (platformService.isFileDirty(file)) {
            platformService.saveToPlatform(file, true);
        }
    }
}
