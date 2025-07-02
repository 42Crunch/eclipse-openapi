package com.xliic.openapi.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.fileChooser.FileSaverDescriptor;
import com.xliic.core.fileChooser.FileSaverDialog;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.vfs.VirtualFileWrapper;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public abstract class ExportReportAction extends AnAction implements DumbAware {

    private static final String NO_OPEN_API_FILE_SELECTED = "No OpenAPI file selected";
    private static final String FILE_SAVE_ERROR = "Failed to save document in file saver";
    private static final String[] FILE_SAVER_EXTENSIONS = { "json" };

    @NotNull
    private final String exportTempDir;
    @NotNull
    private final String exportDescription;
    @NotNull
    private final String noReportError;

    public ExportReportAction(@NotNull String exportTempDir, @NotNull String exportDescription, @NotNull String noReportError) {
        this.exportTempDir = exportTempDir;
        this.exportDescription = exportDescription;
        this.noReportError = noReportError;
    }

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
        VirtualFile myFile = getSelectedFile(project);
        if (myFile == null) {
            event.getPresentation().setEnabled(false);
            return;
        }
        if (!isTempFileSaved(project, myFile)) {
            event.getPresentation().setEnabled(false);
            return;
        }
        event.getPresentation().setEnabled(true);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent event) {
        Project project = event.getProject();
        if (project != null) {
            try {
                VirtualFile myFile = getSelectedFile(project);
                if (myFile == null) {
                    MsgUtils.notifyError(project, NO_OPEN_API_FILE_SELECTED);
                    return;
                }
                if (!isTempFileSaved(project, myFile)) {
                    MsgUtils.notifyError(project, noReportError);
                    return;
                }
                File file = getTempFile(project, myFile);
                if (file == null) {
                    MsgUtils.notifyError(project, noReportError);
                    return;
                }
                VirtualFile tmpFile = LocalFileSystem.getInstance().findFileByIoFile(file);
                if (tmpFile == null) {
                    MsgUtils.notifyError(project, noReportError);
                    return;
                }
                FileSaverDescriptor descriptor = new FileSaverDescriptor("Export", exportDescription, FILE_SAVER_EXTENSIONS);
                FileSaverDialog saveDialog = FileChooserFactory.getInstance().createSaveFileDialog(descriptor, project);
                VirtualFileWrapper wrapper = saveDialog.save(null);
                if (wrapper != null) {
                    VirtualFile dstReportFile = wrapper.getVirtualFile(true);
                    if (dstReportFile != null) {
                        Files.copy(Paths.get(tmpFile.getPath()), Paths.get(dstReportFile.getPath()), StandardCopyOption.REPLACE_EXISTING);
                    } else {
                        MsgUtils.notifyError(project, FILE_SAVE_ERROR);
                    }
                }
            } catch (IOException e) {
                MsgUtils.notifyError(project, e.getMessage());
            }
        }
    }
    
    public @Nullable VirtualFile getSelectedFile(@NotNull Project project) {
        return Utils.getSelectedOpenAPIFile(project);
    }

    public abstract @Nullable File getTempFile(@NotNull Project project, @NotNull VirtualFile selectedFile);

    public abstract boolean isTempFileSaved(@NotNull Project project, @NotNull VirtualFile selectedFile);
}
