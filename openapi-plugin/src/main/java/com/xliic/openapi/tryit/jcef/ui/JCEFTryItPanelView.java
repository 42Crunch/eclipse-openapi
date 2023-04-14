package com.xliic.openapi.tryit.jcef.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.tryit.jcef.JCEFTryItPanel;

public class JCEFTryItPanelView extends PanelViewPart {

    public JCEFTryItPanelView() {
        super(ToolWindowId.TRY_IT);
    }

    @Override
    public Disposable createPanel(@NotNull Project project,
                                  @NotNull ToolWindow window,
                                  @NotNull Composite parent,
                                  @NotNull ViewPartHandler handler) {
        return new JCEFTryItPanel(project, window, parent, handler);
    }
}
