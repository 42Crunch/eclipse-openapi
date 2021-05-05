package com.crunch42.openapi.callback;

import java.util.Optional;

import javax.validation.constraints.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.Audit;
import com.crunch42.openapi.report.html.HTMLReportManager;
import com.crunch42.openapi.report.html.ui.HTMLReportPanelView;
import com.crunch42.openapi.report.tree.ReportManager;
import com.crunch42.openapi.report.tree.ui.ReportPanelView;
import com.crunch42.openapi.services.IDataService;
import com.crunch42.openapi.utils.OpenAPIUtils;
import com.crunch42.openapi.utils.WorkbenchUtils;

public class AuditActionCallback extends ActionCallback {

    private final Shell shell;
    private final IFile file;

    public AuditActionCallback(@NotNull Shell shell, @NotNull IFile file) {
        this.shell = shell;
        this.file = file;
    }

    public void setBeforeRequest() {
    	IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        if (dataService.hasAuditReport(file.getFullPath().toPortableString())) {
            dataService.removeReportDocumentListener(file, null);
			Optional<IViewPart> ro = WorkbenchUtils.findView2(ReportPanelView.ID);
			if (ro.isPresent()) {
				ReportManager manager = (ReportManager) ro.get();
		        Audit report = dataService.removeAuditReport(file.getFullPath().toPortableString());
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
    	    public void run() {
    			Optional<IViewPart> ro = WorkbenchUtils.findView2(ReportPanelView.ID);
    			if (ro.isPresent()) {
					ReportManager manager = (ReportManager) ro.get();
					manager.handleAuditReportReady(file);
    			}
    			Optional<IViewPart> hro = WorkbenchUtils.findView2(HTMLReportPanelView.ID);
    			if (hro.isPresent()) {
    				HTMLReportManager manager = (HTMLReportManager) hro.get();
					manager.handleAuditReportReady(file);
    			}   			
    			OpenAPIUtils.gotoFile(file, 0, 0);
                IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
                dataService.addReportDocumentListener(file);
            }
        });
    }

    @Override
    public void setRejected() {
    	Display.getDefault().asyncExec(new Runnable() {
    	    public void run() {
    	    	MessageDialog.openError(shell, OpenApiBundle.message("openapi.error.title"), getError());
            }
        });
    }
}
