package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.FileEditorManagerEvent;
import com.xliic.core.fileEditor.FileEditorManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenApiTreePanel;

// This class is responsible to handle selection file system events and update panels accordingly
// Do not subscribe to the events anywhere outside the class as it may lead to execution inconsistency
public class OpenApiFileEditorManagerListener implements FileEditorManagerListener {

	private final Project project;

	public OpenApiFileEditorManagerListener(@NotNull Project project) {
		this.project = project;
	}

	// Use only to handle document listeners and bundling
	@Override
	public void fileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 1) {
			// File already opened in another editor(s)
			return;
		}

		BundleService bundleService = BundleService.getInstance(project);
		bundleService.addBundleDocumentListener(file);

		// Bundle for OpenAPI file
		DataService dataService = DataService.getInstance(project);
		if (dataService.hasFileProperty(file.getPath())) {
			bundleService.scheduleToBundle(file.getPath(), null);
		}
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
		SwingUtilities.invokeLater(() -> {
			ReportManager reportManager = ReportPanel.getInstance(project);
			if (reportManager != null) {
				reportManager.handleSelectedFile(event.getNewFile());
			}
			HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
			if (htmlReportManager != null) {
				htmlReportManager.handleSelectedFile(event.getNewFile());
			}
			PanelManager manager = OpenApiTreePanel.getInstance(project);
			if (manager != null) {
				manager.handleSelectedFile(event.getNewFile());
			}
		});
	}

	// Use only to handle document listeners and bundling
	@Override
	public void fileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 0) {
			// File also opened in another editor(s)
			return;
		}

		BundleService bundleService = BundleService.getInstance(project);
		bundleService.removeBundleDocumentListener(file);
	}
}
