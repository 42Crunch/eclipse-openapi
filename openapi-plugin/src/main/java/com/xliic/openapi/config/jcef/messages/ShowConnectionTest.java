package com.xliic.openapi.config.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class ShowConnectionTest extends WebAppConsume {

    @NotNull
    private final String message;
    private final boolean success;

    public ShowConnectionTest(@NotNull String name,  boolean success, @NotNull String message) {
        super(name);
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
