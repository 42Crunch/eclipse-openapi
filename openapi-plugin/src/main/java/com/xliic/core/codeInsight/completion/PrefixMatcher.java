package com.xliic.core.codeInsight.completion;

import org.jetbrains.annotations.NotNull;

public class PrefixMatcher {

    @NotNull
    private final String prefix;

    public PrefixMatcher(@NotNull String prefix) {
        this.prefix = prefix;
    }

    public final @NotNull String getPrefix() {
        return prefix;
    }
}
