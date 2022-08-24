package com.xliic.core.ui;

import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.Separator;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;

public abstract class PanelViewPart extends ViewPart implements Disposable {

    private final String id;
    private final Project project;

    private ToolWindow window;
    private Disposable panel;
    private IToolBarManager toolBarManager;

    public PanelViewPart(@NotNull String id) {
        this.id = id;
        project = Project.getInstance();
    }

    @Override
    public void init(IViewSite site, IMemento memento) throws PartInitException {
        if (memento != null) {
            restoreState(project, memento);
        }
        super.init(site, memento);
        toolBarManager = site.getActionBars().getToolBarManager();
    }

    @Override
    public void saveState(IMemento memento) {
        if (memento != null) {
            saveState(project, memento);
        }
        super.saveState(memento);
    }

    @Override
    public void createPartControl(Composite parent) {
        if (initControl(project)) {
            window = ToolWindowManager.getInstance(project).getToolWindow(id);
            if (window != null) {
                panel = createPanel(project, window, parent);
                for (AnJAction action : window.getTitleActions()) {
                    if (action instanceof Separator) {
                        toolBarManager.add(new org.eclipse.jface.action.Separator());
                    } else {
                        toolBarManager.add(action);
                    }
                }
                refreshToolBarActions();
            }
        } else {
            createEmptyControl(parent);
        }
    }

    public void refreshToolBarActions() {
        if (isReady()) {
            window.updateTitleActions();
        }
    }

    public boolean isReady() {
        return window != null && panel != null;
    }

    @Override
    public void setFocus() {}

    @Override
    public void dispose() {
        if (panel != null) {
            // It's OK even if the panel has not been subscribed
            project.getMessageBus().connect().unsubscribe(panel);
            panel.dispose();
            // Eclipse Development Note
            // Help to avoid multiple dispose calls
            panel = null;
            window = null;
            toolBarManager = null;
        }
    }

    protected void saveState(@NotNull Project project, @NotNull IMemento memento) {}
    protected void restoreState(@NotNull Project project, @NotNull IMemento memento) {}
    protected void createEmptyControl(Composite parent) {}
    protected boolean initControl(@NotNull Project project) {
        return true;
    }

    protected abstract Disposable createPanel(@NotNull Project project, @NotNull ToolWindow window, @NotNull Composite parent);
}
