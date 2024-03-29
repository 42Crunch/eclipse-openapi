package com.xliic.core.editor.event;

import org.eclipse.jface.text.IDocumentListener;
import org.jetbrains.annotations.NotNull;

public abstract class DocumentListener implements IDocumentListener {

    @Override
    public void documentAboutToBeChanged(org.eclipse.jface.text.DocumentEvent event) {
    }

    @Override
    public void documentChanged(org.eclipse.jface.text.DocumentEvent event) {
        documentChanged(new DocumentEvent(event.getDocument(), event.getOffset(), event.getLength()));
    }

    public abstract void beforeDocumentChange(@NotNull DocumentEvent event);

    public abstract void documentChanged(@NotNull DocumentEvent event);
}
