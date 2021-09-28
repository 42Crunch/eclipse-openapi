package com.xliic.openapi.report.html.ui;

import java.util.Optional;

import org.eclipse.ui.IViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.project.Project;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.utils.WorkbenchUtils;

public class HTMLReportPanel {

	public static HTMLReportManager getInstance(@NotNull Project project) {
		Optional<IViewPart> opt = WorkbenchUtils.findView(HTMLReportPanelView.ID);
		return opt.isPresent() ? (HTMLReportManager) opt.get() : null;
	}
}
