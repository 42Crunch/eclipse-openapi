package com.xliic.openapi.platform.dictionary.completion;

import org.jetbrains.annotations.NotNull;

public class DictionaryElement {

    @NotNull
    private final String element;
    @NotNull
    private final String presentableText;
    @NotNull
    private final String withTypeText;

    public DictionaryElement(@NotNull String element, @NotNull String presentableText, @NotNull String withTypeText) {
        this.element = element;
        this.presentableText = presentableText;
        this.withTypeText = withTypeText;
    }

    @NotNull
    public String getElement() {
        return element;
    }

    @NotNull
    public String getPresentableText() {
        return presentableText;
    }

    @NotNull
    public String getWithTypeText() {
        return withTypeText;
    }

    public boolean contains(@NotNull String prefix) {
        if ("o:".equals(prefix)) {
            return true;
        } else {
            if (isStandard()) {
                return presentableText.toLowerCase().startsWith(prefix);
            } else {
                return element.toLowerCase().contains(prefix);
            }
        }
    }

    public boolean isStandard() {
        return !element.equals(presentableText);
    }
}
