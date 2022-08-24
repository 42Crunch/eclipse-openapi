package com.xliic.openapi.services.api;

import com.xliic.core.codeInsight.editorActions.enter.EnterHandlerDelegate;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.markup.RangeHighlighter;
import com.xliic.openapi.quickfix.FixItem;
import org.jetbrains.annotations.NotNull;

import java.util.*;

public interface IPlaceHolderService {

    public void register(@NotNull Editor editor, @NotNull FixItem fixItem);

    public List<Object> getValues(Editor editor, RangeHighlighter highlighter);

    public boolean hasOpenPopup();

    public void closePopup();

    public void show(Editor editor, RangeHighlighter highlighter, List<Object> values);

    public EnterHandlerDelegate.Result preprocessEnter(@NotNull Editor editor, int offset);

    public void update(@NotNull Editor editor);

    public void documentChanged(@NotNull Editor editor, int offset);

    public RangeHighlighter getTriggeredRangeHighlighter(Editor editor, int offset);

    public void dispose(Editor editor);
}
