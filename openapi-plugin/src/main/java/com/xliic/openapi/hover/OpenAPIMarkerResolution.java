package com.xliic.openapi.hover;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IMarkerResolution;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanelView;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenAPIMarkerResolution implements IMarkerResolution {

	@Override
	public String getLabel() {
		return OpenApiBundle.message("openapi.audit.intention.name");
	}

	@Override
	public void run(IMarker marker) {

		IFile file = Issue.getFileFromMarker(marker);
		if (file == null) {
			return;
		}
		VirtualFile vFile = new VirtualFile(file);
		String fileName = vFile.getPath();
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (!dataService.isAuditParticipantFile(fileName)) {
			return;
		}
		IFile auditFile = Issue.getAuditFileFromMarker(marker);
		Audit audit = dataService.getAuditReport(new VirtualFile(auditFile).getPath());
		List<Issue> issues = audit.getIssues();
		int index = Issue.getIssueListIdFromMarker(marker);
		if (index == -1) {
			return;
		}
		Issue issue = issues.get(index);
		if (!issue.isLocationFound()) {
			return;
		}
		Display.getDefault().asyncExec(new Runnable() {
			@Override
			public void run() {
				Optional<IViewPart> hro = WorkbenchUtils.findView2(HTMLReportPanelView.ID);
				if (hro.isPresent()) {
					HTMLReportManager manager = (HTMLReportManager) hro.get();
					manager.handleGoToHTMLIntention(vFile, Arrays.asList(issue));
				}
			}
		});
	}
}
