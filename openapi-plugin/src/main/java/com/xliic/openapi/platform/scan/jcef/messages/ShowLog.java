package com.xliic.openapi.platform.scan.jcef.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowLog extends WebAppConsume {

    @NotNull
    private final String level;
    @NotNull
    private final String timestamp;
    @NotNull
    private final String message;

    public ShowLog(@NotNull String level, @NotNull String timestamp, @NotNull String message) {
        super("showLogMessage");
        this.level = level;
        this.timestamp = timestamp;
        this.message = message;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("level", level);
        result.put("timestamp", timestamp);
        result.put("message", message);
        return result;
    }
}
