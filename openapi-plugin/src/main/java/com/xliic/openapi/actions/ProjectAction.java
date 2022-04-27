package com.xliic.openapi.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.ui.Messages;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.services.DataService;

import java.util.Collection;

public abstract class ProjectAction extends AnAction implements DumbAware {

    private final String name;

    public ProjectAction(String name) {
        this.name = name;
    }

    @Override
    public void update(AnActionEvent event) {
        event.getPresentation().setEnabled(false);
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        DataService dataService = DataService.getInstance(project);
        if (!dataService.getParserData(file.getPath()).isValid()) {
            return;
        }
        event.getPresentation().setEnabled(update(project, file));
    }

    @Override
    public void actionPerformed(AnActionEvent e) {
        Project project = e.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        if (projects.isEmpty()) {
            String msg = OpenApiBundle.message("openapi.non.project.file", name, "asd");
            Messages.showMessageDialog(project, msg, OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon());
            return;
        }
        actionPerformed(project, file);
    }

    public abstract boolean update(@NotNull Project project, @NotNull VirtualFile file);
    public abstract void actionPerformed(@NotNull Project project, @NotNull VirtualFile file);
}
