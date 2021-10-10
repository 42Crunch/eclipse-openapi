package com.xliic.core.fileEditor;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.utils.OpenAPIUtils;

public class FileEditorManager {

	private final Project project;

	public FileEditorManager(Project project) {
		this.project = project;
	}

	@NotNull
	public List<FileEditor> openEditor(@NotNull OpenFileDescriptor descriptor, boolean focusEditor) {
		OpenAPIUtils.gotoFile(descriptor.getFile().getIFile(), 0, 0);
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
		IFile selFile = OpenAPIUtils.getSelectedFile();
		if (selFile == null) {
			return new VirtualFile[0];
		}
		return List.of(new VirtualFile(selFile)).toArray(new VirtualFile[0]);
	}

	@NotNull
	public FileEditor[] getAllEditors(@NotNull VirtualFile file) {

		List<FileEditor> fileEditors = new LinkedList<>();
		IWorkbench workbench = PlatformUI.getWorkbench();
		IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();

		for (int i = 0; i < windows.length; i++) {
			IWorkbenchPage[] pages = windows[i].getPages();
			for (int x = 0; x < pages.length; x++) {
				IEditorReference[] editors = pages[x].getEditorReferences();
				for (int z = 0; z < editors.length; z++) {
					IEditorInput input;
					try {
						input = editors[z].getEditorInput();
					} catch (PartInitException e) {
						continue;
					}
					if (!(input instanceof IFileEditorInput)) {
						continue;
					}
					IFileEditorInput fileInput = (IFileEditorInput) input;
					IFile editorFile = fileInput.getFile();
					if (file.equalsToIFile(editorFile)) {
						fileEditors.add(new FileEditor((IFileEditorInput) input));
					}

				}
			}
		}
		if (fileEditors.size() > 0) {
			fileEditors.remove(0);
		}
		return fileEditors.toArray(new FileEditor[0]);

	}

	@NotNull
	public VirtualFile[] getOpenFiles() {

		List<VirtualFile> files = new LinkedList<>();
		IWorkbench workbench = PlatformUI.getWorkbench();
		IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
		for (int i = 0; i < windows.length; i++) {
			IWorkbenchPage[] pages = windows[i].getPages();
			for (int x = 0; x < pages.length; x++) {
				IEditorReference[] editors = pages[x].getEditorReferences();
				for (int z = 0; z < editors.length; z++) {
					IEditorInput input;
					try {
						input = editors[z].getEditorInput();
					} catch (PartInitException e) {
						continue;
					}
					if (!(input instanceof IFileEditorInput)) {
						continue;
					}
					IFileEditorInput fileInput = (IFileEditorInput) input;
					IFile file = fileInput.getFile();
					if (file != null) {
						files.add(new VirtualFile(file));
					}
				}
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