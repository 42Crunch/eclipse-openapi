package com.xliic.openapi.report.jcef.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.jcef.JCEFReportPanel;

public class JCEFReportPanelView extends PanelViewPart {

    public JCEFReportPanelView() {
        super(ToolWindowId.OPEN_API_HTML_REPORT);
    }

    @Override
    public Disposable createPanel(@NotNull Project project, @NotNull ToolWindow window, @NotNull Composite parent) {
        return new JCEFReportPanel(project, window, parent);
    }
}
