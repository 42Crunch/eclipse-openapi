package com.xliic.openapi.report.types;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInspection.ProblemHighlightType;
import com.xliic.core.lang.HighlightSeverity;

public enum Severity {

    LOW,
    MEDIUM,
    HIGH,
    CRITICAL;

    @NotNull
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

    @NotNull
    public static ProblemHighlightType getProblemHighlightType(@NotNull Severity severity) {
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

    @NotNull
    public static HighlightSeverity getHighlightSeverity(@NotNull Severity severity) {
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
