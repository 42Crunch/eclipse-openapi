package com.xliic.openapi.preferences;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;

public class Preferences {

    @NotNull
    private final Map<String, Object> preferences;

    public Preferences() {
        this(new HashMap<>());
    }

    public Preferences(@NotNull Map<String, Object> preferences) {
        this.preferences = preferences;
    }

    public @NotNull Map<String, Object> getPreferences() {
        return preferences;
    }

    public boolean isEmpty() {
        return preferences.isEmpty();
    }

    public Preferences merge(@NotNull Preferences newPrefs) {
        Map<String, Object> result = new HashMap<>(preferences);
        result.putAll(newPrefs.preferences);
        return new Preferences(result);
    }
}
