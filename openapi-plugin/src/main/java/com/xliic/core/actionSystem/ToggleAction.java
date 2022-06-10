package com.xliic.core.actionSystem;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;

public abstract class ToggleAction extends AnJAction {

	public ToggleAction(String text, String description, Icon icon) {
		super(text, description, icon);
		setChecked(isSelected(new AnJActionEvent(this)));
	}

	@Override
	public void actionPerformed(AnJActionEvent anActionEvent) {
		setSelected(anActionEvent, isChecked());
	}
    
	protected abstract boolean isSelected(@NotNull AnJActionEvent event);

    protected abstract void setSelected(@NotNull AnJActionEvent event, boolean flag);
}
