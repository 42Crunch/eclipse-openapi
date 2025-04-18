package com.xliic.openapi.listeners;

import static com.xliic.openapi.utils.FileUtils.isGraphQl;
import static com.xliic.openapi.utils.TempFileUtils.isExtRefFile;
import static com.xliic.openapi.utils.Utils.isOpenAPIFileType;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerEvent;
import com.xliic.core.fileEditor.FileEditorManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.utils.TempFileUtils;

public class OpenApiFileEditorManagerListener implements FileEditorManagerListener {

    private final Project project;
    private final PlaceHolderService placeHolderService;
    private final ASTService astService;

    public OpenApiFileEditorManagerListener(@NotNull Project project) {
        this.project = project;
        placeHolderService = PlaceHolderService.getInstance(project);
        astService = ASTService.getInstance(project);
    }

    @Override
    public void fileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file) {
        if (TempFileUtils.isPluginTempDeadFile(file)) {
            return;
        }
        if (isOpenAPIFileType(file)) {
            if (isExtRefFile(file) || PlatformService.getInstance(project).isFileReadOnly(file)) {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    document.setReadOnly(true);
                }
            }
        }
    }

    @Override
    public void selectionChanged(@NotNull FileEditorManagerEvent event) {
        VirtualFile file = event.getNewFile();
        if (file != null && TempFileUtils.isPluginTempDeadFile(file)) {
            return;
        }
        placeHolderService.closePopup();
        if (file != null) {
            astService.runAsyncTask(project, AsyncTaskType.SELECTION_CHANGED, file);
        }
    }

    @Override
    public void fileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {
        if (source.getAllEditors().length == 0) {
            astService.runAsyncTask(project, AsyncTaskType.ALL_FILES_CLOSED, file);
        }
        if (isGraphQl(file)) {
            ApplicationManager.getApplication().invokeLater(() -> {
                if (!project.isDisposed()) {
                    AuditService.getInstance(project).removeAuditReport(file.getPath());
                    project.getMessageBus().syncPublisher(FileListener.TOPIC).handleClosedFile(file);
                }
            });
        }
    }
}
