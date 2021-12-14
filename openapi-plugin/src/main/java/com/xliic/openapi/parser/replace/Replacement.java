package com.xliic.openapi.parser.replace;

public class Replacement {

	private final String pointer;
	private final String value;
	private final boolean replaceKey;

	public Replacement(String pointer, String value, boolean replaceKey) {
		this.pointer = pointer;
		this.value = value;
		this.replaceKey = replaceKey;
	}

	public Replacement(String pointer, String value) {
		this(pointer, value, false);
	}

	public String getPointer() {
		return pointer;
	}

	public String getValue() {
		return value;
	}

	public boolean isReplaceKey() {
		return replaceKey;
	}
}
