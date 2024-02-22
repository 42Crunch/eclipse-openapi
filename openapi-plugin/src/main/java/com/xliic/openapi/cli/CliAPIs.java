package com.xliic.openapi.cli;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class CliAPIs {

    private static final OkHttpClient OK_HTTP_CLIENT = new OkHttpClient().newBuilder().build();

    public static class Sync {

        @NotNull
        public static Response getManifest(String repository) throws IOException {
            Request request = getRequestBuilder(repository + "/42c-ast-manifest.json").build();
            return OK_HTTP_CLIENT.newCall(request).execute();
        }
    }

    private static Request.Builder getRequestBuilder(String url) {
        return new Request.Builder().url(url).addHeader("Accept", "application/json");
    }
}
