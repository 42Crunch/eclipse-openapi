package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import io.github.azagniotov.matcher.AntPathMatcher;

public class GlobMatcher {

    @NotNull
    private final AntPathMatcher matcher;

    public GlobMatcher() {
        matcher = new AntPathMatcher.Builder().build();
    }

    public boolean matches(String pattern, String value) {
        return matcher.isMatch(pattern, value);
    }
}
