package com.xliic.openapi.quickfix;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.report.Issue;

public class FixIssueItem extends FixItem {

    private final List<Issue> issues;

    public FixIssueItem(@NotNull Issue issue, @NotNull String pointer, @NotNull Object value, @NotNull FixType fixType) {
        this(List.of(issue), pointer, value, fixType);
    }

    public FixIssueItem(@NotNull List<Issue> issues, @NotNull String pointer, @NotNull Object value, @NotNull FixType fixType) {
        super(pointer, value, fixType);
        this.issues = issues;
    }

    public List<Issue> getIssues() {
        return issues;
    }
}
