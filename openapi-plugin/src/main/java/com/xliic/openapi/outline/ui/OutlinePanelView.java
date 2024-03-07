package com.xliic.openapi.outline.ui;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.utils.Utils;

public class OutlinePanelView extends PanelViewPart implements LafManagerListener {

    public OutlinePanelView() {
        super(ToolWindowId.OPEN_API, true);
        project.getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);
    }

    @Override
    protected Disposable createPanel(@NotNull Project project,
                                     @NotNull ToolWindow window,
                                     @NotNull Composite parent,
                                     @NotNull ViewPartHandler handler) {
        return new OutlinePanel(project, window, parent);
    }

    @Override
    public void lookAndFeelChanged(@NotNull LafManager source) {
    	((OutlinePanel) panel).fastReload();
    }

    @Override
    public void onViewPartBroughtToTop() {
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        if (file != null) {
            ((OutlinePanel) panel).handleSelectedFile(file);
        }
    }
    
    @Override
    public void dispose() {
    	super.dispose();
    	project.getMessageBus().connect().unsubscribe(this);
    }
}
