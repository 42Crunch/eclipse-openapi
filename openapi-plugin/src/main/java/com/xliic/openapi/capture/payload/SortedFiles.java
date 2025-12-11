package com.xliic.openapi.capture.payload;

import java.util.List;

import org.jetbrains.annotations.NotNull;

public class SortedFiles {

    @NotNull
    private final List<String> env;
    @NotNull
    private final List<String> postman;
    @NotNull
    private final List<String> other;

    public SortedFiles(@NotNull List<String> env, @NotNull List<String> postman, @NotNull List<String> other) {
        this.env = env;
        this.postman = postman;
        this.other = other;
    }

    public @NotNull List<String> getEnv() {
        return env;
    }

    public @NotNull List<String> getPostman() {
        return postman;
    }

    public @NotNull List<String> getOther() {
        return other;
    }
}
