package com.xliic.core.editor;

import java.util.Objects;

import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.EditorMouseListener;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class Editor {

    private final Project project;
    private final IEditorInput input;

    public Editor(@NotNull Project project, IEditorInput input) {
        this.project = project;
        this.input = input;
    }

    public VirtualFile getVirtualFile() {
        return EclipseUtil.getVirtualFile(input);
    }

    public Project getProject() {
        return project;
    }

    public Document getDocument() {
        return new DocumentImpl(EclipseUtil.getDocument(input));
    }

    public IEditorInput getEditorInput() {
        return input;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if ((o == null) || (getClass() != o.getClass()))
            return false;
        Editor editor = (Editor) o;
        return Objects.equals(input, editor.input);
    }

    @Override
    public int hashCode() {
        return input.hashCode();
    }

    public boolean isDirty() {
        ITextEditor editor = getTextEditor();
        return (editor == null) ? true : editor.isDirty();
    }

    public CaretModel getCaretModel() {
        ITextEditor editor = getTextEditor();
        return (editor == null) ? null : new CaretModel(this);
    }

    public int logicalPositionToOffset(@NotNull LogicalPosition position) {
        Document document = getDocument();
        return document.getLineOffset(position.line) + position.column - 1;
    }

    public Shell getShell() {
        ITextEditor editor = getTextEditor();
        return (editor == null) ? null : editor.getSite().getShell();
    }

    @NotNull
    public ScrollingModel getScrollingModel() {
        return new ScrollingModel();
    }

    public ITextEditor getTextEditor() {
        return EclipseUtil.getTextEditor(input);
    }

    public LogicalPosition offsetToLogicalPosition(int offset) {
        Document document = getDocument();
        int line = document.getLineNumber(offset);
        int column = offset - document.getLineOffset(line);
        if (offset >= 0) {
            return new LogicalPosition(line, column);
        }
        return null;
    }

    public IAnnotationModel getModel() {
        ITextEditor editor = getTextEditor();
        return editor == null ? null : editor.getDocumentProvider().getAnnotationModel(editor.getEditorInput());
    }

    public ISourceViewer getSourceViewer() {
        return EclipseUtil.getSourceViewer(input);
    }

    public StyledText getStyledText() {
        ISourceViewer viewer = getSourceViewer();
        if (viewer != null) {
            return viewer.getTextWidget();
        }
        return null;
    }

    public void addTraverseListener(@NotNull Listener listener) {
        StyledText widget = getStyledText();
        if (widget != null) {
            widget.addListener(SWT.Traverse, listener);
        }
    }

    public void removeTraverseListener(@NotNull Listener listener) {
        StyledText widget = getStyledText();
        if (widget != null) {
            widget.removeListener(SWT.Traverse, listener);
        }
    }

    public void addEditorMouseListener(@NotNull EditorMouseListener listener) {
        StyledText widget = getStyledText();
        if (widget != null) {
            widget.addMouseListener(listener);
        }
    }

    public void removeEditorMouseListener(@NotNull EditorMouseListener listener) {
        StyledText widget = getStyledText();
        if (widget != null) {
            widget.addMouseListener(listener);
        }
    }
}
