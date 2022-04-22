package com.xliic.core.util;

import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ObjectUtils {

	  @Contract(value = "null, _ -> null", pure = true)
	  public static @Nullable <T> T tryCast(@Nullable Object obj, @NotNull Class<T> clazz) {
	    return clazz.isInstance(obj) ? clazz.cast(obj) : null;
	  }
}
