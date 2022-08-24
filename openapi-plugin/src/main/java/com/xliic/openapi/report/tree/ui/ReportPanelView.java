package com.xliic.openapi.report.tree.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;

public class ReportPanelView extends PanelViewPart {

	public ReportPanelView() {
		super(ToolWindowId.OPEN_API_REPORT);
	}

	@Override
	protected Disposable createPanel(@NotNull Project project, @NotNull ToolWindow window, @NotNull Composite parent) {
		return new ReportPanel(project, window, parent);
	}
}
