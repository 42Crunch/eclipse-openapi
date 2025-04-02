package com.xliic.openapi.actions;

import static com.xliic.openapi.utils.FileUtils.isGraphQl;

import java.util.Collection;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.graphql.GraphQlService;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class SecurityAuditAction extends ProjectAction {

    public SecurityAuditAction() {
        super("audit", false);
    }
    
    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(false);
        Project project = event.getProject();
        if (project == null) {
            return;
        }
        VirtualFile myFile = Utils.getSelectedFile(project);
        if (myFile == null) {
            return;
        }
        if (isGraphQl(myFile)) {
            event.getPresentation().setEnabled(true);
        } else {
            super.update(event);
        }
    }

    @Override
    public void actionPerformed(AnActionEvent e) {
        Project project = e.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = Utils.getSelectedFile(project);
        if (file == null) {
            return;
        }
        if (isGraphQl(file)) {
            Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
            if (projects.isEmpty()) {
                MsgUtils.error(project, OpenApiBundle.message("openapi.non.project.file", name), false);
                return;
            }
            actionPerformedForGraphQl(project, file);
        } else {
            super.actionPerformed(e);
        }
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        return true;
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        if (auditService.isAuditAlreadyInProgress(file)) {
            MsgUtils.notifyInfo(project, "Audit API of " + file.getPath() + " is in progress");
            return;
        }
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
        Credentials.Type type = Credentials.getCredentialsType();
        if (type != null) {
            auditService.actionPerformed(project, file, type);
        } else {
            Credentials.configureCredentials(project, new WizardCallback() {
                @Override
                public void complete() {
                    auditService.actionPerformed(project, file, Credentials.getCredentialsType());
                }
            });
        }
    }
    
    private void actionPerformedForGraphQl(@NotNull Project project, @NotNull VirtualFile file) {
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