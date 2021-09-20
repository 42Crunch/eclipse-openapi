package com.xliic.openapi.report.tree.ui;

import java.util.Optional;

import org.eclipse.ui.IViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.project.Project;
import com.xliic.openapi.report.tree.ReportManager;
import com.xliic.openapi.utils.WorkbenchUtils;

public class ReportPanel {

	public static ReportManager getInstance(@NotNull Project project) {
		Optional<IViewPart> opt = WorkbenchUtils.findView2(ReportPanelView.ID);
		return opt.isPresent() ? (ReportManager) opt.get() : null;
	}
}
