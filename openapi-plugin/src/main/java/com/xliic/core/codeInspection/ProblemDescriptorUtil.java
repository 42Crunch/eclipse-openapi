package com.xliic.core.codeInspection;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.HighlightInfoType;
import com.xliic.core.codeInsight.SeverityRegistrar;
import com.xliic.core.lang.HighlightSeverity;

public class ProblemDescriptorUtil {

    @NotNull
    public static HighlightInfoType getHighlightInfoType(@NotNull ProblemHighlightType highlightType, @NotNull HighlightSeverity severity,
            @NotNull SeverityRegistrar severityRegistrar) {
        return new HighlightInfoType(highlightType, severity, severityRegistrar);
    }
}
