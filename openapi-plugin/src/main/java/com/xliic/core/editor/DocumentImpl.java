package com.xliic.core.editor;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.Position;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;

public class DocumentImpl implements Document {

	private static final String CRLF = "\r\n";

	@NotNull
	private final IDocument document;

	public DocumentImpl(@NotNull IDocument document) {
		this.document = document;
	}

	@Override
	public int hashCode() {
		return document.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DocumentImpl other = (DocumentImpl) obj;
		return document.equals(other.document);
	}

	public void addPosition(@NotNull Position position) throws BadLocationException {
		document.addPosition(position);
	}
	
	public void removePosition(@NotNull Position position) {
		document.removePosition(position);
	}
	
	@Override
	public String getText() {
		return document.get();
	}

	@Override
	@NotNull
	public String getText(@NotNull TextRange range) {
		return range.substring(getText());
	}

	@Override
	public void setReadOnly(boolean isReadOnly) {
		VirtualFile file = FileDocumentManager.getInstance().getFile(this);
		if (file != null) {
			file.setReadOnly(true);
		}
	}

	@Override
	public int getTextLength() {
		return document.getLength();
	}

	@Override
	public int getLineOffset(int line) {
		try {
			return document.getLineOffset(line);
		} catch (BadLocationException e) {
			return -1;
		}
	}

	@Override
	public int getLineNumber(int offset) {
		try {
			return document.getLineOfOffset(offset);
		} catch (BadLocationException e) {
			return -1;
		}
	}

	@Override
	public int getLineStartOffset(int lineNumber) {
		try {
			return document.getLineInformation(lineNumber).getOffset();
		} catch (BadLocationException e) {
			return -1;
		}
	}

	@Override
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

	@Override
	public void addDocumentListener(@NotNull DocumentListener listener) {
		document.addDocumentListener(listener);
	}

	@Override
	public void removeDocumentListener(@NotNull DocumentListener listener) {
		document.removeDocumentListener(listener);
	}

	@Override
	public RangeMarker createRangeMarker(int startOffset, int endOffset) {
		try {
			return new RangeMarker(this, new Position(startOffset, endOffset - startOffset));
		} catch (BadLocationException e) {
			return null;
		}
	}

	@Override
	public RangeMarker createRangeMarker(@NotNull TextRange textRange) {
		return createRangeMarker(textRange.getMyStartOffset(), textRange.getMyEndOffset());
	}

	@Override
	public void insertString(int offset, @NotNull CharSequence s) {
		try {
			document.replace(offset, 0, wrapText(s.toString()));
		} catch (BadLocationException e) {
		}
	}

	@Override
	public void deleteString(int startOffset, int endOffset) {
		try {
			document.replace(startOffset, endOffset - startOffset, "");
		} catch (BadLocationException e) {
		}
	}

	@Override
	public void replaceString(int startOffset, int endOffset, @NotNull CharSequence s) {
		try {
			document.replace(startOffset, endOffset - startOffset, wrapText(s.toString()));
		} catch (BadLocationException e) {
		}
	}

	@Override
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
