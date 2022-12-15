package com.xliic.openapi.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.FixGlobalDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.PreAuditDialog;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.settings.Settings;

public class PlatformUploadAction extends AnAction implements DumbAware {

    @Override
    public void update(@NotNull AnActionEvent event) {
        if (PlatformConnection.isEmpty()) {
            event.getPresentation().setVisible(false);
            return;
        }
        event.getPresentation().setEnabled(false);
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        if (root == null) {
            return;
        }
        PlatformService platformService = PlatformService.getInstance(project);
        event.getPresentation().setEnabled(platformService.isPlatformFileModified(file));
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedFile(project);
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
        PropertiesComponent settings = PropertiesComponent.getInstance();
        String value = settings.getValue(Settings.Platform.Dictionary.PreAudit.KEY);
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
                    settings.setValue(Settings.Platform.Dictionary.PreAudit.KEY, Settings.Platform.Dictionary.PreAudit.ALWAYS);
                    updateAndRunSaveToPlatform(action, project, file);
                } else if (code == PreAuditDialog.NEVER_EXIT_CODE) {
                    settings.setValue(Settings.Platform.Dictionary.PreAudit.KEY, Settings.Platform.Dictionary.PreAudit.NEVER);
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
        });
    }

    private void runSaveToPlatform(Project project, VirtualFile file) {
        PlatformService platformService = PlatformService.getInstance(project);
        if (platformService.isPlatformFileModified(file)) {
            platformService.saveToPlatform(file, true);
        }
    }
}
