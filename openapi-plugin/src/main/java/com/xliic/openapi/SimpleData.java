package com.xliic.openapi;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class SimpleData {

    @NotNull
    private final Map<String, Object> data;

    public SimpleData(@NotNull Map<String, Object> data) {
        this.data = data;
    }

    public @NotNull Map<String, Object> getData() {
        return data;
    }
}
