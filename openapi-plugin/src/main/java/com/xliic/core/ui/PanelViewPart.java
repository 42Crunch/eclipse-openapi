package com.xliic.core.ui;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.Separator;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;

public abstract class PanelViewPart extends ViewPart implements Disposable {

    private static final Map<String, ViewPartHandler> LOAD_HANDLERS = new HashMap<>();

    public static enum Status { INIT, READY, DISPOSED };

    public interface ViewPartHandler {
        void onReady();
    }

    private final String id;
    protected final Project project;

    private ToolWindow window;
    protected Disposable panel;
    private IToolBarManager toolBarManager;
    private volatile Status status;

    public PanelViewPart(@NotNull String id) {
        this.id = id;
        project = Project.getInstance();
        status = Status.INIT;
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
                try {
                    panel = createPanel(project, window, parent, () -> {
                        synchronized (status) {
                            status = Status.READY;
                            ViewPartHandler handler = LOAD_HANDLERS.remove(id);
                            if (handler != null) {
                                ApplicationManager.getApplication().invokeAndWait(handler::onReady, ModalityState.NON_MODAL);
                            }
                        }
                    });
                } catch (Throwable e) {
                    status = Status.DISPOSED;
                    panel = null;
                    Label label = new Label(parent, SWT.NULL);
                    label.setText("Unable to initialize JCEF browser: " + e.getMessage());
                }
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
            status = Status.READY;
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

    public void runWhenReady(@NotNull ViewPartHandler handler) {
        synchronized (status) {
            if (status == Status.READY) {
                handler.onReady();
            } else if (status == Status.INIT) {
                LOAD_HANDLERS.put(id, handler);
            } else {
                throw new RuntimeException("View part " + id + " is disposed");
            }
        }
    }

    @Override
    public void setFocus() {
    }

    @Override
    public void dispose() {
        status = Status.DISPOSED;
        removeContentLoadHandler(id);
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

    protected abstract Disposable createPanel(@NotNull Project project,
                                              @NotNull ToolWindow window,
                                              @NotNull Composite parent,
                                              @NotNull ViewPartHandler handler);

    // We need to draw UI widgets after this event, not after partOpened
    public void onViewPartBroughtToTop() {}

    public static void addContentLoadHandler(@NotNull String id, @NotNull ViewPartHandler handler) {
        LOAD_HANDLERS.put(id, handler);
    }

    public static void removeContentLoadHandler(@NotNull String id) {
        LOAD_HANDLERS.remove(id);
    }
}
