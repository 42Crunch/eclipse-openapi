package com.xliic.idea.document;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.jetbrains.annotations.NotNull;

public class Document {

	private final IDocument document;

	private volatile int hashCode;

	public Document(IDocument document) {
		this.document = document;
	}

	@Override
	public int hashCode() {
		int result = hashCode;
		if (result == 0) {
			final int prime = 31;
			result = 1;
			result = prime * result + ((document == null) ? 0 : document.hashCode());
			hashCode = result;
		}
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Document other = (Document) obj;
		if (document == null) {
			if (other.document != null)
				return false;
		} else if (!document.equals(other.document))
			return false;
		return true;
	}

	public boolean equalsToIDocument(IDocument document) {
		return this.document.equals(document);
	}

	public String getText() {
		return document.get();
	}

	public int getLineOffset(int line) {
		try {
			return document.getLineOffset(line);
		} catch (BadLocationException e) {
			return -1;
		}
	}

	public void addDocumentListener(@NotNull DocumentListener listener) {
		document.addDocumentListener(listener);
	}

	public void removeDocumentListener(@NotNull DocumentListener listener) {
		document.removeDocumentListener(listener);
	}
}
