package com.xliic.core.editor.event;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.CaretModel;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.EditorFactory;
import com.xliic.core.project.Project;

import org.eclipse.jface.text.IDocument;

public class DocumentEvent {
	
	private final IDocument document;
	
	public DocumentEvent(IDocument document) {
		this.document = document;
	}
	
    @NotNull
    public Document getDocument() {
    	return new Document(document);
    }
    
    public int getOffset() {
        Editor[] editors = EditorFactory.getInstance().getEditors(getDocument(), new Project()); // todo
        for (Editor editor : editors) {
            CaretModel model = editor.getCaretModel();
            if (model != null) {
            	return model.getCurrentCaret().getOffset();
            }
        }
        return -1;
    }
}
