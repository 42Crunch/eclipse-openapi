package com.xliic.core.editor;

public class LogicalPosition {

    public final int line;
    public final int column;

    public LogicalPosition(int line, int column) {
        this.line = line;
        this.column = column;
    }

    @Override
    public String toString() {
        return "LogicalPosition [line=" + line + ", column=" + column + "]";
    }
}
