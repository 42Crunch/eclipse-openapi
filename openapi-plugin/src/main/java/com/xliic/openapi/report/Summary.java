package com.xliic.openapi.report;

import org.jetbrains.annotations.NotNull;

public class Summary {

    private final int all;
    private final boolean errors;
    private final boolean invalid;

    @NotNull
    private final Grade data;
    @NotNull
    private final Grade security;

    public Summary(boolean errors, boolean invalid, @NotNull Grade data, @NotNull Grade security) {
        this.errors = errors;
        this.invalid = invalid;
        this.data = data;
        this.security = security;
        all = data.getValue() + security.getValue();
    }

    public int getAll() {
        return all;
    }

    public boolean isErrors() {
        return errors;
    }

    public boolean isInvalid() {
        return invalid;
    }

    public @NotNull Grade getData() {
        return data;
    }

    public @NotNull Grade getSecurity() {
        return security;
    }
}
