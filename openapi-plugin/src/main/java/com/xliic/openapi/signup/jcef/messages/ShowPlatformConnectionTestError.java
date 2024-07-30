package com.xliic.openapi.signup.jcef.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowPlatformConnectionTestError extends WebAppConsume {

    @NotNull
    private final String error;

    public ShowPlatformConnectionTestError(@NotNull String error) {
        super("showPlatformConnectionTestError");
        this.error = error;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("error", error);
        return result;
    }
}
