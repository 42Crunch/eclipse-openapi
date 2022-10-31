package com.xliic.core.codeInspection;

public enum ProblemHighlightType {

    GENERIC_ERROR_OR_WARNING, LIKE_UNKNOWN_SYMBOL, LIKE_DEPRECATED, LIKE_UNUSED_SYMBOL, ERROR, WARNING, GENERIC_ERROR, WEAK_WARNING, INFORMATION,
    LIKE_MARKED_FOR_REMOVAL, POSSIBLE_PROBLEM;

    private ProblemHighlightType() {
    }
}
