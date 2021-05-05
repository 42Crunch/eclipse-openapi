package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;
import org.eclipse.ui.IWorkbenchWindow;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.report.tree.ReportManager;

public class ShowFilterAction extends Action {

	private IWorkbenchWindow window;
    private final ReportManager manager;

    public ShowFilterAction(IWorkbenchWindow window, ReportManager manager) {    	
        super("Filter", IAction.AS_CHECK_BOX);
		setToolTipText("Filter");
		setImageDescriptor(OpenAPIImages.Filter);
		this.window = window;
		this.manager = manager;
    }

    @Override
    public void run() {
    	FilterDialogWrapper filterSelectionDialog = new FilterDialogWrapper(window.getShell(), manager, this);
		filterSelectionDialog.open();
    }
}
