package com.xliic.openapi.graphql;

import static com.xliic.openapi.utils.NetUtils.getHttpClient;
import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Objects;
import java.util.UUID;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.PlatformAPIs;

import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class GraphQlAPIs {

    @SuppressWarnings("serial")
	@NotNull
    public static Response createAPI(@NotNull String collectionId,
                                     @NotNull String name,
                                     @NotNull String text) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("apiType", "GRAPHQL");
            put("name", name);
            put("technicalName", "graphql-api-" + UUID.randomUUID());
            put("yaml", false);
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/collections/%s/apis", collectionId)).post(body).build();
        return getHttpClient().newCall(request).execute();
    }
}
