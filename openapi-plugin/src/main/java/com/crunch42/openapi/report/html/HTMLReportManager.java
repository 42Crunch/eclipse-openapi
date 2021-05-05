package com.crunch42.openapi.report.html;

import com.crunch42.openapi.report.Issue;

import java.util.List;

import org.eclipse.core.resources.IFile;

public interface HTMLReportManager {

    void handleAllFilesClosed();
    void handleClosedFile(IFile file);
    void handleSelectedFile(IFile file);
    void handleAuditReportReady(IFile file);
    void handleGoToHTMLIntention(IFile file, List<Issue> issues);
    void handleBackToLink();
    void handleDocumentChanged(IFile file);
    void handleToolWindowRegistered();
    void handleFileNameChanged(IFile newFile, IFile oldFile);
    void updateCssRules(boolean isDarkTheme);
}
