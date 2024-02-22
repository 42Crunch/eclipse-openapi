package com.xliic.openapi.platform.scan;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class ScanRunConfig {

    @NotNull
    private final String path;
    @NotNull
    private final String method;
    @NotNull
    private final String operationId;
    @NotNull
    private final String config;
    @NotNull
    private final Map<String, String> env;
    @NotNull
    private final String rawOas;
    @NotNull
    private final String scanConfPath;

    public ScanRunConfig(@NotNull String path,
                         @NotNull String method,
                         @NotNull String operationId,
                         @NotNull String scanConfPath,
                         @NotNull String config,
                         @NotNull Map<String, String> env,
                         @NotNull String rawOas) {
        this.path = path;
        this.method = method;
        this.operationId = operationId;
        this.scanConfPath = scanConfPath;
        this.config = config;
        this.env = env;
        this.rawOas = rawOas;
    }

    public @NotNull String getPath() {
        return path;
    }

    public @NotNull String getMethod() {
        return method;
    }

    public @NotNull String getOperationId() {
        return operationId;
    }

    @NotNull
    public String getConfig() {
        return config;
    }

    @NotNull
    public String getEncodedConfig() {
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

    public @NotNull String getScanConfPath() {
        return scanConfPath;
    }
}
