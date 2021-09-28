package com.xliic.openapi.listeners;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.vfs.BulkFileListener;
import com.xliic.idea.vfs.VFileEvent;
import com.xliic.idea.vfs.VFileMoveEvent;
import com.xliic.idea.vfs.VFilePropertyChangeEvent;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanel;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenApiTreePanel;

public class OpenAPIBulkFileListener extends BulkFileListener {

	private final Project project;

	public OpenAPIBulkFileListener(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void after(@NotNull List<? extends VFileEvent> events) {

		for (VFileEvent event : events) {
			if (event instanceof VFileMoveEvent) {
				VirtualFile file = ((VFileMoveEvent) event).getFile();
				OpenApiFileType fileType = OpenApiUtils.getFileType(file);
				if (fileType != OpenApiFileType.Unsupported) {
					update(file, ((VFileMoveEvent) event).getOldPath());
				}
			} else if (event instanceof VFilePropertyChangeEvent) {
				VirtualFile file = ((VFilePropertyChangeEvent) event).getFile();
				OpenApiFileType fileType = OpenApiUtils.getFileType(file);
				if (fileType != OpenApiFileType.Unsupported) {
					update(file, ((VFilePropertyChangeEvent) event).getOldPath());
				}
			}
		}
	}

	private void update(VirtualFile newFile, String oldFileName) {

		BundleService bundleService = BundleService.getInstance(project);
		bundleService.handleFileNameChanged(newFile, oldFileName);

		DataService dataService = DataService.getInstance(project);
		dataService.handleFileNameChanged(newFile, oldFileName);

		ASTService astService = ASTService.getInstance(project);
		astService.handleFileNameChanged(newFile, oldFileName);

		PanelManager manager = OpenApiTreePanel.getInstance(project);
		if (manager != null) {
			manager.handleFileNameChanged(newFile, oldFileName);
		}
		ReportManager reportManager = ReportPanel.getInstance(project);
		if (reportManager != null) {
			reportManager.handleFileNameChanged(newFile, oldFileName);
		}
		HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
		if (htmlReportManager != null) {
			htmlReportManager.handleFileNameChanged(newFile, oldFileName);
		}
	}
}
