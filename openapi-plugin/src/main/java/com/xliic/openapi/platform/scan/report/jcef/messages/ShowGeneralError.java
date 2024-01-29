package com.xliic.openapi.platform.scan.report.jcef.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowGeneralError extends WebAppConsume {

    @NotNull
    private final String message;
    @Nullable
    private final String code;
    @Nullable
    private final String details;

    public ShowGeneralError(@NotNull String message, @Nullable String code, @Nullable String details) {
        super("showGeneralError");
        this.message = message;
        this.code = code;
        this.details = details;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("message", message);
        if (code != null) {
            result.put("code", code);
        }
        if (details != null) {
            result.put("details", details);
        }
        return result;
    }
}
