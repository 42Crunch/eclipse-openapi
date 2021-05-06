package com.xliic.openapi;

import java.util.Optional;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.PlatformUI;

import com.xliic.openapi.report.html.ui.HTMLReportPanelView;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.tree.PanelManager;
import com.xliic.openapi.tree.ui.OpenAPITreeView;
import com.xliic.openapi.utils.WorkbenchUtils;

public class OpenAPIResourceChangeListener implements IResourceChangeListener {
	
    private IFile fromFile;
    private IFile toFile;

	@Override
	public void resourceChanged(IResourceChangeEvent event) {		
		
		IResourceDelta delta = event.getDelta();
		if (delta.getKind() != IResourceDelta.CHANGED) {
			return;
		}
		clear();
		
		try {
			visitDelta(delta);
			if (refactored()) {
				Display.getDefault().asyncExec(new Runnable() {
	        	    public void run() {
	        	    	update(toFile, fromFile);
	    				clear();
	                }
	            });
			}
		} 
		catch (CoreException e) {
			clear();
		}
	}
	
    private void visitDelta(IResourceDelta delta) throws CoreException {

    	delta.accept(new IResourceDeltaVisitor() {

            @Override
            public boolean visit(IResourceDelta delta) throws CoreException {
            	
                if (delta.getResource() instanceof IFile) {                    
                    if ((delta.getMovedFromPath() == null) && (delta.getMovedToPath() != null)) {
                    	fromFile = (IFile) delta.getResource();
                    }
                    if ((delta.getMovedFromPath() != null) && (delta.getMovedToPath() == null)) {
                    	toFile = (IFile) delta.getResource();
                    }
                } 
                return !refactored();
            }
        });
    }
    
    private void clear() {
    	fromFile = null;
    	toFile = null;
    }
    
    private boolean refactored() {
    	return (fromFile != null) && (toFile != null);
    }
    
    private void update(IFile newFile, IFile oldFile) {

    	IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        dataService.handleFileNameChanged(newFile, oldFile);

		Optional<IViewPart> to = WorkbenchUtils.findView(OpenAPITreeView.ID);
		if (to.isPresent() && (to.get() instanceof PanelManager)) {
			PanelManager manager = (PanelManager) to.get();
			manager.handleFileNameChanged(newFile, oldFile);
		}
		Optional<IViewPart> ro = WorkbenchUtils.findView(ReportPanelView.ID);
		if (ro.isPresent() && (ro.get() instanceof ReportManager)) {
			ReportManager manager = (ReportManager) ro.get();
			manager.handleFileNameChanged(newFile, oldFile);
		}
		Optional<IViewPart> hro = WorkbenchUtils.findView(HTMLReportPanelView.ID);
		if (hro.isPresent() && (hro.get() instanceof HTMLReportPanelView)) {
			HTMLReportPanelView manager = (HTMLReportPanelView) hro.get();
			manager.handleFileNameChanged(newFile, oldFile);
		}
    }
}
