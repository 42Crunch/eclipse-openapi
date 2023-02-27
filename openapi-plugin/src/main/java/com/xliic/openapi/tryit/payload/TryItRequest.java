package com.xliic.openapi.tryit.payload;

import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Map;

public abstract class TryItRequest {

    @NotNull
    protected final String url;
    @NotNull
    protected final String method;
    @NotNull
    protected final Map<String, String> headers;
    @Nullable
    protected final Object body;
    @Nullable
    protected final String id;
    protected final boolean rejectUnauthorized;

    protected TryItRequest(@NotNull String url,
                           @NotNull String method,
                           @NotNull Map<String, String> headers,
                           @Nullable Object body,
                           @Nullable String id,
                           boolean rejectUnauthorized) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
        this.id = id;
        this.rejectUnauthorized = rejectUnauthorized;
    }

    @NotNull
    public static TryItRequest getInstance(@NotNull String url,
                                           @NotNull String method,
                                           @NotNull Map<String, String> headers,
                                           @Nullable Object body,
                                           @Nullable String id,
                                           boolean rejectUnauthorized) {
        if (body != null) {
            final String contentType = getContentType(headers);
            if (body instanceof List && "multipart/form-data".equals(contentType)) {
                return new TryItRequestBodyMultiPart(url, method, headers, body, id, rejectUnauthorized);
            } else if (body instanceof String) {
                if ("application/x-www-form-urlencoded".equals(contentType)) {
                    return new TryItRequestBodyForm(url, method, headers, body, id, rejectUnauthorized);
                } else {
                    return new TryItRequestBodyJson(url, method, headers, body, id, rejectUnauthorized);
                }
            }
        }
        return new TryItRequestDefault(url, method, headers, body, id, rejectUnauthorized);
    }

    @NotNull
    public String getUrl() {
        return url;
    }

    @NotNull
    public String getMethod() {
        return method;
    }

    @NotNull
    public Map<String, String> getHeaders() {
        return headers;
    }

    public boolean isRejectUnauthorized() {
        return rejectUnauthorized;
    }

    public boolean isHTTPS() {
        try {
            return "https".equals(new URL(url).getProtocol());
        } catch (MalformedURLException e) {
            return false;
        }
    }

    @Nullable
    public abstract RequestBody restoreBody();

    private static String getContentType(@NotNull Map<String, String> headers) {
        for (Map.Entry<String, String> entry : headers.entrySet()) {
            String name = entry.getKey().toLowerCase();
            if ("content-type".equals(name)) {
                return entry.getValue();
            }
        }
        return null;
    }

    public @Nullable String getId() {
        return id;
    }
}
