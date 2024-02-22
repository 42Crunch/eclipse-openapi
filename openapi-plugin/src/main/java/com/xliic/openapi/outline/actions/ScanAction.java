package com.xliic.openapi.outline.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.scan.config.ScanConfService;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.services.BundleService;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

public class ScanAction extends AnJAction implements DumbAware {

    private static final String NAME = "Scan";

    @NotNull
    private final ScanConfOperation payload;

    public ScanAction(@NotNull ScanConfOperation payload) {
        super(NAME, "", OpenApiIcons.Scan);
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
        ScanConfService.getInstance(project).scanConfActionPerformed(file, payload);
    }
}
