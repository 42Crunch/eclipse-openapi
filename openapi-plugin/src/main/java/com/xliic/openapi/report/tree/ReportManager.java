package com.xliic.openapi.report.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.tree.filter.FilterState;

public interface ReportManager {

	FilterState getFilterState();
    void cleanSearchTextArea();
    void reloadAndRestoreExpansion();
    void handleAllFilesClosed();
    void handleClosedFile(VirtualFile file);
    void handleSelectedFile(VirtualFile file);
    void handleAuditReportReady(IFile file);
    void handleAuditReportClean(Audit auditReport);
    void handleDocumentChanged(IFile file);
    void handleToolWindowRegistered();
    void handleFileNameChanged(IFile newFile, IFile oldFile);
}
