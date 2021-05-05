package com.crunch42.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.OpenApiBundle;
import com.crunch42.openapi.report.tree.ReportManager;

public class ShowForSelectedFileAction extends Action {

    private final ReportManager manager;
    private final FilterState filterState;

    public ShowForSelectedFileAction(ReportManager manager) {    	
        super(OpenApiBundle.message("openapi.action.show.file"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.file"));
		setImageDescriptor(OpenAPIImages.File);
        this.manager = manager;
        this.filterState = manager.getFilterState();
        setChecked(filterState.isShowSelectedFileOnly());
    }

    @Override
    public void run() {
        filterState.setShowSelectedFileOnly(isChecked());
        manager.reloadAndRestoreExpansion();
    }
}
