package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

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

public class ScanAction extends AnJAction implements DumbAware {

    @NotNull
    private final ScanConfOperation payload;

    public ScanAction(@NotNull String name, @NotNull ScanConfOperation payload) {
        super(name, "", OpenApiIcons.Scan);
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
        ScanConfService scanConfService = ScanConfService.getInstance(project);
        scanConfService.scanConfActionPerformed(file, payload);
    }
}
