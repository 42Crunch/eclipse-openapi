package com.xliic.openapi.hover;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.core.resources.IMarker;
import org.eclipse.ui.IMarkerResolution;
import org.eclipse.ui.IMarkerResolutionGenerator2;

import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.codeHighlighting.Marker;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.quickfix.actions.FixAction;

public class OpenAPIMarkerResolutionGenerator implements IMarkerResolutionGenerator2 {

	private static final IMarkerResolution[] NO_RESOLUTIONS = new IMarkerResolution[0];

	@Override
	public IMarkerResolution[] getResolutions(IMarker marker) {
		if (hasResolutions(marker)) {
			Marker hMarker = HighlightingManager.getInstance(null).getMarker(marker);
			Editor editor = hMarker.getEditor();
			PsiFile file = hMarker.getPsiFile();
			Project project = file.getProject();
			List<FixAction> actions = hMarker.getActions();
			if (actions != null) {
				List<IMarkerResolution> resolutions = new LinkedList<>();
				for (IntentionAction action : actions) {
					if (action.isAvailable(project, editor, file)) {
						resolutions.add(new OpenAPIMarkerResolution(project, editor, file, action));
					}
				}
				return resolutions.toArray((new IMarkerResolution[0]));
			}
		}
		return NO_RESOLUTIONS;
	}

	@Override
	public boolean hasResolutions(IMarker marker) {
		return HighlightingManager.getInstance(null).getMarker(marker) != null;
	}
}
