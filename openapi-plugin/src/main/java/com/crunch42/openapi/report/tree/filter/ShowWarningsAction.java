package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

public class ShowWarningsAction extends Action {

    private final ReportManager manager;
    private final FilterState filterState;

    public ShowWarningsAction(ReportManager manager) {    	
        super(OpenApiBundle.message("openapi.action.show.warnings"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.warnings"));
		setImageDescriptor(OpenAPIImages.ReportWarning);
        this.manager = manager;
        this.filterState = manager.getFilterState();
        setChecked(filterState.isShowWarning());
    }

    @Override
    public void run() {
        filterState.setShowWarning(isChecked());
        manager.reloadAndRestoreExpansion();
    }
}
