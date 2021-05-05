package com.crunch42.openapi.hover;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IMarkerResolution;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.Audit;
import com.crunch42.openapi.report.Issue;
import com.crunch42.openapi.report.html.HTMLReportManager;
import com.crunch42.openapi.report.html.ui.HTMLReportPanelView;
import com.crunch42.openapi.services.IDataService;
import com.crunch42.openapi.utils.OpenAPIUtils;
import com.crunch42.openapi.utils.WorkbenchUtils;

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
		String fileName = OpenAPIUtils.getAbsoluteFullFilePath(file);
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    if (!dataService.isAuditParticipantFile(fileName)) {
	      return;
	    }	    
	    IFile auditFile = Issue.getAuditFileFromMarker(marker);
	    Audit audit = dataService.getAuditReport(auditFile.getFullPath().toPortableString());
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
    	    public void run() {
    			Optional<IViewPart> hro = WorkbenchUtils.findView2(HTMLReportPanelView.ID);
    			if (hro.isPresent()) {
    				HTMLReportManager manager = (HTMLReportManager) hro.get();
					manager.handleGoToHTMLIntention(file, Arrays.asList(issue));
    			}
            }
        });
	}
}
