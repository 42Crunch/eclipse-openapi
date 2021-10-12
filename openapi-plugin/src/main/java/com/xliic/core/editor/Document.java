package com.xliic.core.editor;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.Position;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.util.TextRange;

public class Document {

	private static final String CRLF = "\r\n";

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

	public IDocument getIDocument() {
		return document;
	}

	public String getText() {
		return document.get();
	}

	@NotNull
	public String getText(@NotNull TextRange range) {
		return range.substring(this.getText());
	}

	public int getTextLength() {
		return document.getLength();
	}

	public int getLineOffset(int line) {
		try {
			return document.getLineOffset(line);
		} catch (BadLocationException e) {
			return -1;
		}
	}

	public int getLineNumber(int offset) {
		try {
			return document.getLineOfOffset(offset);
		} catch (BadLocationException e) {
			return -1;
		}
	}

	public int getLineStartOffset(int lineNumber) {
		try {
			return document.getLineInformation(lineNumber).getOffset();
		} catch (BadLocationException e) {
			return -1;
		}
	}

	public int getLineEndOffset(int lineNumber) {
		try {
			IRegion region = document.getLineInformation(lineNumber);
			int offset = region.getOffset() + region.getLength();
			if (CRLF.equals(document.getLineDelimiter(lineNumber))) {
				return offset + 1; // add invisible \r for consistency
			}
			return offset;
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

	public RangeMarker createRangeMarker(int startOffset, int endOffset) {
		try {
			return new RangeMarker(this, new Position(startOffset, endOffset - startOffset));
		} catch (BadLocationException e) {
			return null;
		}
	}

	public RangeMarker createRangeMarker(@NotNull TextRange textRange) {
		return createRangeMarker(textRange.getMyStartOffset(), textRange.getMyEndOffset());
	}

	public void insertString(int offset, @NotNull CharSequence s) {
		try {
			document.replace(offset, 0, wrapText(s.toString()));
		} catch (BadLocationException e) {
		}
	}

	public void deleteString(int startOffset, int endOffset) {
		try {
			document.replace(startOffset, endOffset - startOffset, "");
		} catch (BadLocationException e) {
		}
	}

	public void replaceString(int startOffset, int endOffset, @NotNull CharSequence s) {
		try {
			document.replace(startOffset, endOffset - startOffset, wrapText(s.toString()));
		} catch (BadLocationException e) {
		}
	}

	public boolean hasCrLfEnding() {
		try {
			return CRLF.equals(document.getLineDelimiter(0));
		} catch (BadLocationException e) {
		}
		return false;
	}

	private String wrapText(String text) {
		try {
			if (CRLF.equals(document.getLineDelimiter(0))) {
				return text.replace("\n", CRLF);
			}
		} catch (BadLocationException e) {
		}
		return text;
	}
}
