package com.xliic.openapi.listeners;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.editor.FileEditorManagerListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.FileProperty;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.ParserService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenApiTreePanel;

// This class is responsible to handle open/close file system events, update data service and panels
// Do not subscribe to the events anywhere outside the class as it may lead to execution inconsistency
public class OpenAPIFileEditorManagerBeforeListener implements FileEditorManagerListener.Before {

	// Idea can't guarantee the order of Open/Close/Selection events,
	// so we have to use before events as they always come first
	@Override
	public void beforeFileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 0) {
			// File already opened in another editor(s)
			return;
		}

		OpenApiVersion version = OpenApiUtils.getOpenAPIVersion(project, file);
		if (version == OpenApiVersion.Unknown) {
			return;
		}

		DataService dataService = DataService.getInstance(project);
		dataService.setFileProperty(file.getPath(), new FileProperty(fileType, version));
		Document document = FileDocumentManager.getInstance().getDocument(file);
		String text = Objects.requireNonNull(document).getText();
		ParserService parserService = ParserService.getInstance(project);
		ParserData data = parserService.parse(text, fileType);
		dataService.setParserData(file.getPath(), data);
		dataService.addTreeDocumentListener(file);
	}

	@Override
	public void beforeFileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file) {

		OpenApiFileType fileType = OpenApiUtils.getFileType(file);
		if (fileType == OpenApiFileType.Unsupported) {
			return;
		}

		Project project = source.getProject();
		if (FileEditorManager.getInstance(project).getAllEditors(file).length > 1) {
			// File also opened in another editor(s)
			return;
		}

		DataService dataService = DataService.getInstance(project);
		if (!dataService.hasFileProperty(file.getPath())) {
			return;
		}
		dataService.removeTreeDocumentListener(file);
		// Notify the panels
		PanelManager manager = OpenApiTreePanel.getInstance(source.getProject());
		if (manager != null) {
			manager.handleClosedFile(file);
		}
		ReportManager reportManager = ReportPanel.getInstance(source.getProject());
		if (reportManager != null) {
			reportManager.handleClosedFile(file);
		}
		HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(source.getProject());
		if (htmlReportManager != null) {
			boolean selected = false;
			for (VirtualFile selectedFile : source.getSelectedFiles()) {
				if (file.equals(selectedFile)) {
					selected = true;
					break;
				}
			}
			htmlReportManager.handleClosedFile(file, selected);
		}
		// Removing the data must always be the last step
		dataService.removeParserData(file.getPath());
		dataService.removeAuditReport(file.getPath());
		dataService.removeFileProperty(file.getPath());

		BundleService bundleService = BundleService.getInstance(project);
		bundleService.removeBundle(file.getPath());
	}
}
