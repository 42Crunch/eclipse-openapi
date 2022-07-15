package com.xliic.core.ui;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.components.JTextField;

public final class ValidationInfo {

  @NotNull
  private final String message;

  public ValidationInfo(@NotNull String message) {
    this(message, null);
  }
  
  public ValidationInfo(@NotNull String message, @Nullable JTextField component) {
	  this.message = message;
  }

  public String getMessage() {
	  return message;
  }
}
