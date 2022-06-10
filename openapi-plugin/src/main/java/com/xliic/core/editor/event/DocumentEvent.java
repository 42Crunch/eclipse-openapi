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

	public DocumentEvent(IDocument document) {
		this.document = document;
		this.project = Project.getInstance();
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
}
