package com.xliic.openapi.capture.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class SetCaptureToken extends WebAppConsume {

    @NotNull
    private final String token;

    public SetCaptureToken(@NotNull String token) {
        super("setCaptureToken");
        this.token = token;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        return token;
    }
}
