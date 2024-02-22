package com.xliic.openapi.actions.internal;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.module.Module;
import com.xliic.core.module.ModuleManager;
import com.xliic.core.module.ModuleRootManager;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.GitService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class GetIDEInfoAction extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(event.getProject() != null);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        StringBuilder builder = new StringBuilder();
        builder.append("OS: ").append(Utils.getOs()).append("\n");
        builder.append("OS Arch: ").append(Utils.getOsArch()).append("\n");
        for (Module module : ModuleManager.getInstance(project).getModules()) {
            builder.append("Module [").append(module.getName()).append("]\n");
            VirtualFile[] roots = ModuleRootManager.getInstance(module).getContentRoots();
            for (VirtualFile root : roots) {
                builder.append(root.getPath()).append("\n");
            }
        }
        GitService gitService = GitService.getInstance(project);
        gitService.refresh();
        String status = gitService.getStringStatus();
        builder.append(status);
        MsgUtils.info(project, builder.toString(), true);
    }
}
