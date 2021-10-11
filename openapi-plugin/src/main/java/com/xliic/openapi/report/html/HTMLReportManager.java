package com.xliic.openapi.report.html;

import java.util.List;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.report.Issue;

public interface HTMLReportManager {

	public Project getProject();

	public void handleAllFilesClosed();

	public void handleClosedFile(VirtualFile file);

	public void handleSelectedFile(VirtualFile file);

	public void handleAuditReportReady(VirtualFile file);

	public void handleGoToHTMLIntention(VirtualFile file, List<Issue> issues);

	public void handleBackToLink();

	public void handleDocumentChanged(VirtualFile file);

	public void handleToolWindowRegistered();

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);

	public void updateCssRules(boolean isDarkTheme);

	public void handleIssuesFixed(List<Issue> issues);
}
