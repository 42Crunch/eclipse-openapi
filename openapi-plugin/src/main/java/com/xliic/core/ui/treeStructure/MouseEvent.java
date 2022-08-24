package com.xliic.core.ui.treeStructure;

import org.eclipse.jface.action.IMenuManager;
import org.jetbrains.annotations.NotNull;

public class MouseEvent {

    public static final int BUTTON1 = 1;
    public static final int BUTTON3 = 3;

    private final int button;
    private final boolean doubleClick;
    private final IMenuManager menu;

    private final int x;
    private final int y;
    private final Object source;

    public MouseEvent() {
        this.button = BUTTON1;
        this.doubleClick = true;
        this.menu = null;
        this.x = 0;
        this.y = 0;
        this.source = null;
    }

    public MouseEvent(int button) {
        this.button = button;
        this.doubleClick = false;
        this.menu = null;
        this.x = 0;
        this.y = 0;
        this.source = null;
    }

    public MouseEvent(@NotNull IMenuManager menu) {
        this.button = BUTTON3;
        this.doubleClick = false;
        this.menu = menu;
        this.x = 0;
        this.y = 0;
        this.source = null;
    }

    public MouseEvent(@NotNull Object source, int x, int y) {
        this.button = 0;
        this.doubleClick = false;
        this.menu = null;
        this.x = x;
        this.y = y;
        this.source = source;
    }

    public boolean isLeftMouseButton() {
        return button == BUTTON1;
    }

    public boolean isRightMouseButton() {
        return button == BUTTON3;
    }

    public boolean isDoubleClick() {
        return doubleClick;
    }

    public IMenuManager getMenu() {
        return menu;
    }

    public Object getSource() {
        return source;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
