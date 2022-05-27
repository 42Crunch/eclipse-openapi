package com.xliic.core.fileEditor;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.ui.IEditorInput;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;

public class FileEditorManager {

	private final Project project;

	public FileEditorManager(Project project) {
		this.project = project;
	}

	@NotNull
	public List<FileEditor> openEditor(@NotNull OpenFileDescriptor descriptor, boolean focusEditor) {
		descriptor.navigate(focusEditor);
		return null; // TODO: return smth here
	}

	public static FileEditorManager getInstance(Project project) {
		return new FileEditorManager(project);
	}

	public Project getProject() {
		return project;
	}

	@NotNull
	public VirtualFile[] getSelectedFiles() {
		VirtualFile file = OpenApiUtils.getSelectedFile();
		if (file == null) {
			return new VirtualFile[0];
		}
		return List.of(file).toArray(new VirtualFile[0]);
	}

	@NotNull
	public FileEditor[] getAllEditors(@NotNull VirtualFile file) {
		List<FileEditor> fileEditors = new LinkedList<>();
		for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
			if (file.equals(EclipseUtil.getVirtualFile(input))) {
				fileEditors.add(new FileEditor(input));
			}		
		}
		return fileEditors.toArray(new FileEditor[0]);
	}

	@NotNull
	public VirtualFile[] getOpenFiles() {
		List<VirtualFile> files = new LinkedList<>();
		for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
			VirtualFile file = EclipseUtil.getVirtualFile(input);
			if (file != null) {
				files.add(file);
			}	
		}
		return files.toArray(new VirtualFile[0]);
	}

	@Nullable
	public FileEditor getSelectedEditor() {
		VirtualFile[] files = this.getSelectedFiles();
		if (files.length > 0) {
			FileEditor[] editors = getAllEditors(files[0]);
			if (editors.length > 0) {
				return editors[0];
			}
		}
		return null;
	}
}
