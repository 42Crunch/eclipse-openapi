package com.xliic.openapi.report;

import static com.xliic.openapi.utils.NetUtils.getHttpClient;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.openapi.Endpoints;

import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class AuditAPIs {

    private static final String USER_AGENT = "Eclipse/" + ApplicationInfo.getInstance().getFullVersion();

    public static class Sync {

        @NotNull
        public static Response getKDB() throws IOException {
            Request request = getRequestBuilder(Endpoints.getKdbUrl()).build();
            return getHttpClient().newCall(request).execute();
        }

        @NotNull
        public static Response getTokenByEmail(@NotNull String email, boolean optIn) throws IOException {
            RequestBody body = new FormBody.Builder().add("email", email).add("opt-in", String.valueOf(optIn)).build();
            Request request = getRequestBuilder(Endpoints.getFreemiumdUrl() + "/api/v1/anon/token").post(body).build();
            return getHttpClient().newCall(request).execute();
        }
    }

    public static void getKDB(@NotNull Callback callback) throws IOException {
        Request request = getRequestBuilder(Endpoints.getKdbUrl()).build();
        getHttpClient().newCall(request).enqueue(callback);
    }

    private static Request.Builder getRequestBuilder(String url) {
        return new Request.Builder()
                .url(url)
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT);
    }
}
