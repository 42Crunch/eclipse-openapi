package com.xliic.openapi.report.tree;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
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
