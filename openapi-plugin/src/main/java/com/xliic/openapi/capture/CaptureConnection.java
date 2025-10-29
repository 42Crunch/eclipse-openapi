package com.xliic.openapi.capture;

import org.jetbrains.annotations.NotNull;

public class CaptureConnection {

    @NotNull
    private final String token;
    @NotNull
    private final String captureInstanceUrl;

    public CaptureConnection(@NotNull String token, @NotNull String captureInstanceUrl) {
        this.token = token;
        this.captureInstanceUrl = captureInstanceUrl;
    }

    public @NotNull String getToken() {
        return token;
    }

    public @NotNull String getCaptureInstanceUrl() {
        return captureInstanceUrl;
    }
}
