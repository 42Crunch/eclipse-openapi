package com.xliic.openapi.quickfix;

import java.util.List;

import com.xliic.openapi.report.Issue;

public class FixItem {

	private final List<Issue> issues;
	private final String absolutePointer;
	private final String text;

	public FixItem(Issue issue, String absolutePointer, String text) {
		this(List.of(issue), absolutePointer, text);
	}

	public FixItem(List<Issue> issues, String absolutePointer, String text) {
		this.issues = issues;
		this.absolutePointer = absolutePointer;
		this.text = text;
	}

	public List<Issue> getIssues() {
		return issues;
	}

	public String getAbsolutePointer() {
		return absolutePointer;
	}

	public String getText() {
		return text;
	}
}
