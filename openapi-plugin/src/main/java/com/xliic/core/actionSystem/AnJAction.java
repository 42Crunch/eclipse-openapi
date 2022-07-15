package com.xliic.core.actionSystem;

import org.eclipse.jface.action.Action;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.Icon;

public abstract class AnJAction extends Action implements Presentation {
	
	public AnJAction(@Nullable String text, @Nullable String description, @Nullable Icon icon) {
		super(text);
		setImageDescriptor(icon == null ? null : icon.get());
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
	
	public void update(@NotNull AnJActionEvent event) {
		event.getPresentation().setEnabled(true);
	}
	
	public final @NotNull Presentation getTemplatePresentation() {
		return this;
	}
	
	@Override
	public void setIcon(@Nullable Icon icon) {
		setImageDescriptor(icon == null ? null : icon.get());
    }
    
	@Override
	public void setDescription(@NotNull String description) {
		super.setDescription(description);
    }
	
	public abstract void actionPerformed(@NotNull AnJActionEvent anActionEvent);
}
