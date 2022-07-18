package com.xliic.core.wm;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;

public class RegisterToolWindowTask {
	
	private final String id;
	@SuppressWarnings("unused")
	private final Icon icon;
	@SuppressWarnings("unused")
	private final ToolWindowAnchor anchor;
	
	public RegisterToolWindowTask(@NotNull String id, @NotNull Icon icon, @NotNull ToolWindowAnchor anchor) {
		this.id = id;
		this.icon = icon;
		this.anchor = anchor;
	}

	public static RegisterToolWindowTask notClosable(@NotNull String id, @NotNull Icon icon, @NotNull ToolWindowAnchor anchor)  {
		return new RegisterToolWindowTask(id, icon, anchor);
	}
	
	public String getId() {
		return id;
	}
}
