package com.xliic.openapi.tryit.payload;

import okhttp3.MediaType;
import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;
import java.util.Objects;

public class TryItRequestBodyJson extends TryItRequest {

    public TryItRequestBodyJson(@NotNull String url,
                                @NotNull String method,
                                @NotNull Map<String, String> headers,
                                @Nullable Object body,
                                @Nullable String id,
                                boolean rejectUnauthorized) {
        super(url, method, headers, body, id, rejectUnauthorized);
    }

    @Override
    public @Nullable RequestBody restoreBody() {
        return RequestBody.create((String) Objects.requireNonNull(body), MediaType.parse("application/json"));
    }
}
