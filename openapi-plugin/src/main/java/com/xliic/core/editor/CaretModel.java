package com.xliic.core.editor;

import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.utils.OpenAPIUtils;

public class CaretModel {

	private final ITextEditor editor;
	private final IFileEditorInput input;

	public CaretModel(@NotNull ITextEditor editor, @NotNull IFileEditorInput input) {
		this.editor = editor;
		this.input = input;
	}

	@NotNull
	public Caret getCurrentCaret() {
		ISelectionProvider provider = editor.getSelectionProvider();
		return new Caret((ITextSelection) provider.getSelection());
	}

	@NotNull
	public LogicalPosition getLogicalPosition() {
		return new LogicalPosition(getCurrentCaret().getOffset());
	}

	public void moveToOffset(int offset) {
		OpenAPIUtils.gotoFile(input.getFile(), offset, 0);
	}
}
