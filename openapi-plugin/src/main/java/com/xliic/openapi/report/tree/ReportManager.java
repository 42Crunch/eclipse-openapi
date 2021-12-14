package com.xliic.openapi.report.tree;

import java.util.List;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.tree.filter.FilterState;

public interface ReportManager {

	public Project getProject();

	public FilterState getFilterState();

	public void cleanSearchTextArea();

	public void reloadAndRestoreExpansion();

	public void handleAllFilesClosed();

	public void handleClosedFile(VirtualFile file);

	public void handleSelectedFile(VirtualFile file);

	public void handleAuditReportReady(VirtualFile file);

	public void handleAuditReportClean(Audit auditReport);

	public void handleDocumentChanged(VirtualFile file);

	public void handleToolWindowRegistered();

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);

	public void handleIssuesFixed(List<Issue> issues);
}
