package com.xliic.core.fileEditor;

import org.eclipse.ui.IEditorInput;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class FileEditor implements TextEditor {

	private final IEditorInput input;
	private final Project project;
	
	public FileEditor(IEditorInput input) {
		this.input = input;
		this.project = Project.getInstance();
	}

	@Nullable
	public VirtualFile getFile() {
		return EclipseUtil.getVirtualFile(input);
	}
	
	public IEditorInput getEditorInput() {
		return input;
	}

	@Override
	public Editor getEditor() {
		return new Editor(project, input);
	}
}
