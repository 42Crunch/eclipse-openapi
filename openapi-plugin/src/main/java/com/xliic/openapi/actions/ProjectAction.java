package com.xliic.openapi.actions;

import java.util.Collection;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.TempFileUtils;
import com.xliic.openapi.utils.Utils;

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
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        if (root == null) {
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
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        if (projects.isEmpty()) {
            MsgUtils.error(project, OpenApiBundle.message("openapi.non.project.file", name), false);
            return;
        } else if (TempFileUtils.isExtRefFile(file)) {
            MsgUtils.error(project, OpenApiBundle.message("openapi.temp.file", name), false);
            return;
        }
        actionPerformed(project, file);
    }

    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    public abstract void actionPerformed(@NotNull Project project, @NotNull VirtualFile file);
}
