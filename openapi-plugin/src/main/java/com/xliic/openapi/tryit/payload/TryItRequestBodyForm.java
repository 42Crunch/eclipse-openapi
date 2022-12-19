package com.xliic.openapi.tryit.payload;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import okhttp3.FormBody;
import okhttp3.RequestBody;

public class TryItRequestBodyForm extends TryItRequest {

    public TryItRequestBodyForm(@NotNull String url,
                                @NotNull String method,
                                @NotNull Map<String, String> headers,
                                @Nullable Object body,
                                boolean rejectUnauthorized) {
        super(url, method, headers, body, rejectUnauthorized);
    }

    @Override
    public @Nullable RequestBody restoreBody() {
        FormBody.Builder builder = new FormBody.Builder();
        String bodyData = (String) Objects.requireNonNull(body);
        for (String data : bodyData.split("&")) {
            String [] pair = data.split("=");
            builder.add(URLDecoder.decode(pair[0], StandardCharsets.UTF_8), URLDecoder.decode(pair[1], StandardCharsets.UTF_8));
        }
        headers.keySet().removeIf("content-type"::equalsIgnoreCase);
        return builder.build();
    }
}
