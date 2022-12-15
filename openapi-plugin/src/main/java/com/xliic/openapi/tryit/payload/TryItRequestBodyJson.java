package com.xliic.openapi.tryit.payload;

import java.util.Map;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import okhttp3.MediaType;
import okhttp3.RequestBody;

public class TryItRequestBodyJson extends TryItRequest {

    public TryItRequestBodyJson(@NotNull String url,
                                @NotNull String method,
                                @NotNull Map<String, String> headers,
                                @Nullable Object body,
                                boolean rejectUnauthorized) {
        super(url, method, headers, body, rejectUnauthorized);
    }

    @Override
    public @Nullable RequestBody restoreBody() {
        return RequestBody.create((String) Objects.requireNonNull(body), MediaType.parse("application/json"));
    }
}
