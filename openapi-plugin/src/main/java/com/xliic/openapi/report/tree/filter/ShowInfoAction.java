package com.xliic.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanelView;

public class ShowInfoAction extends Action {

    private final ReportPanelView view;
    private final FilterState filterState;

    public ShowInfoAction(ReportPanelView view) {    	
        super(OpenApiBundle.message("openapi.action.show.info"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.info"));
		setImageDescriptor(OpenAPIImages.ReportInfo);
        this.view = view;
        this.filterState = view.getFilterState();
        setChecked(filterState.isShowInfo());
    }

    @Override
    public void run() {
        filterState.setShowInfo(isChecked());
        view.reloadAndRestoreExpansion();
    }
}
