package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

public class ScanRunConfig {

    @NotNull
    private final String config;
    @NotNull
    private final Map<String, String> env;
    @NotNull
    private final String rawOas;

    public ScanRunConfig(@NotNull String config, @NotNull Map<String, String> env, @NotNull String rawOas) {
        this.config = config;
        this.env = env;
        this.rawOas = rawOas;
    }

    @NotNull
    public String getConfig() {
        return Base64.getUrlEncoder().encodeToString(config.getBytes(StandardCharsets.UTF_8));
    }

    @NotNull
    public Map<String, String> getEnv() {
        return env;
    }

    @NotNull
    public String getRawOas() {
        return rawOas;
    }
}
