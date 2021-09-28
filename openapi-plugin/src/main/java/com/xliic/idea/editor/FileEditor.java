package com.xliic.idea.editor;

import org.eclipse.ui.IFileEditorInput;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.file.VirtualFile;

public class FileEditor {

	private IFileEditorInput input;

	public FileEditor(IFileEditorInput input) {
		this.input = input;
	}

	@Nullable
	public VirtualFile getFile() {
		return new VirtualFile(input.getFile());
	}
}
