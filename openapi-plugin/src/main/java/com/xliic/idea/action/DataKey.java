package com.xliic.idea.action;

import org.jetbrains.annotations.NonNls;
import org.jetbrains.annotations.NotNull;

public final class DataKey<T> {

	@NotNull
	public static <T> DataKey<T> create(@NotNull @NonNls String name) {
		return new DataKey<T>();
	}
}
