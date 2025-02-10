package com.xliic.openapi.report;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.openapi.Endpoints;

import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class AuditAPIs {

    private static final String USER_AGENT = "Eclipse/" + ApplicationInfo.getInstance().getFullVersion();
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public static class Sync {

        @NotNull
        public static Response getKDB() throws IOException {
            Request request = getRequestBuilder(Endpoints.getKdbUrl()).build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response getTokenByEmail(@NotNull String email) throws IOException {
            RequestBody body = new FormBody.Builder().add("email", email).build();
            Request request = getRequestBuilder(Endpoints.getFreemiumdUrl() + "/api/v1/anon/token").post(body).build();
            return client.newCall(request).execute();
        }
    }

    public static void getKDB(@NotNull Callback callback) throws IOException {
        Request request = getRequestBuilder(Endpoints.getKdbUrl()).build();
        client.newCall(request).enqueue(callback);
    }

    private static Request.Builder getRequestBuilder(String url) {
        return new Request.Builder()
                .url(url)
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT);
    }
}
