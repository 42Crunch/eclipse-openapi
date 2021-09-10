package com.xliic.openapi.callback;

import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanelView;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class AuditActionCallback extends ActionCallback {

	private final Shell shell;
	private final IFile file;

	public AuditActionCallback(@NotNull Shell shell, @NotNull IFile file) {
		this.shell = shell;
		this.file = file;
	}

	public void setBeforeRequest() {
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (dataService.hasAuditReport(new VirtualFile(file).getPath())) {
			dataService.removeReportDocumentListener(new VirtualFile(file));
			Optional<IViewPart> ro = WorkbenchUtils.findView2(ReportPanelView.ID);
			if (ro.isPresent()) {
				ReportManager manager = (ReportManager) ro.get();
				Audit report = dataService.removeAuditReport(new VirtualFile(file).getPath());
				manager.handleAuditReportClean(report);
				if (report != null) {
					report.clean();
				}
			}
		}
	}

	@Override
	public void setDone() {
		Display.getDefault().asyncExec(new Runnable() {
			@Override
			public void run() {
				Optional<IViewPart> ro = WorkbenchUtils.findView2(ReportPanelView.ID);
				if (ro.isPresent()) {
					ReportManager manager = (ReportManager) ro.get();
					manager.handleAuditReportReady(new VirtualFile(file));
				}
				Optional<IViewPart> hro = WorkbenchUtils.findView2(HTMLReportPanelView.ID);
				if (hro.isPresent()) {
					HTMLReportManager manager = (HTMLReportManager) hro.get();
					manager.handleAuditReportReady(new VirtualFile(file));
				}
				OpenAPIUtils.gotoFile(file, 0, 0);
				IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
				dataService.addReportDocumentListener(new VirtualFile(file));
			}
		});
	}

	@Override
	public void setRejected() {
		Display.getDefault().asyncExec(new Runnable() {
			@Override
			public void run() {
				MessageDialog.openError(shell, OpenApiBundle.message("openapi.error.title"), getError());
			}
		});
	}
}
