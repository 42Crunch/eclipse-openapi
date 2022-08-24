package com.xliic.core.util;

import org.jetbrains.annotations.NotNull;

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

    @NotNull
    public static TextRange create(int startOffset, int endOffset) {
        return new TextRange(startOffset, endOffset);
    }

    @NotNull
    public String substring(@NotNull String str) {
        return str.substring(myStartOffset, myEndOffset);
    }
}
