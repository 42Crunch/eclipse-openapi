package com.xliic.openapi.actions.internal;

import java.io.File;
import java.nio.file.Files;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.utils.Utils;

public class GenerateLargeScanReportAction extends AnAction {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project != null) {
            FileChooserDescriptor descriptor = new FileChooserDescriptor(true, false, false, false, false, false)
            		.withExtensionFilter("*.json");
            VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(
                    descriptor, project, null).choose(null, VirtualFile.EMPTY_ARRAY);
            if (choose.length == 1) {
                VirtualFile file = choose[0];
                if (Utils.getFileType(file).equals(OpenApiFileType.Json)) {
                    final String text = getTextFromFileDirectly(file);
                    if (!StringUtils.isEmpty(text)) {
                        String alias = ScanConfigUtils.getAlias(file.getPath());
                        ScanService.getInstance(project).generateLargeScanReport("LargeScanReportDemo", alias, file.toNioPath());
                    }
                }
            }
        }
    }

    // For chosen virtual file its document.getText() works only if the file has text length <= 2268758
    private static String getTextFromFileDirectly(@NotNull VirtualFile file) {
        try {
            return Files.readString(new File(file.getPath()).toPath());
        } catch (Exception ignored) {
        }
        return null;
    }
}
