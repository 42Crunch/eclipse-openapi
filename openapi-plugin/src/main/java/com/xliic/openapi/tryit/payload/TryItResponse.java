package com.xliic.openapi.tryit.payload;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.net.ssl.SSLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TryItResponse {

    @NotNull
    private final String httpVersion;
    private final int statusCode;
    @Nullable
    private final String statusMessage;
    @NotNull
    private final List<List<String>> headers;
    @Nullable
    private final String body;
    @Nullable
    protected final String id;

    public TryItResponse(@NotNull String httpVersion,
                         int statusCode,
                         @Nullable String statusMessage,
                         @NotNull List<List<String>> headers,
                         @Nullable String body,
                         @Nullable String id) {
        this.httpVersion = httpVersion;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.headers = headers;
        this.body = body;
        this.id = id;
    }

    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("httpVersion", httpVersion);
        result.put("statusCode", statusCode);
        result.put("statusMessage", statusMessage);
        result.put("headers", headers);
        result.put("body", body == null ? "" : body);
        if (id != null) {
            result.put("id", id);
        }
        return result;
    }

    public static boolean isSslError(Throwable error) {
        return error instanceof SSLException;
    }
}
