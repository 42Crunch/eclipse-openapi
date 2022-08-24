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
    private final String insertAfterPointer;

    public FixItem(String absPointer, String text, List<PlaceHolder> placeHolders, String insertAfterPointer) {
        this(Collections.emptyList(), absPointer, text, placeHolders, insertAfterPointer);
    }

    public FixItem(Issue issue, String absPointer, String text) {
        this(List.of(issue), absPointer, text, Collections.emptyList(), null);
    }

    public FixItem(Issue issue, String absPointer, String text, List<PlaceHolder> placeHolders) {
        this(List.of(issue), absPointer, text, placeHolders, null);
    }

    public FixItem(List<Issue> issues, String absPointer, String text, List<PlaceHolder> placeHolders) {
        this(issues, absPointer, text, placeHolders, null);
    }

    public FixItem(List<Issue> issues,
            String absPointer,
            String text,
            List<PlaceHolder> placeHolders,
            String insertAfterPointer) {
        this.issues = issues;
        this.absPointer = absPointer;
        this.text = text;
        this.placeHolders = placeHolders;
        this.insertAfterPointer = insertAfterPointer;
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

    public String getInsertAfterPointer() {
        return insertAfterPointer;
    }

    public void setPlaceHolderOffset(int offset) {
        for (PlaceHolder placeHolder : placeHolders) {
            placeHolder.setOffset(offset);
        }
    }
}