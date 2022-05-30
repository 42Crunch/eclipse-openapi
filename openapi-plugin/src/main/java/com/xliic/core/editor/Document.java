package com.xliic.core.editor;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.util.TextRange;

public interface Document {

	public String getText();

	@NotNull
	public String getText(@NotNull TextRange range);

	public void setReadOnly(boolean isReadOnly);
	  
	public int getTextLength();

	public int getLineOffset(int line);

	public int getLineNumber(int offset);

	public int getLineStartOffset(int lineNumber);

	public int getLineEndOffset(int lineNumber);

	public void addDocumentListener(@NotNull DocumentListener listener);

	public void removeDocumentListener(@NotNull DocumentListener listener);

	public RangeMarker createRangeMarker(int startOffset, int endOffset);

	public RangeMarker createRangeMarker(@NotNull TextRange textRange);

	public void insertString(int offset, @NotNull CharSequence s);

	public void deleteString(int startOffset, int endOffset);

	public void replaceString(int startOffset, int endOffset, @NotNull CharSequence s);

	public boolean hasCrLfEnding();
}
