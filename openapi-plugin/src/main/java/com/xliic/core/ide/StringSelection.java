package com.xliic.core.ide;

import org.jetbrains.annotations.NotNull;

public class StringSelection {
	
	private final String text;
	
	public StringSelection(@NotNull String text) {
		this.text = text;
	}
	
	public String get() {
		return text;
	}
}
