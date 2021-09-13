package com.xliic.openapi.report.html;

import java.util.List;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.report.Issue;

public interface HTMLReportManager {

	void handleAllFilesClosed();

	void handleClosedFile(VirtualFile file, boolean selected);

	void handleSelectedFile(VirtualFile file);

	void handleAuditReportReady(VirtualFile file);

	void handleGoToHTMLIntention(VirtualFile file, List<Issue> issues);

	void handleBackToLink();

	void handleDocumentChanged(VirtualFile file);

	void handleToolWindowRegistered();

	void handleFileNameChanged(VirtualFile newFile, String oldFileName);

	void updateCssRules(boolean isDarkTheme);
}
