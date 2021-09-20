package com.xliic.openapi.hover;

import org.eclipse.core.resources.IMarker;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.ui.IMarkerResolution;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.action.IntentionAction;
import com.xliic.idea.codeHighlighting.HighlightingManager;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.project.Project;

public class OpenAPIMarkerResolution implements IMarkerResolution {

	private final Editor editor;
	private final PsiFile file;
	private final Project project;
	private final IntentionAction action;
	private final HighlightingManager manager;

	public OpenAPIMarkerResolution(@NotNull Project project, @NotNull Editor editor, @NotNull PsiFile file,
			@NotNull IntentionAction action) {
		this.editor = editor;
		this.file = file;
		this.project = project;
		this.action = action;
		manager = HighlightingManager.getInstance(project);
	}

	@Override
	public String getLabel() {
		return action.getText();
	}

	@Override
	public void run(IMarker marker) {
		try {
			if (editor.isDirty()) {
				action.invoke(project, editor, file, getCurrentOffset(marker));
			} else {
				action.invoke(project, editor, file, (int) marker.getAttribute(IMarker.CHAR_START));
			}
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	// TODO: after move to AST, ask real offset for the marker pointer
	private int getCurrentOffset(IMarker marker) throws CoreException {
//		Marker mhMarker = manager.getMarker(marker);
//		System.out.println(">>> mhMarker " + mhMarker.getJsonPointer());
		return (int) marker.getAttribute(IMarker.CHAR_START);
	}
}
