package com.xliic.core.editor;

import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.utils.OpenAPIUtils;

public class CaretModel {

	private final Editor editor;

	public CaretModel(@NotNull Editor editor) {
		this.editor = editor;
	}

	@NotNull
	public Caret getCurrentCaret() {
		ITextEditor textEditor = editor.getTextEditor();
		ISelectionProvider provider = textEditor.getSelectionProvider();
		return new Caret((ITextSelection) provider.getSelection());
	}

	@NotNull
	public LogicalPosition getLogicalPosition() {
		return editor.offsetToLogicalPosition(getCurrentCaret().getOffset());
	}

	public void moveToOffset(int offset) {
		OpenAPIUtils.gotoFile(editor.getIFile(), offset, 0);
	}
}
