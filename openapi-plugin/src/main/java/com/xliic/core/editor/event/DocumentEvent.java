package com.xliic.core.editor.event;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.CaretModel;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.DocumentImpl;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.EditorFactory;
import com.xliic.core.project.Project;

import org.eclipse.jface.text.IDocument;

public class DocumentEvent {

    private final IDocument document;
    private final Project project;
    private final int offset;
    private final int length;

    public DocumentEvent(IDocument document, int offset, int length) {
        this.document = document;
        this.project = Project.getInstance();
        this.offset = offset;
        this.length = length;
    }

    @NotNull
    public Document getDocument() {
        return new DocumentImpl(document);
    }

    public int getOffset() {
        Editor[] editors = EditorFactory.getInstance().getEditors(getDocument(), project);
        for (Editor editor : editors) {
            CaretModel model = editor.getCaretModel();
            if (model != null) {
                return model.getCurrentCaret().getOffset();
            }
        }
        return -1;
    }

    public boolean isWholeTextReplaced() {
        return (offset == 0) && (document.getLength() == length);
    }
}
