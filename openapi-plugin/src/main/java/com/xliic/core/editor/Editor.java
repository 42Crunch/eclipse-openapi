package com.xliic.core.editor;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.utils.EditorUtil;

public class Editor {

	private final Project project;
	private final IFileEditorInput input;

	public Editor(@NotNull Project project) {
		this(project, null);
	}

	public Editor(@NotNull Project project, IFileEditorInput input) {
		this.project = project;
		this.input = input;
	}

	public IFile getIFile() {
		return input.getFile();
	}

	public Document getDocument() {
		return new Document(EditorUtil.getDocument(input));
	}

	public Project getProject() {
		return project;
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
}
