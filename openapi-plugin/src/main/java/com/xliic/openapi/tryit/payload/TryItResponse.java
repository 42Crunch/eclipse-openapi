package com.xliic.openapi.tryit.payload;

import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.net.ssl.SSLException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.Payload;
import com.xliic.openapi.utils.Utils;

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
        result.put("headers", escapeAndGetHeaders());
        result.put("body", body == null ? "" : Utils.wrapJsonToString(body));
        return result;
    }

    public static boolean isSslError(Throwable error) {
        return error instanceof SSLException;
    }

    private List<List<String>> escapeAndGetHeaders() {
        List<List<String>> result = new LinkedList<>();
        for (List<String> pair : headers) {
            result.add(Arrays.asList(pair.get(0), Utils.wrapJsonToString(pair.get(1))));
        }
        return result;
    }
}
