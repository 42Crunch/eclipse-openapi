package com.xliic.idea.codeInspection;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.codeHighlighting.HighlightSeverity;
import com.xliic.idea.codeInsight.HighlightInfoType;
import com.xliic.idea.codeInsight.SeverityRegistrar;

public class ProblemDescriptorUtil {

	@NotNull
	public static HighlightInfoType getHighlightInfoType(@NotNull ProblemHighlightType highlightType,
			@NotNull HighlightSeverity severity, @NotNull SeverityRegistrar severityRegistrar) {
		return new HighlightInfoType(highlightType, severity, severityRegistrar);
	}
}
