package com.xliic.openapi.quickfix;

import java.util.Collections;
import java.util.List;

import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.report.Issue;

public class FixItem {

    private final List<Issue> issues;
    private final String absPointer;
    private final String text;
    private final List<PlaceHolder> placeHolders;

    public FixItem(Issue issue, String absPointer, String text) {
        this(List.of(issue), absPointer, text, Collections.emptyList());
    }

    public FixItem(Issue issue, String absPointer, String text, List<PlaceHolder> placeHolders) {
        this(List.of(issue), absPointer, text, placeHolders);
    }

    public FixItem(List<Issue> issues, String absPointer, String text) {
        this(issues, absPointer, text, Collections.emptyList());
    }

    public FixItem(List<Issue> issues, String absPointer, String text, List<PlaceHolder> placeHolders) {
        this.issues = issues;
        this.absPointer = absPointer;
        this.text = text;
        this.placeHolders = placeHolders;
    }

    public List<Issue> getIssues() {
        return issues;
    }

    public String getAbsPointer() {
        return absPointer;
    }

    public String getText() {
        return text;
    }

    public List<PlaceHolder> getPlaceHolders() {
        return placeHolders;
    }
}

