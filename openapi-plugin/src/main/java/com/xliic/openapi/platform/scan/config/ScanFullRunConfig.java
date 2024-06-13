package com.xliic.openapi.platform.scan.config;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class ScanFullRunConfig extends ScanRunConfig {

    public ScanFullRunConfig(@NotNull String scanConfPath, @NotNull String config, @NotNull Map<String, String> env, @NotNull String rawOas) {
        super("", "", "", scanConfPath, config, env, rawOas);
    }
}
