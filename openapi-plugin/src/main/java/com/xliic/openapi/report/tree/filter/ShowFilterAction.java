package com.xliic.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;
import org.eclipse.ui.IWorkbenchWindow;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.report.tree.ui.ReportPanelView;

public class ShowFilterAction extends Action {

	private IWorkbenchWindow window;
    private final ReportPanelView view;

    public ShowFilterAction(IWorkbenchWindow window, ReportPanelView view) {    	
        super("Filter", IAction.AS_CHECK_BOX);
		setToolTipText("Filter");
		setImageDescriptor(OpenAPIImages.Filter);
		this.window = window;
		this.view = view;
    }

    @Override
    public void run() {
    	FilterDialogWrapper filterSelectionDialog = new FilterDialogWrapper(window.getShell(), view, this);
		filterSelectionDialog.open();
    }
}
