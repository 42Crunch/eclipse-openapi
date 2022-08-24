package com.xliic.openapi.quickfix.editor;

public class DocumentIndent {

    private final int indent;
    private final char indentChar;

    public DocumentIndent(int indent, char indentChar) {
        this.indent = indent;
        this.indentChar = indentChar;
    }

    public int getIndent() {
        return indent;
    }

    @Override
    public String toString() {
        return String.valueOf(indentChar).repeat(indent);
    }

    public String toString(int n) {
        return String.valueOf(indentChar).repeat(n);
    }

    public static DocumentIndent defaultInstance() {
        return new DocumentIndent(2, ' ');
    }
}
