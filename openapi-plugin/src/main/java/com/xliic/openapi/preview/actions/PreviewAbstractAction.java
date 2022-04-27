package com.xliic.openapi.preview.actions;

import java.net.MalformedURLException;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.actions.ProjectAction;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.services.BundleService;

public abstract class PreviewAbstractAction extends ProjectAction {

    public PreviewAbstractAction() {
        super("preview");
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
        try {
            browse(project, file);
        }
        catch (MalformedURLException exception) {
            exception.printStackTrace();
        }
    }

    public abstract void browse(Project project, VirtualFile file) throws MalformedURLException;
}