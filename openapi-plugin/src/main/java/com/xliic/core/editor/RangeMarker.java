package com.xliic.core.editor;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.Position;

public class RangeMarker {

	private final Document document;
	private final Position position;

	public RangeMarker(Document document, Position position) throws BadLocationException {
		this.document = document;
		this.position = position;
		document.getIDocument().addPosition(position);
	}

	public int getStartOffset() {
		return position.offset;
	}

	public int getEndOffset() {
		return position.offset + position.length;
	}

	public void dispose() {
		document.getIDocument().removePosition(position);
		position.delete();
	}

	public boolean isValid() {
		return !position.isDeleted();
	}
}
