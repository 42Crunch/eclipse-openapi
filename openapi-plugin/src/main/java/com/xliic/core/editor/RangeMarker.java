package com.xliic.core.editor;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.Position;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.TextRange;

public class RangeMarker {

    @Nullable
    private final DocumentImpl document;

    @NotNull
    private final Position position;

    public RangeMarker(@NotNull Position position) throws BadLocationException {
        this.document = null;
        this.position = position;
    }

    public RangeMarker(@NotNull Document document, @NotNull Position position) throws BadLocationException {
        this.document = (DocumentImpl) document;
        this.position = position;
        if (document != null) {
            this.document.addPosition(position);
        }
    }

    public int getStartOffset() {
        return position.offset;
    }

    public int getEndOffset() {
        return position.offset + position.length;
    }

    public void dispose() {
        if (document != null) {
            document.removePosition(position);
        }
        position.delete();
    }

    public boolean isValid() {
        return !position.isDeleted();
    }
    
    @NotNull
    public TextRange getTextRange() {
        return new TextRange(this.getStartOffset(), this.getEndOffset());
    }
}
