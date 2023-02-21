package com.xliic.core.ui.components;

import org.eclipse.swt.graphics.RGB;
import org.jetbrains.annotations.NotNull;

public interface JTextComponent {

    static final RGB VALIDATION_ERROR_BACKGROUND = new RGB(254, 132, 132);

    String getText();

    void setText(String text);

    void setEnabled(boolean enabled);

    @NotNull
    Document getDocument();

    void setValid();

    void setInvalid(@NotNull String message);
}
