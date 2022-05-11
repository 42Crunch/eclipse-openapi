package com.xliic.core.wm;

import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ToolWindow {
	
	private boolean isActive;
	private final IWorkbenchPage page;
	private final IWorkbenchPart part;

	public ToolWindow(@NotNull IWorkbenchPage page, @NotNull IWorkbenchPart part) {
		this.page = page;
		this.part = part;
		this.isActive = false;
	}
	
	public boolean isActive() {
		return isActive;
	}
	
	public void activate(@Nullable Runnable runnable) {
		page.activate(part);
		isActive = true;
	}
	
	public void show(@Nullable Runnable runnable) {
		// todo:
	}
	
	public boolean isVisible() {
		return true;  // todo
	}

	public void hide(@Nullable Runnable runnable) {
		// todo:
	}
}
