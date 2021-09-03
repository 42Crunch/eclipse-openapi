package com.xliic.openapi.listeners;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.editor.FileEditorManagerEvent;
import com.xliic.idea.editor.FileEditorManagerListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenApiTreePanel;

import org.jetbrains.annotations.NotNull;

// This class is responsible to handle selection file system events and update panels accordingly
// Do not subscribe to the events anywhere outside the class as it may lead to execution inconsistency
public class OpenApiFileEditorManagerListener implements FileEditorManagerListener {

    private final Project project;

    public OpenApiFileEditorManagerListener(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void selectionChanged(@NotNull FileEditorManagerEvent event) {
        if (event.getNewFile() == null) {
            PanelManager manager = OpenApiTreePanel.getInstance(project);
            if (manager != null) {
                manager.handleAllFilesClosed();
            }
            ReportManager reportManager = ReportPanel.getInstance(project);
            if (reportManager != null) {
                reportManager.handleAllFilesClosed();
            }
            HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
            if (htmlReportManager != null) {
                htmlReportManager.handleAllFilesClosed();
            }
            return;
        }
        ApplicationManager.getApplication().invokeLater(() -> {
            ReportManager reportManager = ReportPanel.getInstance(project);
            if (reportManager != null) {
                reportManager.handleSelectedFile(event.getNewFile());
            }
        });
        ApplicationManager.getApplication().invokeLater(() -> {
            HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
            if (htmlReportManager != null) {
                htmlReportManager.handleSelectedFile(event.getNewFile());
            }
        });
        ApplicationManager.getApplication().invokeLater(() -> {
            PanelManager manager = OpenApiTreePanel.getInstance(project);
            if (manager != null) {
                manager.handleSelectedFile(event.getNewFile());
            }
        });
    }

	@Override
	public void fileOpened(FileEditorManager source, VirtualFile file) {}

	@Override
	public void fileClosed(FileEditorManager source, VirtualFile file) {}
}
