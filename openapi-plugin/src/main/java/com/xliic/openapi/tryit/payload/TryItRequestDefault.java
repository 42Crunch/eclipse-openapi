package com.xliic.openapi.tryit.payload;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import okhttp3.RequestBody;

public class TryItRequestDefault extends TryItRequest {

    public TryItRequestDefault(@NotNull String url,
                               @NotNull String method,
                               @NotNull Map<String, String> headers,
                               @Nullable Object body,
                               boolean rejectUnauthorized) {
        super(url, method, headers, body, rejectUnauthorized);
    }

    @Override
    public @Nullable RequestBody restoreBody() {
        return RequestBody.create(new byte[0], null);
    }
}
