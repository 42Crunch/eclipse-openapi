package com.xliic.openapi.report;

import com.xliic.core.codeInspection.ProblemHighlightType;
import com.xliic.core.lang.HighlightSeverity;

public enum Severity {

	LOW, MEDIUM, HIGH, CRITICAL;

	public static Severity getSeverity(int criticality) {

		if (criticality <= 2) {
			return LOW;
		} else if (criticality == 3) {
			return MEDIUM;
		} else if (criticality == 4) {
			return HIGH;
		} else {
			return CRITICAL;
		}
	}

	public static ProblemHighlightType getProblemHighlightType(Severity severity) {

		ProblemHighlightType type;
		switch (severity) {
		case LOW:
			type = ProblemHighlightType.WEAK_WARNING;
			break;
		case MEDIUM:
			type = ProblemHighlightType.WARNING;
			break;
		case HIGH:
		case CRITICAL:
			type = ProblemHighlightType.GENERIC_ERROR;
			break;
		default:
			type = ProblemHighlightType.INFORMATION;
			break;
		}
		return type;
	}

	public static HighlightSeverity getHighlightSeverity(Severity severity) {

		HighlightSeverity highlightSeverity;
		switch (severity) {
		case LOW:
			highlightSeverity = HighlightSeverity.WEAK_WARNING;
			break;
		case MEDIUM:
			highlightSeverity = HighlightSeverity.WARNING;
			break;
		case HIGH:
		case CRITICAL:
			highlightSeverity = HighlightSeverity.ERROR;
			break;
		default:
			highlightSeverity = HighlightSeverity.INFORMATION;
			break;
		}
		return highlightSeverity;
	}
}
