package com.xliic.openapi.platform.scand;

import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.AUTH_HEADER;
import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.utils.Utils;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ScandAPIs {

    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient().newBuilder().build();

    public static class Sync {

        @NotNull
        public static Response createJob(@NotNull String token,
                                         @NotNull String platformService,
                                         @NotNull String scandImage,
                                         @NotNull Object env) throws IOException {
            @SuppressWarnings("serial")
			RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
                put("token", token);
                put("platformService", platformService);
                put("scandImage", scandImage);
                put("env", env);
            }}));
            Request request = getRequestBuilder("api/job", true).post(body).build();
            return HTTP_CLIENT.newCall(request).execute();
        }

        @NotNull
        public static Response readJobStatus(@NotNull String name) throws IOException {
            Request request = getRequestBuilder(String.format("api/job/%s", name), true).build();
            return HTTP_CLIENT.newCall(request).execute();
        }

        @NotNull
        public static Response readJobLog(@NotNull String name) throws IOException {
            Request request = getRequestBuilder(String.format("api/logs/%s", name), false).build();
            return HTTP_CLIENT.newCall(request).execute();
        }

        public static void deleteJob(@NotNull String name) throws IOException {
            Request request = getRequestBuilder(String.format("api/job/%s", name), true).delete().build();
            HTTP_CLIENT.newCall(request).execute().close();
        }

        @NotNull
        public static Response testConnection() throws IOException {
            Request request = getRequestBuilder("api/job", true).build();
            return HTTP_CLIENT.newCall(request).execute();
        }
    }

    private static Request.Builder getRequestBuilder(String url, boolean isJson) {
        ScandManagerConnection connection = new ScandManagerConnection();
        Request.Builder builder = new Request.Builder().url(String.format("%s/%s", connection.getUrl(), url))
                .addHeader("User-Agent", Utils.getUserAgent());
        if (isJson) {
            builder.addHeader("Accept", "application/json");
        }
        if (AUTH_HEADER.equals(connection.getAuth()) && connection.isHeaderAvailable()) {
            Map<String, String> header = connection.getHeader();
            builder.addHeader(header.get("name"), header.get("value"));
        }
        return builder;
    }
}
