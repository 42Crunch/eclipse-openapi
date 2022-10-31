package com.xliic.openapi.listeners;

import static com.xliic.openapi.services.BundleService.ROOT_FILE_NAME_KEY;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;

public class BundleDocumentListener extends DocumentListener {

    private final Project project;
    private final ASTService astService;
    private final BundleService bundleService;
    private final FileDocumentManager fileDocumentManager;
    private final Map<String, Object> asyncTaskData = new HashMap<>();

    public BundleDocumentListener(@NotNull Project project, @NotNull String rootFileName) {
        this.project = project;
        asyncTaskData.put(ROOT_FILE_NAME_KEY, rootFileName);
        astService = ASTService.getInstance(project);
        bundleService = BundleService.getInstance(project);
        fileDocumentManager = FileDocumentManager.getInstance();
    }

    @Override
    public void beforeDocumentChange(@NotNull DocumentEvent event) {
    }

    @Override
    public void documentChanged(@NotNull DocumentEvent event) {
        VirtualFile file = fileDocumentManager.getFile(event.getDocument());
        if (file != null) {
            bundleService.runAsyncTask(project, AsyncTaskType.DOCUMENT_CHANGED, file, asyncTaskData);
            // Changed file is a part of the bundle and may not have OAS
            // Thus AST service does not know about it, just inform here
            astService.runAsyncTask(project, AsyncTaskType.DOCUMENT_CHANGED, file);
        }
    }
}
