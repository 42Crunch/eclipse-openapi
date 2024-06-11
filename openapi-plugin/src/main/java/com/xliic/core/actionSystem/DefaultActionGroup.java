package com.xliic.core.actionSystem;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.action.IMenuManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.eclipse.jface.action.MenuManager;
import com.xliic.core.util.Icon;

public class DefaultActionGroup implements Presentation {

	@Nullable
    private final IMenuManager menu;
	@Nullable
    private final String popupGroupName;
    @NotNull
    private final List<AnJAction> actions = new LinkedList<>();

    public DefaultActionGroup(@Nullable String popupGroupName) {
        menu = null;
        this.popupGroupName = popupGroupName;
    }

    public DefaultActionGroup(@NotNull IMenuManager menu) {
        this.menu = menu;
        popupGroupName = null;
    }

    public List<AnJAction> getActions() {
        return actions;
    }

    public static DefaultActionGroup createPopupGroup(@Nullable String popupGroupName) {
        return new DefaultActionGroup(popupGroupName);
    }

    public static DefaultActionGroup createPopupGroup(@NotNull IMenuManager menu) {
        return new DefaultActionGroup(menu);
    }

    public final void add(@NotNull AnJAction action) {
        if (menu != null) {
            menu.add(action);
            action.update();
        }
        actions.add(action);
    }

    public final void addAll(@NotNull Collection<? extends AnJAction> actionList) {
        if (menu != null) {
            for (AnJAction action : actionList) {
                menu.add(action);
                action.update();
            }
        }
        actions.addAll(actionList);
    }

    public final void add(@NotNull DefaultActionGroup actionGroup) {
    	String name = actionGroup.getPopupGroupName();
        if (menu != null) {
        	MenuManager menuManager = new MenuManager(name);
        	List<AnJAction> actionList = actionGroup.getActions();
            for (AnJAction action : actionList) {
            	menuManager.add(action);
                action.update();
            }
            menu.add(menuManager);
            actions.addAll(actionList);
        }
    }

    public final @NotNull Presentation getTemplatePresentation() {
        return this;
    }

    public @Nullable String getPopupGroupName() {
		return popupGroupName;
	}

	@Override
    public void setIcon(@Nullable Icon icon) {
    }

    @Override
    public void setDescription(@NotNull String description) {
    }
}
