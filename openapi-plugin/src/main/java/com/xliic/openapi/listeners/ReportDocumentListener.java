package com.xliic.openapi.listeners;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.document.Document;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.openapi.parser.pointer.Location;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanelView;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.services.IParserService;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class ReportDocumentListener extends DocumentListener {

    public ReportDocumentListener() {
    }

	@Override
	public void beforeDocumentChange(DocumentEvent event) {}

	@Override
	public void documentChanged(DocumentEvent event) {

        IFile file = OpenAPIUtils.getSelectedFile();
        if (file == null) {
            return;
        }

        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);       
		IParserService parserService = (IParserService) PlatformUI.getWorkbench().getService(IParserService.class);
        Document document = event.getDocument();
        String text = document.getText();
        
    	Display.getDefault().asyncExec(new Runnable() {
    	    public void run() {
                Map<String, Location> pointerToLocationMap =
                        parserService.parsePointerToLocationMap(text, OpenAPIUtils.getFileType(file));
                if (pointerToLocationMap.isEmpty()) {
                    return;
                }
                List<Audit> reports = dataService.getAuditReportsForAuditParticipantFileName(OpenAPIUtils.getAbsoluteFullFilePath(file));
                if (reports.isEmpty()) {
                    return;
                }
                for (Audit audit : reports) {
                    audit.updateLocation(OpenAPIUtils.getAbsoluteFullFilePath(file), pointerToLocationMap);
                }
                
    			Optional<IViewPart> ro = WorkbenchUtils.findView2(ReportPanelView.ID);
    			if (ro.isPresent()) {
					ReportManager manager = (ReportManager) ro.get();
					manager.handleDocumentChanged(file);
    			}
    			Optional<IViewPart> hro = WorkbenchUtils.findView2(HTMLReportPanelView.ID);
    			if (hro.isPresent()) {
    				HTMLReportManager manager = (HTMLReportManager) hro.get();
					manager.handleDocumentChanged(file);
    			}
            }
        });
    }
}
