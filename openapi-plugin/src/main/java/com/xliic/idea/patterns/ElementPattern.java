package com.xliic.idea.patterns;

import org.jetbrains.annotations.Nullable;

public interface ElementPattern<T> {

	public boolean accepts(@Nullable Object var1);
}
