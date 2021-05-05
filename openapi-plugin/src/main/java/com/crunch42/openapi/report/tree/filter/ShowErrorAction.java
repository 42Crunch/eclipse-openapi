package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

public class ShowErrorAction extends Action {

    private final ReportManager manager;
    private final FilterState filterState;

    public ShowErrorAction(ReportManager manager) {    	
        super(OpenApiBundle.message("openapi.action.show.errors"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.errors"));
		setImageDescriptor(OpenAPIImages.ReportError);
        this.manager = manager;
        this.filterState = manager.getFilterState();
        setChecked(filterState.isShowError());
    }

    @Override
    public void run() {
        filterState.setShowError(isChecked());
        manager.reloadAndRestoreExpansion();
    }
}
