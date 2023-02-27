package com.xliic.openapi.platform.scan.jcef.ui;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.scan.jcef.JCEFScanPanel;
import com.xliic.openapi.platform.tree.ui.PlatformPanelView;

public class JCEFScanPanelView extends PanelViewPart {

    public JCEFScanPanelView() {
        super(ToolWindowId.SCAN);
    }

    @Override
    public Disposable createPanel(@NotNull Project project,
                                  @NotNull ToolWindow window,
                                  @NotNull Composite parent,
                                  @NotNull ViewPartHandler handler) {
        return new JCEFScanPanel(project, window, parent, handler);
    }

    @Override
    public void createEmptyControl(Composite parent) {
        new Label(parent, SWT.NULL).setText(PlatformPanelView.CREDENTIALS_NA_TEXT);
    }

    @Override
    public boolean initControl(@NotNull Project project) {
        return PlatformConnection.isPlatformIntegrationEnabled();
    }
}
