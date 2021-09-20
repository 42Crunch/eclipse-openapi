package com.xliic.idea.editor;

import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.jetbrains.annotations.NotNull;

public class CaretModel {

	private final ISelectionProvider provider;

	public CaretModel(@NotNull ISelectionProvider provider) {
		this.provider = provider;
	}

	@NotNull
	public Caret getCurrentCaret() {
		return new Caret((ITextSelection) provider.getSelection());
	}
}
