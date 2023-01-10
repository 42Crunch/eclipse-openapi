package com.xliic.openapi.tryit.payload;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.net.ssl.SSLException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.Payload;

public class TryItResponse implements Payload {

    @NotNull
    private final String httpVersion;
    private final int statusCode;
    @Nullable
    private final String statusMessage;
    @NotNull
    private final List<List<String>> headers;
    @Nullable
    private final String body;

    public TryItResponse(@NotNull String httpVersion,
                         int statusCode,
                         @Nullable String statusMessage,
                         @NotNull List<List<String>> headers,
                         @Nullable String body) {
        this.httpVersion = httpVersion;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.headers = headers;
        this.body = body;
    }

    @Override
    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("httpVersion", httpVersion);
        result.put("statusCode", statusCode);
        result.put("statusMessage", statusMessage);
        result.put("headers", headers);
        result.put("body", body == null ? "" : body);
        return result;
    }

    public static boolean isSslError(Throwable error) {
        return error instanceof SSLException;
    }
}
