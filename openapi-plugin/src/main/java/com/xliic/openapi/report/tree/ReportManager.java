package com.xliic.openapi.report.tree;

import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.tree.filter.FilterState;

public interface ReportManager {

	Project getProject();

	FilterState getFilterState();

	void cleanSearchTextArea();

	void reloadAndRestoreExpansion();

	void handleAllFilesClosed();

	void handleClosedFile(VirtualFile file);

	void handleSelectedFile(VirtualFile file);

	void handleAuditReportReady(VirtualFile file);

	void handleAuditReportClean(Audit auditReport);

	void handleDocumentChanged(VirtualFile file);

	void handleToolWindowRegistered();

	void handleFileNameChanged(VirtualFile newFile, String oldFileName);
}
