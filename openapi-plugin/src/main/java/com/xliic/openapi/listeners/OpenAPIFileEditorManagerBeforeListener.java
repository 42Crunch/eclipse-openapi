package com.xliic.openapi.listeners;

import static com.xliic.core.util.ObjectUtils.tryCast;
import static com.xliic.openapi.utils.TempFileUtils.isPlatformFile;
import static com.xliic.openapi.utils.TempFileUtils.isPluginTempDeadFile;
import static com.xliic.openapi.utils.Utils.getFileType;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerListener;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.services.PlatformService;

// This class is responsible to handle open/close file system events, update data service and panels
// Do not subscribe to the events anywhere outside the class as it may lead to execution inconsistency
public class OpenAPIFileEditorManagerBeforeListener implements FileEditorManagerListener.Before {

    // Idea can't guarantee the order of Open/Close/Selection events,
    // so we have to use before events as they always come first
    @Override
    public void beforeFileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file) {
        if (getFileType(file) == OpenApiFileType.Unsupported) {
            return;
        }
        final Project project = source.getProject();
        if (isPluginTempDeadFile(file)) {
            return;
        }
        if (FileEditorManager.getInstance(project).getAllEditors(file).length > 1) {
            // File already opened in another editor(s)
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        astService.runAsyncTask(project, AsyncTaskType.BEFORE_FILE_OPENED, file);

        if (isPlatformFile(file)) {
            PlatformService platformService = PlatformService.getInstance(project);
            platformService.addListener(file);
        }
        BundleService bundleService = BundleService.getInstance(project);
        bundleService.runAsyncTask(project, AsyncTaskType.BEFORE_FILE_OPENED, file);
    }

    @Override
    public void beforeFileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {
        if (getFileType(file) == OpenApiFileType.Unsupported) {
            return;
        }
        if (isPluginTempDeadFile(file)) {
            return;
        }
        final Project project = source.getProject();
        if (FileEditorManager.getInstance(project).getAllEditors(file).length > 1) {
            // File also opened in another editor(s)
            return;
        }

        ASTService astService = ASTService.getInstance(project);
        astService.runAsyncTask(project, AsyncTaskType.BEFORE_FILE_CLOSED, file);
        BundleService bundleService = BundleService.getInstance(project);
        bundleService.runAsyncTask(project, AsyncTaskType.BEFORE_FILE_CLOSED, file);

        FileEditor[] fileEditors = FileEditorManager.getInstance(project).getAllEditors(file);
        if (fileEditors.length > 0) {
            TextEditor textEditor = tryCast(fileEditors[0], TextEditor.class);
            if (textEditor != null) {
                PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
                placeHolderService.dispose(textEditor.getEditor());
            }
        }

        if (isPlatformFile(file)) {
            SwingUtilities.invokeLater(() -> {
                if (!project.isDisposed()) {
                    PlatformService platformService = PlatformService.getInstance(project);
                    if (platformService.isFileDirty(file) && !platformService.isFileReadOnly(file)) {
                        platformService.saveToPlatform(file, false);
                    }
                    platformService.removeListener(file);
                }
            });
        }
    }
}
