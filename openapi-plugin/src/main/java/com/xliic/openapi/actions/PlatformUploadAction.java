package com.xliic.openapi.actions;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PlatformService;
import org.jetbrains.annotations.NotNull;

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
        PlatformService platformService = PlatformService.getInstance(project);
        if (platformService.isPlatformFileModified(file)) {
            platformService.saveToPlatform(file, true);
        }
    }
}
