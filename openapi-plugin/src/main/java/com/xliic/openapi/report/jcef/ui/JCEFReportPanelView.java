package com.xliic.openapi.report.jcef.ui;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.part.ViewPart;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.jcef.JCEFReportPanel;

public class JCEFReportPanelView extends ViewPart implements Disposable {

	private JCEFReportPanel panel;

	@Override
	public void createPartControl(Composite parent) {
		Project project = OpenAPIAbstractUIPlugin.getInstance().getProject();
		ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(ToolWindowId.OPEN_API_HTML_REPORT);
		panel = new JCEFReportPanel(project, toolWindow, parent);
	}

	@Override
	public void setFocus() {
	}
	
	@Override
	public void dispose() {
		if (panel != null) {
			panel.dispose();	
		}
	}
}
