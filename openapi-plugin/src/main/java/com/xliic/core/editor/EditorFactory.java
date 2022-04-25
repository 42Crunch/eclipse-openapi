package com.xliic.core.editor;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

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
import com.xliic.openapi.utils.EditorUtil;

public class EditorFactory {
	
	private static EditorFactory factory;

	public static EditorFactory getInstance() {
		if (factory == null) {
			factory = new EditorFactory();
		}
		return factory;
	}
	
    @NotNull
    public final Editor[] getEditors(@NotNull Document document, @Nullable Project project) {
    	List<Editor> result = new LinkedList<>();
    	for (Editor editor : getEditors(project)) {
			IFileEditorInput input = editor.getIFileEditorInput();
			if (Objects.equals(document.getIDocument(), EditorUtil.getDocument(input))) {
				result.add(new Editor(project, input));
			}
    	}	
		return result.toArray(new Editor[0]);
    }

    @NotNull
    public final Editor[] getEditors(@NotNull Project project) {    	
    	List<Editor> result = new LinkedList<>();
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
					result.add(new Editor(project, (IFileEditorInput) input));
				}
			}
		}
		return result.toArray(new Editor[0]);
    }
}
