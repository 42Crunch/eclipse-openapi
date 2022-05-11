package com.xliic.openapi.report.tree.filter;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;

import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.tree.ui.ReportPanelView;

public class ShowErrorAction extends Action {

    private final ReportPanelView view;
    private final FilterState filterState;

    public ShowErrorAction(ReportPanelView view) {    	
        super(OpenApiBundle.message("openapi.action.show.errors"), IAction.AS_CHECK_BOX);
		setToolTipText(OpenApiBundle.message("openapi.action.show.errors"));
		setImageDescriptor(OpenAPIImages.ReportError);
        this.view = view;
        this.filterState = view.getFilterState();
        setChecked(filterState.isShowError());
    }

    @Override
    public void run() {
        filterState.setShowError(isChecked());
        view.reloadAndRestoreExpansion();
    }
}
