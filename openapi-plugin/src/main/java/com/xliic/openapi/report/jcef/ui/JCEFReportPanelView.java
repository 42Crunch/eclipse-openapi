package com.xliic.openapi.report.jcef.ui;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.part.ViewPart;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.jcef.JCEFReportPanel;

public class JCEFReportPanelView extends ViewPart implements Disposable {

    private JCEFReportPanel panel;

    @Override
    public void createPartControl(Composite parent) {
        Project project = Project.getInstance();
        ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(ToolWindowId.OPEN_API_HTML_REPORT);
        try {
            panel = new JCEFReportPanel(project, toolWindow, parent);
        }
        catch (Throwable e) {
            setNotAvailableInfo(parent, e.getMessage());
        }
    }

    private void setNotAvailableInfo(Composite parent, String msg) {
        panel = null;
        Label label = new Label(parent, SWT.NULL);
        label.setText("Unable to create an instance of JCEF browser: " + msg);
    }

    @Override
    public void setFocus() {}

    @Override
    public void dispose() {
        if (panel != null) {
            Project project = Project.getInstance();
            project.getMessageBus().connect().unsubscribe(panel);
            panel.dispose();
            // Eclipse Development Note
            // Help to avoid multiple dispose calls
            panel = null;
        }
    }
}
