package com.xliic.openapi.environment;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class Environment {

    public static final String DEFAULT_KEY = "default";
    public static final String SECRETS_KEY = "secrets";
    public static final String SECRETS_PREFIX = "secrets.";
    private static final ObjectMapper mapper = new ObjectMapper();
    @NotNull
    private final Map<String, Map<String, String>> environment = new HashMap<>();

    public Environment(@Nullable String def, @Nullable String secrets) {
        environment.put(DEFAULT_KEY, def == null ? new HashMap<>() : stringToMap(def));
        environment.put(SECRETS_KEY, secrets == null ? new HashMap<>() : stringToMap(secrets));
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
    
    @SuppressWarnings("unchecked")
    private static Map<String, String> stringToMap(@NotNull String value) {
        if (value.isEmpty()) {
            return new HashMap<>();
        }
        try {
            Map<String, Object> props = mapper.readValue(value, Map.class);
            return props.entrySet().stream().collect(Collectors.toMap(Map.Entry::getKey, e -> String.valueOf(e.getValue())));
        } catch (JsonProcessingException e) {
            return new HashMap<>();
        }
    }
}
