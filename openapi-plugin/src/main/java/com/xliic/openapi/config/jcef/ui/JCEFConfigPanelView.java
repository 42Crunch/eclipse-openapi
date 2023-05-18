package com.xliic.openapi.config.jcef.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.config.jcef.JCEFConfigPanel;

public class JCEFConfigPanelView extends PanelViewPart {

    public JCEFConfigPanelView() {
        super(ToolWindowId.CONFIG);
    }

    @Override
    public Disposable createPanel(@NotNull Project project,
                                  @NotNull ToolWindow window,
                                  @NotNull Composite parent,
                                  @NotNull ViewPartHandler handler) {
        return new JCEFConfigPanel(project, window, parent, handler);
    }
}
