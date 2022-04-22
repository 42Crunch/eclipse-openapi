package com.xliic.core.fileEditor;

import org.eclipse.ui.IFileEditorInput;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.vfs.VirtualFile;

public class FileEditor {

	private IFileEditorInput input;

	public FileEditor(IFileEditorInput input) {
		this.input = input;
	}

	@Nullable
	public VirtualFile getFile() {
		return new VirtualFile(input.getFile());
	}
	
	public IFileEditorInput getIFileEditorInput() {
		return input;
	}
}
