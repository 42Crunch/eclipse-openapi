package com.xliic.core.ui.popup;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.components.JComponent;

public class JBPopupFactory {

	private static JBPopupFactory factory;

	public JBPopupFactory() {
    }

	public static JBPopupFactory getInstance() {
		if (factory == null) {
			factory = new JBPopupFactory();
		}
		return factory;
	}
	
	@NotNull
	public ComponentPopupBuilder createComponentPopupBuilder(@NotNull JComponent content, @Nullable JComponent preferableFocusComponent) {
		return new ComponentPopupBuilder(content, preferableFocusComponent);
		
	}
}
