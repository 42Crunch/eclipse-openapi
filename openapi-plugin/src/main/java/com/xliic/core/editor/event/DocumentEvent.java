package com.xliic.core.editor.event;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;

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

}
