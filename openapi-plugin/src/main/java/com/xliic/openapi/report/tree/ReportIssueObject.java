package com.xliic.openapi.report.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.Severity;
import com.xliic.openapi.utils.OpenAPIUtils;

public class ReportIssueObject {

    private final Issue issue;

    public ReportIssueObject(Issue issue) {
        this.issue = issue;
    }

    @Override
    public String toString() {
        return issue.toString();
    }

    public Issue getIssue() {
        return issue;
    }

    public Severity getSeverity() {
        return issue.getSeverity();
    }

    public String getLabel() {
        return issue.getLabel();
    }

    public String getLabelLocation() {
        return issue.getLabelLocation();
    }

    public Location getLocation() {
        return issue.getLocation();
    }

    public boolean hasLocationFound() {
        return issue.isLocationFound();
    }

    public void navigate() {
    	IFile refFile = OpenAPIUtils.getIFile(issue.getFileName());
    	OpenAPIUtils.gotoFile(refFile, (int) issue.getLocation().getStartOffset(), (int) issue.getLocation().getLength());
    }
}
