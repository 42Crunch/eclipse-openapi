package com.xliic.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanelView;

public class ShowForSelectedFileAction extends Action {

    private final ReportPanelView view;
    private final FilterState filterState;

    public ShowForSelectedFileAction(ReportPanelView view) {    	
        super(OpenApiBundle.message("openapi.action.show.file"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.file"));
		setImageDescriptor(OpenAPIImages.File);
        this.view = view;
        this.filterState = view.getFilterState();
        setChecked(filterState.isShowSelectedFileOnly());
    }

    @Override
    public void run() {
        filterState.setShowSelectedFileOnly(isChecked());
        view.reloadAndRestoreExpansion();
    }
}
