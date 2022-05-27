package com.xliic.core.util;

import java.util.Collection;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ArrayUtilRt {
	
	public static final String[] EMPTY_STRING_ARRAY = new String[0];

	@NotNull
	public static String[] toStringArray(@Nullable Collection<String> collection) {
	  return collection == null || collection.isEmpty() ? EMPTY_STRING_ARRAY : collection.toArray(EMPTY_STRING_ARRAY);
	}
}
