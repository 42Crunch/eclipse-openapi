package com.xliic.core.editor;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.fileEditor.OpenFileDescriptor;

public class CaretModel {

    private final Editor editor;

    public CaretModel(@NotNull Editor editor) {
        this.editor = editor;
    }

    @NotNull
    public Caret getCurrentCaret() {
        return new Caret(editor);
    }

    @NotNull
    public Caret getPrimaryCaret() {
        return getCurrentCaret();
    }

    @NotNull
    public LogicalPosition getLogicalPosition() {
        return getCurrentCaret().getLogicalPosition();
    }

    public void moveToOffset(int offset) {
        new OpenFileDescriptor(editor.getProject(), editor.getVirtualFile(), offset, 0).navigate(false);
    }

    public void moveToOffset(int offset, int length, boolean requestFocus) {
        new OpenFileDescriptor(editor.getProject(), editor.getVirtualFile(), offset, length).navigate(requestFocus);
    }
}
