package com.xliic.openapi.graphql;

import static com.xliic.openapi.utils.FileUtils.isGraphQl;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.Utils;

public class GraphQlAuditAction extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project == null) {
            event.getPresentation().setEnabled(false);
            return;
        }
        VirtualFile myFile = Utils.getSelectedFile(project);
        if (myFile == null) {
            event.getPresentation().setEnabled(false);
            return;
        }
        event.getPresentation().setEnabled(isGraphQl(myFile));
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project != null) {
            VirtualFile file = Utils.getSelectedFile(project);
            if (file != null) {
                Credentials.Type type = Credentials.getCredentialsType();
                GraphQlService graphQlService = GraphQlService.getInstance(project);
                if (type != null) {
                    graphQlService.actionPerformed(project, file, type);
                } else {
                    Credentials.configureCredentials(project, new WizardCallback() {
                        @Override
                        public void complete() {
                            graphQlService.actionPerformed(project, file, Objects.requireNonNull(Credentials.getCredentialsType()));
                        }
                    });
                }
            }
        }
    }
}
