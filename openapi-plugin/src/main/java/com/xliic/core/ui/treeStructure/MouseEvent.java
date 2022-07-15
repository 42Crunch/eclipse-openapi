package com.xliic.core.ui.treeStructure;

import org.eclipse.jface.action.IMenuManager;
import org.jetbrains.annotations.NotNull;

public class MouseEvent {
	
    public static final int BUTTON1 = 1;
    public static final int BUTTON3 = 3;
	
	private final int button;
	private final boolean doubleClick;
	private final IMenuManager menu;
	
	public MouseEvent() {
		this.button = BUTTON1;
		this.doubleClick = true;
		this.menu = null;
	}
	
	public MouseEvent(int button) {
		this.button = button;
		this.doubleClick = false;
		this.menu = null;
	}

	public MouseEvent(@NotNull IMenuManager menu) {
		this.button = BUTTON3;
		this.doubleClick = false;
		this.menu = menu;
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
}
