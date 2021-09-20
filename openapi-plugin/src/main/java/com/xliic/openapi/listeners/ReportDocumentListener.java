package com.xliic.openapi.listeners;

import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.ParserService;

public class ReportDocumentListener extends DocumentListener {

	private final Project project;

	public ReportDocumentListener(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void beforeDocumentChange(@NotNull DocumentEvent event) {
	}

	@Override
	public void documentChanged(@NotNull DocumentEvent event) {

		Document document = event.getDocument();
		VirtualFile file = FileDocumentManager.getInstance().getFile(document);
		if (file == null) {
			return;
		}

		DataService dataService = DataService.getInstance(project);
		ParserService parserService = ParserService.getInstance(project);
		String text = document.getText();

		ApplicationManager.getApplication().invokeLater(() -> {
			Map<String, Location> pointerToLocationMap = parserService.parsePointerToLocationMap(text,
					OpenApiUtils.getFileType(file));
			if (pointerToLocationMap.isEmpty()) {
				return;
			}
			List<Audit> reports = dataService.getAuditReportsForAuditParticipantFileName(file.getPath());
			if (reports.isEmpty()) {
				return;
			}
			for (Audit audit : reports) {
				audit.updateLocation(file.getPath(), pointerToLocationMap);
			}
			ReportManager reportManager = ReportPanel.getInstance(project);
			if (reportManager != null) {
				reportManager.handleDocumentChanged(file);
			}
			HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
			if (htmlReportManager != null) {
				htmlReportManager.handleDocumentChanged(file);
			}
		});
	}
}
