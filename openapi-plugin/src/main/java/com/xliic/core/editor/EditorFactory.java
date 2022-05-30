package com.xliic.core.editor;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.ui.IEditorInput;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;

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
    		if (document.equals(editor.getDocument())) {
				result.add(editor);
			}
    	}	
		return result.toArray(new Editor[0]);
    }

    @NotNull
    public final Editor[] getEditors(@NotNull Project project) {    	
    	List<Editor> result = new LinkedList<>();
		for (IEditorInput input : EclipseUtil.getAllSupportedEditorInputs()) {
			result.add(new Editor(project, input));	
		}
		return result.toArray(new Editor[0]);
    }
}
