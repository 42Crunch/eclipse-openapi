package com.xliic.idea.document;

import org.eclipse.jface.text.IDocument;
import org.jetbrains.annotations.NotNull;

public class Document {

	private final IDocument document;

	public Document(IDocument document) {
		this.document = document;
	}

	public boolean equalsToIDocument(IDocument document) {
		return this.document.equals(document);
	}

	public String getText() {
		return document.get();
	}

	public void addDocumentListener(@NotNull DocumentListener listener) {
		document.addDocumentListener(listener);
	}

	public void removeDocumentListener(@NotNull DocumentListener listener) {
		document.removeDocumentListener(listener);
	}
}
