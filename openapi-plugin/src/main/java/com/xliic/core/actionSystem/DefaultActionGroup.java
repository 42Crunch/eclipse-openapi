package com.xliic.core.actionSystem;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.action.IMenuManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.Icon;

public class DefaultActionGroup implements Presentation {

    private final IMenuManager menu;
    private final List<AnJAction> actions = new LinkedList<>();

    public DefaultActionGroup() {
        menu = null;
    }

    public DefaultActionGroup(@NotNull IMenuManager menu) {
        this.menu = menu;
    }

    public List<AnJAction> getActions() {
        return actions;
    }

    public static DefaultActionGroup createPopupGroup() {
        return new DefaultActionGroup();
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
        addAll(actionGroup.getActions());
    }

    public final @NotNull Presentation getTemplatePresentation() {
        return this;
    }

    @Override
    public void setIcon(@Nullable Icon icon) {
    }

    @Override
    public void setDescription(@NotNull String description) {
    }
}
