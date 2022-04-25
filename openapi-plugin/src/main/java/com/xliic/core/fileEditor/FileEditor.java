package com.xliic.core.fileEditor;

import org.eclipse.ui.IFileEditorInput;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class FileEditor implements TextEditor {

	private final IFileEditorInput input;
	private final Project project;
	
	public FileEditor(IFileEditorInput input) {
		this.input = input;
		this.project = OpenAPIAbstractUIPlugin.getInstance().getProject();
	}

	@Nullable
	public VirtualFile getFile() {
		return new VirtualFile(input.getFile());
	}
	
	public IFileEditorInput getIFileEditorInput() {
		return input;
	}

	@Override
	public Editor getEditor() {
		return new Editor(project, input);
	}
}
