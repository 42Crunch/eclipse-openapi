package com.xliic.openapi.listeners;

import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.PlatformService;
import org.jetbrains.annotations.NotNull;

public class PlatformDocumentListener extends DocumentListener {

    private final Project project;

    public PlatformDocumentListener(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void beforeDocumentChange(@NotNull DocumentEvent event) {
    }

    @Override
    public void documentChanged(@NotNull DocumentEvent event) {
        VirtualFile file = FileDocumentManager.getInstance().getFile(event.getDocument());
        if (file != null && !event.isWholeTextReplaced()) {
            PlatformService platformService = PlatformService.getInstance(project);
            platformService.setFileIsModified(file, true);
        }
    }
}
