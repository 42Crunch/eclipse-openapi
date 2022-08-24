package com.xliic.core.ui;

import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import org.jetbrains.annotations.NotNull;

public abstract class DocumentAdapter implements DocumentListener {

    public DocumentAdapter() {
    }

    @Override
    public void insertUpdate(@NotNull DocumentEvent e) {
        textChanged(e);
    }

    @Override
    public void removeUpdate(@NotNull DocumentEvent e) {
        textChanged(e);
    }

    @Override
    public void changedUpdate(@NotNull DocumentEvent e) {
        textChanged(e);
    }

    protected abstract void textChanged(@NotNull DocumentEvent e);
}
