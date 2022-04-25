package com.xliic.core.editor;

import java.util.Objects;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.ITextOperationTarget;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.EditorMouseListener;
import com.xliic.core.project.Project;
import com.xliic.openapi.utils.EditorUtil;

public class Editor {

	private final Project project;
	private final IFileEditorInput input;

	public Editor(@NotNull Project project, IFileEditorInput input) {
		this.project = project;
		this.input = input;
	}

	public IFile getIFile() {
		return input.getFile();
	}

	public Project getProject() {
		return project;
	}

	public Document getDocument() {
		return new Document(EditorUtil.getDocument(input));
	}

	public IFileEditorInput getIFileEditorInput() {
		return input;
	}
	
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if ((o == null) || (getClass() != o.getClass())) return false;
        Editor editor = (Editor) o;
        return Objects.equals(input, editor.getIFileEditorInput());
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
		IWorkbench workbench = PlatformUI.getWorkbench();
		for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
			for (IWorkbenchPage page : window.getPages()) {
				IEditorPart part = page.findEditor(input);
				if (part instanceof ITextEditor) {
					return (ITextEditor) part;
				}
			}
		}
		return null;
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
		return editor.getDocumentProvider().getAnnotationModel(editor.getEditorInput());
	}
	
	public ISourceViewer getSourceViewer() {
		IEditorPart editorPart = getTextEditor();
		if (editorPart instanceof IEditorPart) {
			return (ISourceViewer) editorPart.getAdapter(ITextOperationTarget.class);
		}
		return null;
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
