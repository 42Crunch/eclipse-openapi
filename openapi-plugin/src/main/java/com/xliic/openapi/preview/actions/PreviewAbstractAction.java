package com.xliic.openapi.preview.actions;

import java.net.MalformedURLException;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.actions.ProjectAction;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.preview.PreviewCallback;
import com.xliic.openapi.preview.PreviewDialog;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PreviewService;

public abstract class PreviewAbstractAction extends ProjectAction {

    public PreviewAbstractAction() {
        super("preview");
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
        PreviewService previewService = PreviewService.getInstance();
        if (previewService.isServerStated()) {
            process(project, file);
        } else {
            previewService.start(new PreviewCallback() {
                @Override
                public void setDone() {
                    process(project, file);
                }

                @Override
                public void setRejected() {
                    SwingUtilities.invokeLater(() -> {
                        PreviewDialog dialog;
                        if (getPort() > 0) {
                            dialog = new PreviewDialog(project, getPort());
                        } else {
                            dialog = new PreviewDialog(project, Objects.requireNonNull(getError()));
                        }
                        dialog.show();
                    });
                }
            });
        }
    }

    public abstract void browse(Project project, VirtualFile file) throws MalformedURLException;

    private void process(Project project, VirtualFile file) {
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
        try {
            browse(project, file);
        } catch (MalformedURLException exception) {
            exception.printStackTrace();
        }
    }
}