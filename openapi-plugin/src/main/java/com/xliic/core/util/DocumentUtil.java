package com.xliic.core.util;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;

public class DocumentUtil {

    @NotNull
    public static TextRange getLineTextRange(@NotNull Document document, int line) {
        return TextRange.create(document.getLineStartOffset(line), document.getLineEndOffset(line));
    }

    public static int getLineStartOffset(int offset, @NotNull Document document) {
        if (offset >= 0 && offset <= document.getTextLength()) {
            int lineNumber = document.getLineNumber(offset);
            return document.getLineStartOffset(lineNumber);
        } else {
            return offset;
        }
    }
}
