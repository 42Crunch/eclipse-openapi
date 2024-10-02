package com.xliic.openapi.webapp.http.payload;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.net.ssl.SSLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HttpResponse {

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

    public HttpResponse(@NotNull String httpVersion,
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
        if (id != null) {
            result.put("id", id);
        }
        Map<String, Object> response = new HashMap<>();
        response.put("httpVersion", httpVersion);
        response.put("statusCode", statusCode);
        response.put("statusMessage", statusMessage);
        response.put("headers", headers);
        response.put("body", body == null ? "" : body);
        result.put("response", response);
        return result;
    }

    public static boolean isSslError(Throwable error) {
        return error instanceof SSLException;
    }
}
