package com.xliic.openapi.launchpad.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;

public class LaunchPadPanelView extends PanelViewPart {

    public LaunchPadPanelView() {
        super(ToolWindowId.LAUNCH_PAD, true);
    }

    @Override
    protected Disposable createPanel(@NotNull Project project,
                                     @NotNull ToolWindow window,
                                     @NotNull Composite parent,
                                     @NotNull ViewPartHandler handler) {
        return new LaunchPadPanel(project, window, parent);
    }

    @Override
    public void dispose() {
    	super.dispose();
    	project.getMessageBus().connect().unsubscribe(this);
    }
}
