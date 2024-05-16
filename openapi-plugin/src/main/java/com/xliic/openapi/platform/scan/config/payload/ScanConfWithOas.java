package com.xliic.openapi.platform.scan.config.payload;

import org.jetbrains.annotations.NotNull;

public class ScanConfWithOas {

    @NotNull
    private final String oas;
    @NotNull
    private final String scanconf;

    public ScanConfWithOas(@NotNull String oas, @NotNull String scanconf) {
        this.oas = oas;
        this.scanconf = scanconf;
    }

    public @NotNull String getOas() {
        return oas;
    }

    public @NotNull String getScanconf() {
        return scanconf;
    }
}
