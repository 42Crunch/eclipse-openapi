package com.xliic.openapi.refs.external;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;

public class ApprovedHostConfig {

    @NotNull
    private final String host;
    @NotNull
    private final String header;
    @NotNull
    private final String prefix;
    @NotNull
    private final String token;

    public ApprovedHostConfig(@NotNull String host) {
        this(host, "", "", "");
    }

    public ApprovedHostConfig(@NotNull String host, @NotNull String header, @NotNull String prefix, @NotNull String token) {
        this.host = host;
        this.header = header;
        this.prefix = prefix;
        this.token = token;
    }

    public boolean hasToken() {
        return !token.isEmpty();
    }

    public @NotNull String getHeaderName() {
        return header.isEmpty() ? "Authorization" : header;
    }

    public @NotNull String getHeaderValue() {
        return (prefix.isEmpty() ? "Bearer" : prefix) + " " + token;
    }

    @NotNull
    public Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("host", host);
        result.put("header", header);
        result.put("prefix", prefix);
        result.put("token", token);
        return result;
    }
}
