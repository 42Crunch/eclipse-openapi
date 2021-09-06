package com.xliic.idea.document;

import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import org.jetbrains.annotations.NotNull;

public abstract class DocumentAdapter implements DocumentListener {
	
    public DocumentAdapter() {
    }

    public void insertUpdate(@NotNull DocumentEvent e) {
        this.textChanged(e);
    }

    public void removeUpdate(@NotNull DocumentEvent e) {
        this.textChanged(e);
    }

    public void changedUpdate(@NotNull DocumentEvent e) {
        this.textChanged(e);
    }

    protected abstract void textChanged(@NotNull DocumentEvent var1);
}
