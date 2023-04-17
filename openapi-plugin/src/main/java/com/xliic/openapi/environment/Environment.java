package com.xliic.openapi.environment;

import com.xliic.openapi.settings.Settings;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class Environment {

    public static final String DEFAULT_KEY = "default";
    public static final String SECRETS_KEY = "secrets";
    public static final String SECRETS_PREFIX = "secrets.";

    @NotNull
    Map<String, Map<String, String>> environment = new HashMap<>();

    public Environment(@Nullable String def, @Nullable String secrets) {
        environment.put(DEFAULT_KEY, def == null ? new HashMap<>() : Settings.stringToMap(def));
        environment.put(SECRETS_KEY, secrets == null ? new HashMap<>() : Settings.stringToMap(secrets));
    }

    public Map<String, String> getDefault() {
        return environment.get(DEFAULT_KEY);
    }

    public Map<String, String> getSecrets() {
        return environment.get(SECRETS_KEY);
    }

    @NotNull
    public String replace(@NotNull String value) {
        // Secret format {{secrets.xxx}}
        if (value.startsWith("{{") && value.endsWith("}}")) {
            String name = value.replace("{{", "").replace("}}", "");
            if (name.startsWith(SECRETS_PREFIX)) {
                String key = name.substring(SECRETS_PREFIX.length());
                return getSecrets().getOrDefault(key, value);
            }
            return getDefault().getOrDefault(name, value);
        }
        return value;
    }

    public @NotNull Map<String, Map<String, String>> getEnvironment() {
        return environment;
    }
}