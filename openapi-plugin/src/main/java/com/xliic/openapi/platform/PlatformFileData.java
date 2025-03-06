package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;

public class PlatformFileData {

    @NotNull
    private final String colId;
    @NotNull
    private final String apiId;
    private boolean waitForTargeting = false;

    public PlatformFileData(@NotNull String colId, @NotNull String apiId) {
        this.colId = colId;
        this.apiId = apiId;
    }

    public @NotNull String getColId() {
        return colId;
    }

    public @NotNull String getApiId() {
        return apiId;
    }

    public boolean isWaitForTargeting() {
        return waitForTargeting;
    }

    public void setWaitForTargeting(boolean waitForTargeting) {
        this.waitForTargeting = waitForTargeting;
    }
}
