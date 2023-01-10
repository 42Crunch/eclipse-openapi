package com.xliic.openapi.platform.scan;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.Payload;

public class Preferences implements Payload {

    @NotNull
    Map<String, Object> preferences;

    public Preferences() {
        preferences = new HashMap<>();
    }

    public Preferences(@NotNull Map<String, Object> preferences) {
        this.preferences = preferences;
    }

    @Override
    public Map<String, Object> getProperties() {
        return preferences;
    }
}
