package com.xliic.openapi.outline.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
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
import org.jetbrains.annotations.NotNull;

public class TryItAction extends AnJAction implements DumbAware {

    @NotNull
    private final TryItOperation payload;

    public TryItAction(@NotNull String name, @NotNull TryItOperation payload) {
        super(name, "", OpenApiIcons.TryIt);
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
        BundleResult bundle = BundleService.getInstance(project).getBundle(file.getPath());
        if (bundle != null && bundle.getAST() != null) {
            payload.setOas(bundle);
            TryItService.getInstance(project).createOrActiveTryItWindow(payload);
        }
    }
}
