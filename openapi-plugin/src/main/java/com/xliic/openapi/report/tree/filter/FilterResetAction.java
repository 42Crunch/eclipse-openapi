package com.xliic.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanelView;

public class FilterResetAction extends Action {

    private final ReportPanelView view;
    private final FilterState filterState;

    public FilterResetAction(ReportPanelView view) {    	
        super(OpenApiBundle.message("openapi.action.show.reset"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.reset"));
		setImageDescriptor(OpenAPIImages.Reset);
        this.view = view;
        this.filterState = view.getFilterState();
        setChecked(false);
    }

    @Override
    public boolean isChecked() {
        return false;
    }

    @Override
    public void run() {
        filterState.reset();
        view.cleanSearchTextArea();
        view.reloadAndRestoreExpansion();
    }
}
