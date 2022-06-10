package com.xliic.core.editor;

import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

public class Caret {

	private final Editor editor;
	private final ITextSelection selection;

	public Caret(@NotNull Editor editor) {
		this.editor = editor;	
		ITextEditor textEditor = editor.getTextEditor();
		ISelectionProvider provider = textEditor.getSelectionProvider();
		selection = (ITextSelection) provider.getSelection();
	}

	public int getOffset() {
		return selection.getOffset();
	}

	public int getLength() {
		return selection.getLength();
	}
	
	@NotNull
	public LogicalPosition getLogicalPosition() {
		return editor.offsetToLogicalPosition(getOffset());
	}
	
	public Editor getEditor() {
		return editor;
	}
	
	public void removeSelection() {}
}
