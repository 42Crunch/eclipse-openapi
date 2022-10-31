package com.xliic.core.editor;

import org.eclipse.jface.text.BadLocationException;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.util.TextRange;

public interface Document {

    String getText();

    @NotNull
    String getText(@NotNull TextRange range);

    String getText(int offset, int length) throws BadLocationException;

    char getChar(int offset) throws BadLocationException;

    void setReadOnly(boolean isReadOnly);

    int getTextLength();

    int getLineOffset(int line);

    int getLineNumber(int offset);

    int getLineStartOffset(int lineNumber);

    int getLineEndOffset(int lineNumber);

    void addDocumentListener(@NotNull DocumentListener listener);

    void removeDocumentListener(@NotNull DocumentListener listener);

    RangeMarker createRangeMarker(int startOffset, int endOffset);

    RangeMarker createRangeMarker(@NotNull TextRange textRange);

    void insertString(int offset, @NotNull CharSequence s);

    void deleteString(int startOffset, int endOffset);

    void replaceString(int startOffset, int endOffset, @NotNull CharSequence s);

    boolean hasCrLfEnding();
}
