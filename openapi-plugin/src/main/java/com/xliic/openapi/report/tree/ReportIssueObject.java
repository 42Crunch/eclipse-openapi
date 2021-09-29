package com.xliic.openapi.report.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.openapi.parser.ast.Range;
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

	public Range getRange() {
		return issue.getRange();
	}

	public boolean isRangeDetected() {
		return getRange() != null;
	}

	public void navigate() {
		IFile refFile = OpenAPIUtils.getIFile(issue.getFileName());
		Range range = getRange();
		OpenAPIUtils.gotoFile(refFile, range.getStartOffset(), range.getEndOffset() - range.getStartOffset());
	}
}
