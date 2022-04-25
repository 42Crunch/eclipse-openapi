package com.xliic.core.actionSystem;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

@FunctionalInterface
public interface DataContext {

  @Nullable
  Object getData(@NotNull String dataId);

  DataContext EMPTY_CONTEXT = dataId -> null;

  @SuppressWarnings("unchecked")
  @Nullable
  default <T> T getData(@NotNull DataKey<T> key) {
    return (T)getData(key.getName());
  }
}
