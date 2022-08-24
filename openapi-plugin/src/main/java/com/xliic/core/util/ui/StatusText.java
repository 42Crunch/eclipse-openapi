package com.xliic.core.util.ui;

import org.jetbrains.annotations.NotNull;

public class StatusText {

    private String text;

    public StatusText setText(@NotNull String text) {
        this.text = text;
        return this;
    }

    public String getText() {
        return text;
    }
}
