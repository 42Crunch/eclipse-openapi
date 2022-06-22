package com.xliic.core.ui;

import org.jetbrains.annotations.NotNull;

public final class ValidationInfo {

  @NotNull
  private final String message;

  public ValidationInfo(@NotNull String message) {
    this.message = message;
  }
  
  public String getMessage() {
	  return message;
  }
}
