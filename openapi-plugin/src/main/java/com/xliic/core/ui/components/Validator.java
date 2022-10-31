package com.xliic.core.ui.components;

import org.eclipse.swt.graphics.RGB;
import org.jetbrains.annotations.NotNull;

public interface Validator {

    static final RGB VALIDATION_ERROR_BACKGROUND = new RGB(254, 132, 132);

    void setValid();

    void setInvalid(@NotNull String message);

    void addValidationListener(@NotNull ValidationListener listener);

    void removeValidationListener();
}
