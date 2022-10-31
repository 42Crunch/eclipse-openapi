package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.EditorFactory;
import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.PlaceHolderService;

public class PlaceHolderDocumentListener extends DocumentListener {

    private final Project project;
    private boolean mute;

    public PlaceHolderDocumentListener(@NotNull Project project) {
        this.project = project;
    }

    public void setMute(boolean mute) {
        this.mute = mute;
    }

    @Override
    public void beforeDocumentChange(@NotNull DocumentEvent event) {
    }

    @Override
    public void documentChanged(@NotNull DocumentEvent event) {
        if (!mute) {
            PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
            Editor[] editors = EditorFactory.getInstance().getEditors(event.getDocument(), project);
            for (Editor editor : editors) {
                placeHolderService.documentChanged(editor, event.getOffset());
            }
        }
    }
}
