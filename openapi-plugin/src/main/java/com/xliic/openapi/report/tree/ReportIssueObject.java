package com.xliic.openapi.report.tree;

import java.io.File;

import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.Severity;

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
		Project project = issue.getProject();
		VirtualFile file = new VirtualFile(new File(issue.getFileName()));
		Range range = getRange();
		int offset = range.getStartOffset();
		int length = range.getEndOffset() - range.getStartOffset();
        new OpenFileDescriptor(project, file, offset, length).navigate(true);
	}
}
