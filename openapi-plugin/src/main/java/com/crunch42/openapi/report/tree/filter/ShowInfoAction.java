package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

public class ShowInfoAction extends Action {

    private final ReportManager manager;
    private final FilterState filterState;

    public ShowInfoAction(ReportManager manager) {    	
        super(OpenApiBundle.message("openapi.action.show.info"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.info"));
		setImageDescriptor(OpenAPIImages.ReportInfo);
        this.manager = manager;
        this.filterState = manager.getFilterState();
        setChecked(filterState.isShowInfo());
    }

    @Override
    public void run() {
        filterState.setShowInfo(isChecked());
        manager.reloadAndRestoreExpansion();
    }
}
