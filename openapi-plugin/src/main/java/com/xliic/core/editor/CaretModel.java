package com.xliic.core.editor;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.utils.OpenAPIUtils;

public class CaretModel {

	private final Editor editor;

	public CaretModel(@NotNull Editor editor) {
		this.editor = editor;
	}

	@NotNull
	public Caret getCurrentCaret() {
		return new Caret(editor);
	}
	
    @NotNull
    public Caret getPrimaryCaret() {
    	return getCurrentCaret();
    }

	@NotNull
	public LogicalPosition getLogicalPosition() {
		return getCurrentCaret().getLogicalPosition();
	}

	public void moveToOffset(int offset) {
		OpenAPIUtils.gotoFile(editor.getIFile(), offset, 0);
	}
}
