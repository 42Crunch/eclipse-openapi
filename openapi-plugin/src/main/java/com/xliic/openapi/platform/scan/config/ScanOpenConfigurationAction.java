package com.xliic.openapi.platform.scan.config;

import java.io.File;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.actionSystem.CommonDataKeys;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.MsgUtils;

public class ScanOpenConfigurationAction extends AnAction implements DumbAware {

    private static final String ERROR = "No scan configuration found for the current document. Please create one first by running a scan.";

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project != null) {
            VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
            if (file != null) {
                ASTService astService = ASTService.getInstance(project);
                if (astService.isKnownOpenAPIFile(file.getPath()) && ScanConfigUtils.hasConfFile(project, file.getPath())) {
                    event.getPresentation().setEnabled(true);
                    return;
                }
            }
        }
        event.getPresentation().setEnabled(false);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project != null) {
            VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
            if (file != null) {
                String scanConfPath = ScanConfigUtils.findScanConfPath(project, file.getPath());
                if (scanConfPath != null) {
                    VirtualFile scanConfFile = LocalFileSystem.getInstance().findFileByIoFile(new File(scanConfPath));
                    if (scanConfFile != null) {
                        new OpenFileDescriptor(project, scanConfFile).navigate(true);
                    } else {
                        MsgUtils.notifyError(project, ERROR);
                    }
                } else {
                    MsgUtils.notifyError(project, ERROR);
                }
            }
        }
    }
}
