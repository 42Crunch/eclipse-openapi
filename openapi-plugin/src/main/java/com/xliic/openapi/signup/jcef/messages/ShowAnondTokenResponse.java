package com.xliic.openapi.signup.jcef.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowAnondTokenResponse extends WebAppConsume {

    @NotNull
    private final String message;
    private final boolean success;

    public ShowAnondTokenResponse(boolean success, @NotNull String message) {
        super("showAnondTokenResponse");
        this.success = success;
        this.message = message;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("success", success);
        result.put("message", message);
        return result;
    }
}
