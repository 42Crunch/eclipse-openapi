package com.xliic.core.fileEditor;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.IEditorDescriptor;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.part.FileEditorInput;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.pom.Navigatable;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class OpenFileDescriptor implements Navigatable {

	private final VirtualFile file;
	private final int offset;
	private final int length;

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file) {
		this.file = file;
		offset = 0;
		length = 0;
	}

	public OpenFileDescriptor(@NotNull Project project, @NotNull VirtualFile file, int offset, int length) {
		this.file = file;
		this.offset = offset;
		this.length = length;
	}

	public VirtualFile getFile() {
		return file;
	}

	@Override
	public void navigate(boolean requestFocus) {
		IFile ifile = file.getIFile();
		if (ifile != null) {
			gotoFile(ifile, (offset >= 0) ? offset : 0, length, requestFocus);
		} else {
			IEditorPart part = EclipseUtil.openInInternalEditor(file.getFile(), requestFocus);
			if (part instanceof ITextEditor) {
				ITextEditor editor = (ITextEditor) part;
				if (offset >= 0) {
					editor.selectAndReveal(offset, length);
				}
			}
		}
	}
	
	private static ITextEditor gotoFile(IFile file, int offset, int length, boolean requestFocus) {
		IWorkbenchPage page = EclipseUtil.getActivePage();
		IEditorInput input = new FileEditorInput(file);
		IEditorPart part = page.findEditor(input);
		ITextEditor editor = null;
		if (part instanceof ITextEditor) {
			editor = (ITextEditor) part;
		} else {
			try {
				IEditorDescriptor desc = PlatformUI.getWorkbench().getEditorRegistry().getDefaultEditor(file.getName());
				IEditorPart editorPart = page.openEditor(input, desc.getId(), requestFocus);
				if (editorPart instanceof ITextEditor) {
					editor = (ITextEditor) page.openEditor(input, desc.getId(), requestFocus);
				} else {
					editor = null;
				}
			} catch (PartInitException e) {
				e.printStackTrace();
				return null;
			}
		}
		if (offset >= 0) {
			editor.selectAndReveal(offset, length);
		}
		if (requestFocus) {
			page.activate(editor);
		}
		return editor;
	}	
}
