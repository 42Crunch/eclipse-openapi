package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.services.ASTService;

public class TreeDocumentListener extends DocumentListener {

    private final Project project;
    private final ASTService astService;
    private final FileDocumentManager fileDocumentManager;

    public TreeDocumentListener(@NotNull Project project) {
        this.project = project;
        astService = ASTService.getInstance(project);
        fileDocumentManager = FileDocumentManager.getInstance();
    }

    @Override
    public void beforeDocumentChange(@NotNull DocumentEvent event) {
    }

    @Override
    public void documentChanged(@NotNull DocumentEvent event) {
        VirtualFile file = fileDocumentManager.getFile(event.getDocument());
        if (file != null) {
            astService.runAsyncTask(project, AsyncTaskType.DOCUMENT_CHANGED, file);
        }
    }
}
