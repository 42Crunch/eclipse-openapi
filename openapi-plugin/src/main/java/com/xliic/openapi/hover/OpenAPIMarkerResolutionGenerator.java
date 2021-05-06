package com.xliic.openapi.hover;

import org.eclipse.core.resources.IMarker;
import org.eclipse.ui.IMarkerResolution;
import org.eclipse.ui.IMarkerResolutionGenerator2;

import com.xliic.openapi.report.Issue;

public class OpenAPIMarkerResolutionGenerator implements IMarkerResolutionGenerator2 {

	@Override
	public IMarkerResolution[] getResolutions(IMarker marker) {
		if (hasResolutions(marker)) {
			return new IMarkerResolution[] { new OpenAPIMarkerResolution() };
		}
		else {
			return new IMarkerResolution[] {};
		}
	}

	@Override
	public boolean hasResolutions(IMarker marker) {
		return Issue.isIssueMarker(marker);
	}
}
