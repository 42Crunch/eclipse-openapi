package com.xliic.core.editor;

import java.io.IOException;
import java.nio.file.Files;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.Position;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;

public class ExtDocument implements Document {

    @NotNull
    private final VirtualFile file;
    private volatile String text;

    public ExtDocument(@NotNull VirtualFile file) {
        this.file = file;
        text = null;
    }

    @Override
    public String getText() {
        if (text == null) {
            try {
                text = Files.readString(file.getFile().toPath());
                return text;
            } catch (IOException e) {
            }
        } else {
            return text;
        }
        return null;
    }

    @Override
    @NotNull
    public String getText(@NotNull TextRange range) {
        return range.substring(getText());
    }

    @Override
    public void setReadOnly(boolean isReadOnly) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int getTextLength() {
        return getText().length();
    }

    @Override
    public int getLineOffset(int line) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int getLineNumber(int offset) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int getLineStartOffset(int lineNumber) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int getLineEndOffset(int lineNumber) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void addDocumentListener(@NotNull DocumentListener listener) {}

    @Override
    public void removeDocumentListener(@NotNull DocumentListener listener) {}

    @Override
    public RangeMarker createRangeMarker(int startOffset, int endOffset) {
        try {
            return new RangeMarker(new Position(startOffset, endOffset - startOffset));
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
        throw new UnsupportedOperationException();
    }

    @Override
    public void deleteString(int startOffset, int endOffset) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void replaceString(int startOffset, int endOffset, @NotNull CharSequence s) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean hasCrLfEnding() {
        throw new UnsupportedOperationException();
    }
}
