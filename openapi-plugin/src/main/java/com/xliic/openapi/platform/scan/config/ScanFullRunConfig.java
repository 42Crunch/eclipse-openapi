package com.xliic.openapi.platform.scan.config;

import org.jetbrains.annotations.NotNull;

import java.util.Map;

public class ScanFullRunConfig extends ScanRunConfig {

    public ScanFullRunConfig(@NotNull String scanConfPath, @NotNull String config, @NotNull Map<String, String> env, @NotNull String rawOas) {
        super("", "", "", scanConfPath, config, env, rawOas);
    }
}
