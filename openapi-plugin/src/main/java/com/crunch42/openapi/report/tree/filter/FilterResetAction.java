package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

public class FilterResetAction extends Action {

    private final ReportManager manager;
    private final FilterState filterState;

    public FilterResetAction(ReportManager manager) {    	
        super(OpenApiBundle.message("openapi.action.show.reset"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.reset"));
		setImageDescriptor(OpenAPIImages.Reset);
        this.manager = manager;
        this.filterState = manager.getFilterState();
        setChecked(false);
    }

    @Override
    public boolean isChecked() {
        return false;
    }

    @Override
    public void run() {
        filterState.reset();
        manager.cleanSearchTextArea();
        manager.reloadAndRestoreExpansion();
    }
}
