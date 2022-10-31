package com.xliic.core.project;

import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IWorkbenchPart;
import org.jetbrains.annotations.NotNull;

public abstract class ProjectManagerListener implements IPartListener {

    @Override
    public final void partClosed(final IWorkbenchPart part) {
        if (part.getClass().toString().equals("class org.eclipse.ui.navigator.resources.ProjectExplorer")) {
            projectClosingBeforeSave(Project.getInstance());
        }
    }

    public abstract void projectClosingBeforeSave(@NotNull Project project);

    @Override
    public void partActivated(IWorkbenchPart part) {
    }

    @Override
    public void partBroughtToTop(IWorkbenchPart part) {
    }

    @Override
    public void partDeactivated(IWorkbenchPart part) {
    }

    @Override
    public void partOpened(IWorkbenchPart part) {
    }
}
