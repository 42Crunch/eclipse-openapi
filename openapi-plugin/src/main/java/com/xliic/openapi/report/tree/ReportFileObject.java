package com.xliic.openapi.report.tree;

import com.xliic.openapi.report.Issue;

public class ReportFileObject {

    private final Issue issue;

    public ReportFileObject(Issue issue) {
        this.issue = issue;
    }

    @Override
    public String toString() {
        return issue.getFileName();
    }

    public String getFileName() {
        return issue.getFileName();
    }

    public String getShortFileName(String projectPath) {
        if (issue.getUri() == null) {
            return issue.getFileName().replace(projectPath, "");
        } else {
            return issue.getUri().toString();
        }
    }

    public boolean isRemote() {
        return issue.getUri() != null;
    }
}
