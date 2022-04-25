package com.xliic.openapi.listeners;

import java.util.HashMap;
import java.util.Map;
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

import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerEvent;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.editor.OpenAPIEnterTypedHandler;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenAPIPartListener implements IPartListener {

	private IEditorInput prevInput = null;
	private boolean forceActivation = true;
	private IPreferenceStore store;
	private final Project project;

	private final OpenApiFileEditorManagerListener listener;
	private final OpenAPIFileEditorManagerBeforeListener beforeListener;
	private final Map<Editor, OpenAPIEnterTypedHandler> enterTypedHandlers;
	
	public OpenAPIPartListener(@NotNull Project project) {
		this.project = project;
		store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		listener = new OpenApiFileEditorManagerListener(project);
		beforeListener = new OpenAPIFileEditorManagerBeforeListener();
		enterTypedHandlers = new HashMap<>();
	}

	@Override
	public final void partOpened(final IWorkbenchPart part) {
		IFileEditorInput input = getFileEditorInput(part);
		if (input != null) {
			IFile file = input.getFile();
			if (file != null) {
				Editor editor = new Editor(project, input);
				if (!enterTypedHandlers.containsKey(editor)) {
					enterTypedHandlers.put(editor, new OpenAPIEnterTypedHandler(editor));
					editor.addTraverseListener(enterTypedHandlers.get(editor));									
				}
				VirtualFile virtualFile = new VirtualFile(file);
				beforeListener.beforeFileOpened(FileEditorManager.getInstance(project), virtualFile);
				listener.fileOpened(FileEditorManager.getInstance(project), virtualFile);
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

	@Override
	public final void partActivated(final IWorkbenchPart part) {
		IFileEditorInput input = getFileEditorInput(part);
		if (input != null && !Objects.equals(input, prevInput)) {
			prevInput = input;
			IFile file = input.getFile();
			if (file != null) {
				listener.selectionChanged(new FileEditorManagerEvent(new VirtualFile(file)));
			}
		}		
	}

	@Override
	public final void partClosed(final IWorkbenchPart part) {
		IFileEditorInput input = getFileEditorInput(part);
		if (input != null) {
			IFile file = input.getFile();
			if (file != null) {
				Editor editor = new Editor(project, input);					
		        PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
		        placeHolderService.dispose(editor);
				if (enterTypedHandlers.containsKey(editor)) {
					editor.removeTraverseListener(enterTypedHandlers.remove(editor));									
				}
				VirtualFile virtualFile = new VirtualFile(file);
				beforeListener.beforeFileClosed(FileEditorManager.getInstance(project), virtualFile);
				listener.fileClosed(FileEditorManager.getInstance(project), virtualFile);
			}
			if (EditorUtil.getCurrentEditor() == null) {
				prevInput = null;
				listener.selectionChanged(new FileEditorManagerEvent(null));
			}
		}
	}

	@Override
	public final void partBroughtToTop(final IWorkbenchPart part) {
	}

	// This event is thrown before part closed event and annotation model is still available now
	@Override
	public final void partDeactivated(final IWorkbenchPart part) {
		IFileEditorInput input = getFileEditorInput(part);
		if (input != null) {
			IFile file = input.getFile();
			if (file != null) {
				Editor editor = new Editor(project, input);					
		        PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
		        placeHolderService.dispose(editor);
			}			
		}
	}
	
	private static IFileEditorInput getFileEditorInput(IWorkbenchPart part) {
		if (part instanceof TextEditor) {
			IEditorInput input = ((TextEditor) part).getEditorInput();
			if (input instanceof IFileEditorInput) {
				return (IFileEditorInput) input;
			}
		}
		return null;
	}
}
