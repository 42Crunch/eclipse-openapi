package com.xliic.idea.editor;

import org.eclipse.jface.text.ITextSelection;
import org.jetbrains.annotations.NotNull;

public class Caret {

	private final ITextSelection selection;

	public Caret(@NotNull ITextSelection selection) {
		this.selection = selection;
	}

	public int getOffset() {
		return selection.getOffset();
	}
}
