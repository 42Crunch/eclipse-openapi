package com.xliic.openapi.listeners;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.event.EditorMouseEvent;
import com.xliic.core.editor.event.EditorMouseEventArea;
import com.xliic.core.editor.event.EditorMouseListener;
import com.xliic.core.editor.markup.RangeHighlighter;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.PlaceHolderService;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class PlaceHolderEditorMouseListener extends EditorMouseListener {

    private final Project project;

    public PlaceHolderEditorMouseListener(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void mouseClicked(@NotNull EditorMouseEvent event) {
        if (event.getArea() == EditorMouseEventArea.EDITING_AREA) {
            int offset = event.getOffset();
            Editor editor = event.getEditor();
            PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
            RangeHighlighter highlighter = placeHolderService.getTriggeredRangeHighlighter(editor, offset);
            if (highlighter != null) {
                List<Object> values = placeHolderService.getValues(editor, highlighter);
                if (!values.isEmpty() && !placeHolderService.hasOpenPopup()) {
                    placeHolderService.show(editor, highlighter, values);
                }
            } else {
                placeHolderService.closePopup();
            }
        }
    }
}
