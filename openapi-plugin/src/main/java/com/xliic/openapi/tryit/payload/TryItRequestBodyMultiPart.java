package com.xliic.openapi.tryit.payload;

import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public class TryItRequestBodyMultiPart extends TryItRequest {

    public TryItRequestBodyMultiPart(@NotNull String url,
                                     @NotNull String method,
                                     @NotNull Map<String, String> headers,
                                     @Nullable Object body,
                                     @Nullable String id,
                                     boolean rejectUnauthorized) {
        super(url, method, headers, body, id, rejectUnauthorized);
    }

    @SuppressWarnings("unchecked")
    @Override
    public @Nullable RequestBody restoreBody() {
        MultipartBody.Builder builder = new MultipartBody.Builder();
        builder.setType(MultipartBody.FORM);
        for (List<String> pair : (List<List<String>>) Objects.requireNonNull(body)) {
            builder.addFormDataPart(pair.get(0), pair.get(1));
        }
        headers.keySet().removeIf("content-type"::equalsIgnoreCase);
        return builder.build();
    }
}
