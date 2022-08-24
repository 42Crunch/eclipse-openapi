package com.xliic.core.editor.event;

import java.util.Objects;

import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.events.MouseListener;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.EditorFactory;
import com.xliic.core.project.Project;

public class EditorMouseListener implements MouseListener {

    @Override
    public void mouseUp(MouseEvent e) {
    }

    @Override
    public void mouseDown(MouseEvent e) {
        Editor myEditor = null;
        StyledText text = (StyledText) e.widget;
        Editor[] editors = EditorFactory.getInstance().getEditors(Project.getInstance());
        for (Editor editor : editors) {
            if (Objects.equals(editor.getStyledText(), text)) {
                myEditor = editor;
            }
        }
        if (myEditor != null) {
            int offset = text.getSelection().x;
            mouseClicked(new EditorMouseEvent(myEditor, offset));
        }
    }

    @Override
    public void mouseDoubleClick(MouseEvent e) {
    }

    public void mousePressed(@NotNull EditorMouseEvent event) {
    }

    public void mouseClicked(@NotNull EditorMouseEvent event) {
    }

    public void mouseReleased(@NotNull EditorMouseEvent event) {
    }

    public void mouseEntered(@NotNull EditorMouseEvent event) {
    }

    public void mouseExited(@NotNull EditorMouseEvent event) {
    }
}
