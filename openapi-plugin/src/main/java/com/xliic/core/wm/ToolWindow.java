package com.xliic.core.wm;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.util.EclipseWorkbenchUtil;

public class ToolWindow {

    private final IWorkbenchPage page;
    private final IWorkbenchPart part;
    private final List<AnJAction> titleActions = new LinkedList<>();
    private Composite searchParent;

    public ToolWindow(@NotNull IWorkbenchPage page, @NotNull IWorkbenchPart part) {
        this.page = page;
        this.part = part;
        searchParent = null;
    }

    public boolean isActive() {
        return isVisible();
    }

    public void activate(@Nullable Runnable runnable) {
        // It means simply to show the view
        show(runnable);
    }

    public void show(@Nullable Runnable runnable) {
        EclipseWorkbenchUtil.showView(getId(), null, IWorkbenchPage.VIEW_ACTIVATE);
    }

    public boolean isVisible() {
        return page.isPartVisible(part);
    }

    public void hide(@Nullable Runnable runnable) {
        page.hideView((IViewPart) part);
    }

    public boolean isDisposed() {
        return EclipseWorkbenchUtil.findView(getId()).isEmpty();
    }

    public IViewPart getView() {
        return (IViewPart) part;
    }

    public void remove() {
        // It means simply to hide the view
        hide(null);
    }

    public void setTitleActions(List<AnJAction> titleActions) {
        this.titleActions.addAll(titleActions);
    }

    public List<AnJAction> getTitleActions() {
        return titleActions;
    }

    public void updateTitleActions() {
        for (AnJAction action : getTitleActions()) {
            action.update();
        }
    }

    public String getId() {
        return ((IViewPart) part).getViewSite().getId();
    }

    @Nullable
    public PanelViewPart getPanelViewPart() {
        return part instanceof PanelViewPart ? (PanelViewPart) part : null;
    }

	public Composite getSearchParent() {
		return searchParent;
	}

	public void setSearchParent(Composite searchParent) {
		this.searchParent = searchParent;
	}
}
