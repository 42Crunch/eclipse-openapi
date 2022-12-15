package com.xliic.openapi.tryit;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.tryit.payload.TryItOperation;

import icons.OpenApiIcons;

public class TryItAction extends AnJAction implements DumbAware {

    @NotNull
    private final TryItOperation payload;

    public TryItAction(@NotNull String name, @NotNull TryItOperation payload) {
        super(name, "", OpenApiIcons.TryIt);
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
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle != null && bundle.getAST() != null) {
            payload.setOas(bundle);
            TryItService tryItService = TryItService.getInstance(project);
            tryItService.createOrActiveTryItWindow(payload);
        }
    }
}
