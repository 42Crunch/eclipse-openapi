package com.xliic.openapi.report.html;

import java.util.List;

import org.eclipse.core.resources.IFile;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.report.Issue;

public interface HTMLReportManager {

    void handleAllFilesClosed();
    void handleClosedFile(VirtualFile file, boolean selected);
    void handleSelectedFile(VirtualFile file);
    void handleAuditReportReady(IFile file);
    void handleGoToHTMLIntention(IFile file, List<Issue> issues);
    void handleBackToLink();
    void handleDocumentChanged(IFile file);
    void handleToolWindowRegistered();
    void handleFileNameChanged(IFile newFile, IFile oldFile);
    void updateCssRules(boolean isDarkTheme);
}
