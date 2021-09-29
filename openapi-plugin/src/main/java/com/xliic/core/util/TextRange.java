package com.xliic.core.util;

public class TextRange {

	private final int myStartOffset;
	private final int myEndOffset;

	public TextRange(int startOffset, int endOffset) {
		myStartOffset = startOffset;
		myEndOffset = endOffset;
	}

	public int getMyStartOffset() {
		return myStartOffset;
	}

	public int getMyEndOffset() {
		return myEndOffset;
	}

	public boolean containsOffset(int offset) {
		return this.myStartOffset <= offset && offset <= this.myEndOffset;
	}
}
