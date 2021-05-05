package com.crunch42.openapi.report.tree;

import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.report.Issue;
import com.crunch42.openapi.report.Severity;
import com.crunch42.openapi.utils.OpenAPIUtils;

import org.eclipse.core.resources.IFile;

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
