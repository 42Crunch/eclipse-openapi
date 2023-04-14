package com.xliic.openapi.tryit.payload;

import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;

public class TryItRequestDefault extends TryItRequest {

    public TryItRequestDefault(@NotNull String url,
                               @NotNull String method,
                               @NotNull Map<String, String> headers,
                               @Nullable Object body,
                               @Nullable String id,
                               boolean rejectUnauthorized) {
        super(url, method, headers, body, id, rejectUnauthorized);
    }

    @Override
    public @Nullable RequestBody restoreBody() {
        return RequestBody.create(new byte[0], null);
    }
}
