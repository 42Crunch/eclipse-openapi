package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerEvent;
import com.xliic.core.fileEditor.FileEditorManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.PlaceHolderService;

import static com.xliic.openapi.OpenApiUtils.isOpenAPIFileType;
import static com.xliic.openapi.OpenApiUtils.isTempFile;

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
        if (isOpenAPIFileType(file)) {
            if (isTempFile(file)) {
                Document document = FileDocumentManager.getInstance().getDocument(file);
                if (document != null) {
                    document.setReadOnly(true);
                }
            }
        }
    }

    @Override
    public void selectionChanged(@NotNull FileEditorManagerEvent event) {
        placeHolderService.closePopup();
        if (event.getNewFile() == null) {
            astService.runAsyncTask(project, AsyncTaskType.ALL_FILES_CLOSED, event.getOldFile());
        }
        else {
            astService.runAsyncTask(project, AsyncTaskType.SELECTION_CHANGED, event.getNewFile());
        }
    }

    @Override
    public void fileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {}
}
