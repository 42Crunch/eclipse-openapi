package com.xliic.openapi.tryit.jcef.ui;

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
import com.xliic.openapi.tryit.jcef.JCEFTryItPanel;

public class JCEFTryItPanelView extends PanelViewPart {

    public JCEFTryItPanelView() {
        super(ToolWindowId.TRY_IT);
    }

    @Override
    public Disposable createPanel(@NotNull Project project, @NotNull ToolWindow window, @NotNull Composite parent) {
        return new JCEFTryItPanel(project, window, parent);
    }

    @Override
    public void createEmptyControl(Composite parent) {
        new Label(parent, SWT.NULL).setText("42Crunch Platform Credentials are not defined");
    }

    @Override
    public boolean initControl(@NotNull Project project) {
        return PlatformConnection.isPlatformUsed();
    }
}
