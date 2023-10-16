package com.xliic.openapi.actions.internal;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.GitService;
import com.xliic.openapi.utils.MsgUtils;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class ShowGitPropertiesAction extends AnAction implements DumbAware {

    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(event.getProject() != null);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = Objects.requireNonNull(event.getProject());
        GitService gitService = GitService.getInstance(project);
        gitService.refresh();
        String status = gitService.getStringStatus();
        MsgUtils.info(event.getProject(), status, false);
    }
}