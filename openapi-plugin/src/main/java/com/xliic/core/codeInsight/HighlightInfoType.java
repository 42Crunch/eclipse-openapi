package com.xliic.core.codeInsight;

import org.eclipse.core.resources.IMarker;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInspection.ProblemHighlightType;
import com.xliic.core.lang.HighlightSeverity;

public class HighlightInfoType {

    private final HighlightSeverity severity;

    public HighlightInfoType(@NotNull ProblemHighlightType highlightType, @NotNull HighlightSeverity severity,
            @NotNull SeverityRegistrar severityRegistrar) {
        this.severity = severity;
    }

    public int getSeverity() {
        if (severity == HighlightSeverity.INFORMATION) {
            return IMarker.SEVERITY_INFO;
        } else if (severity == HighlightSeverity.WARNING) {
            return IMarker.SEVERITY_WARNING;
        } else if (severity == HighlightSeverity.WEAK_WARNING) {
            return IMarker.SEVERITY_WARNING;
        } else if (severity == HighlightSeverity.ERROR) {
            return IMarker.SEVERITY_ERROR;
        }
        return IMarker.SEVERITY_INFO;
    }
}
