package com.xliic.core.ui.popup;

import org.eclipse.jface.text.Position;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.ui.components.JComponent;

public class ComponentPopupBuilder {
	
	private final JComponent content;
	private final JComponent preferableFocusComponent; 

	public ComponentPopupBuilder(@NotNull JComponent content, @Nullable JComponent preferableFocusComponent) {
		this.content = content;
		this.preferableFocusComponent = preferableFocusComponent;
	}
	
	@NotNull
	public ComponentPopupBuilder setProject(@NotNull Project project) {
		return this;
	}
	
	@NotNull
	public ComponentPopupBuilder setCancelOnClickOutside(boolean cancelOnClickOutside) {
		return this;
	}
	
	@NotNull
	public ComponentPopupBuilder setFocusable(boolean focusable) {
		return this;
	}
	
	@NotNull
	public ComponentPopupBuilder setResizable(boolean resizable) {
		return this;
	}
	
	@NotNull
	public ComponentPopupBuilder setCancelOnOtherWindowOpen(boolean cancelOnOtherWindowOpen) {
		return this;
	}
	
	@NotNull
	public JBPopup createPopup(@NotNull Editor editor, @NotNull Position position) {
        return new JBPopup(editor, position, content, preferableFocusComponent);
	}
}
