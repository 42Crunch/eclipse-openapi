package com.xliic.openapi.webapp.http.payload;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class HttpError {

    private static final String NO_CERT_MSG = "unable to find valid certification path to requested target";

    @NotNull
    private final String message;
    @NotNull
    private final String code;
    @Nullable
    protected final String id;
    private final boolean sslError;

    public HttpError(@NotNull String message, @Nullable String id, boolean sslError) {
        this.message = message;
        this.code = "";
        this.id = id;
        this.sslError = sslError;
    }

    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        Map<String, Object> error = new HashMap<>();
        error.put("message", getMessage());
        error.put("code", code);
        error.put("sslError", sslError);
        result.put("error", error);
        return result;
    }

    private String getMessage() {
        if (message.endsWith(NO_CERT_MSG)) {
            return StringUtils.capitalize(NO_CERT_MSG);
        } else {
            return message;
        }
    }
}
