package com.xliic.core.codeInsight.lookup;

import org.jetbrains.annotations.NotNull;

public abstract class LookupElement {

    private final String element;

    public LookupElement(@NotNull String element) {
        this.element = element;
    }

    @NotNull
    public String getElement() {
        return element;
    }
}
