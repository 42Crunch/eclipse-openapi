package com.xliic.openapi.report;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationInfo;

import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class AuditAPIs {

    private static final String TOKEN_URL = "https://stateless.42crunch.com/api/v1/anon/token";
    private static final String ASSESS_URL = "https://stateless.42crunch.com/api/v1/anon/assess/vscode";
    private static final String USER_AGENT = "IntelliJ/" + ApplicationInfo.getInstance().getFullVersion();
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public static class Sync {

        @NotNull
        public static Response getAuditReport(@NotNull String token, @NotNull String fileName, @NotNull String text) throws IOException {
            RequestBody part = RequestBody.create(text, MediaType.parse("application/json"));
            RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("specfile", fileName, part).build();
            Request request = getRequestBuilder(ASSESS_URL).addHeader("X-API-TOKEN", token).post(body).build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response getAuditReportByToken(String respToken, String token) throws IOException {
            Request request = getRequestBuilder(ASSESS_URL + "?token=" + respToken).addHeader("X-API-TOKEN", token).build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response getTokenByEmail(@NotNull String email) throws IOException {
            RequestBody body = new FormBody.Builder().add("email", email).build();
            Request request = getRequestBuilder(TOKEN_URL).post(body).build();
            return client.newCall(request).execute();
        }
    }
    private static Request.Builder getRequestBuilder(String url) {
        return new Request.Builder()
                .url(url)
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT);
    }
}
