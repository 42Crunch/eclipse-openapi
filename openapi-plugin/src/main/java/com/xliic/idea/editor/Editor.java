package com.xliic.idea.editor;

import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.document.Document;
import com.xliic.idea.project.Project;
import com.xliic.openapi.utils.EditorUtil;

public class Editor {

	private final Project project;
	private final IFileEditorInput editor;

	public Editor(@NotNull Project project, @NotNull IFileEditorInput editor) {
		this.project = project;
		this.editor = editor;
	}

	public Document getDocument() {
		return new Document(EditorUtil.getDocument(editor));
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
		return (editor == null) ? null : new CaretModel(editor.getSelectionProvider());
	}

	private ITextEditor getTextEditor() {
		IWorkbench workbench = PlatformUI.getWorkbench();
		for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
			for (IWorkbenchPage page : window.getPages()) {
				IEditorPart part = page.findEditor(editor);
				if (part instanceof ITextEditor) {
					return (ITextEditor) part;
				}
			}
		}
		return null;
	}
}
