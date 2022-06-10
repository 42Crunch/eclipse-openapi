package com.xliic.core.actionSystem;

import org.eclipse.jface.action.Action;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.Icon;

public abstract class AnJAction extends Action {
	
	public AnJAction(@Nullable String text, @Nullable String description, @Nullable Icon icon) {
		super(text);
		setImageDescriptor(icon.get());
	}
	
	@Override
	public void run() {
		actionPerformed(new AnJActionEvent(this));
	}
	
	public void update() {
		AnJActionEvent e = new AnJActionEvent(this);
		update(e);
		setEnabled(e.isEnabled());
	}
	
	public abstract void update(@NotNull AnJActionEvent e);
	
	public abstract void actionPerformed(@NotNull AnJActionEvent anActionEvent);
}
