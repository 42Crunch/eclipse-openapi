package com.xliic.openapi.listeners;

import java.util.Objects;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.editors.text.TextEditor;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.codeHighlighting.HighlightingManager;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.editor.FileEditorManagerEvent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenAPIPartListener implements IPartListener {

	private IEditorInput prevInput = null;
	private boolean forceActivation = true;
	private IPreferenceStore store;
	private final Project project;

	private final HighlightingManager manager;
	private final OpenApiFileEditorManagerListener fileEditorManagerListener;
	private final OpenAPIFileEditorManagerBeforeListener fileEditorManagerBeforeListener;

	public OpenAPIPartListener(@NotNull Project project) {
		this.project = project;
		manager = HighlightingManager.getInstance(project);
		store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		fileEditorManagerListener = new OpenApiFileEditorManagerListener(project);
		fileEditorManagerBeforeListener = new OpenAPIFileEditorManagerBeforeListener();
	}

	@Override
	public final void partOpened(final IWorkbenchPart part) {
		if (part instanceof TextEditor) {
			IEditorInput input = ((TextEditor) part).getEditorInput();
			if (input instanceof IFileEditorInput) {
				IFileEditorInput fileInput = (IFileEditorInput) input;
				IFile file = fileInput.getFile();
				if (file != null) {
					fileEditorManagerBeforeListener.beforeFileOpened(FileEditorManager.getInstance(project),
							new VirtualFile(file));
					fileEditorManagerListener.fileOpened(FileEditorManager.getInstance(project), new VirtualFile(file));
					// When eclipse is started there may be a case where file is opened, but not
					// activated (selected)
					// To fix that we call activate directly below
					// If the first file is opened manually, there will be 2 activate calls, but
					// that's ok, we have the guard against it
					if (forceActivation) {
						forceActivation = false;
						if (store.getBoolean(AuditKeys.IGNORE_SHOW_PERSPECTIVE_ONCE)) {
							partActivated(part);
						} else {
							store.setValue(AuditKeys.IGNORE_SHOW_PERSPECTIVE_ONCE, true);
							Display.getDefault().asyncExec(new Runnable() {
								@Override
								public void run() {
									WorkbenchUtils.openPerspective();
									partActivated(part);
								}
							});
						}

					}
				}
			}
		}
	}

	@Override
	public final void partActivated(final IWorkbenchPart part) {
		if (part instanceof TextEditor) {
			IEditorInput input = ((TextEditor) part).getEditorInput();
			// When we click outside the editor and back, the part gets activated
			// Handle views only if activation is triggered by selection between files in
			// the editor
			if ((input instanceof IFileEditorInput) && !Objects.equals(input, prevInput)) {
				prevInput = input;
				IFileEditorInput fileInput = (IFileEditorInput) input;
				IFile file = fileInput.getFile();
				if (file != null) {
					fileEditorManagerListener.selectionChanged(new FileEditorManagerEvent(new VirtualFile(file)));
				}
			}
		}
	}

	@Override
	public final void partClosed(final IWorkbenchPart part) {
		if (part instanceof TextEditor) {
			IEditorInput input = ((TextEditor) part).getEditorInput();
			if (input instanceof IFileEditorInput) {
				IFileEditorInput fileInput = (IFileEditorInput) input;
				IFile file = fileInput.getFile();
				if (file != null) {
					fileEditorManagerBeforeListener.beforeFileClosed(FileEditorManager.getInstance(project),
							new VirtualFile(file));
					fileEditorManagerListener.fileClosed(FileEditorManager.getInstance(project), new VirtualFile(file));
					manager.close(fileInput);
				}
				if (EditorUtil.getCurrentEditor() == null) {
					prevInput = null;
					fileEditorManagerListener.selectionChanged(new FileEditorManagerEvent(null));
				}
			}
		}
	}

	@Override
	public final void partBroughtToTop(final IWorkbenchPart part) {
	}

	@Override
	public final void partDeactivated(final IWorkbenchPart part) {
	}
}
