package com.xliic.openapi.capture;

import static com.xliic.openapi.utils.NetUtils.getHttpClient;
import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.Endpoints;
import com.xliic.openapi.capture.payload.PrepareOptions;

import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class CaptureAPI {

    @SuppressWarnings("serial")
	public static Response prepare(@NotNull CaptureConnection connection, @NotNull PrepareOptions prepareOptions) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("base_path", prepareOptions.getBasePath());
            put("servers", prepareOptions.getServers());
        }}));
        Request request = getRequestBuilder(connection, "prepare").post(body).build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response upload(@NotNull CaptureConnection connection,
                                  @NotNull String quickgenId,
                                  @NotNull String dataFile,
                                  @Nullable String envFile,
                                  @NotNull ProgressRequestBody.ProgressListener listener) throws IOException, URISyntaxException {
        MultipartBody.Builder builder = new MultipartBody.Builder();
        builder.setType(MultipartBody.FORM);
        RequestBody dataPart = new ProgressRequestBody(new File(new URI(dataFile)), "text/csv", listener);
        builder.addFormDataPart("data_file", dataFile, dataPart);
        if (envFile != null) {
            RequestBody envPart = new ProgressRequestBody(new File(new URI(envFile)), "text/csv", listener);
            builder.addFormDataPart("env_file", envFile, envPart);
        }
        RequestBody body = builder.build();
        Request request = getRequestBuilder(connection, String.format("%s/prepare/upload-file", quickgenId)).post(body).build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response start(@NotNull CaptureConnection connection, @NotNull String quickgenId) throws IOException {
        RequestBody body = RequestBody.create("", null);
        Request request = getRequestBuilder(connection, String.format("%s/execution/start", quickgenId)).post(body).build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response status(@NotNull CaptureConnection connection, @NotNull String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/execution/status", quickgenId)).build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response download(@NotNull CaptureConnection connection, @NotNull String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/results/openapi", quickgenId)).build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response delete(@NotNull CaptureConnection connection, @NotNull String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/delete", quickgenId)).delete().build();
        return getHttpClient(true).newCall(request).execute();
    }

    public static Response summary(@NotNull CaptureConnection connection, @NotNull String quickgenId, @NotNull String fileId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/prepare/summary/files/%s", quickgenId, fileId)).build();
        return getHttpClient().newCall(request).execute();
    }

    @SuppressWarnings("serial")
	public static Response requestDiscover(@NotNull String freemiumToken) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("freemiumToken", freemiumToken);
        }}));
        Request request = getDiscoverRequestBuilder().post(body).build();
        return getHttpClient(true).newCall(request).execute();
    }

    @SuppressWarnings("serial")
	public static Response requestDiscover(@NotNull String platformUrl, @NotNull String apiKey) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("platformUrl", platformUrl);
            put("apiKey", apiKey);
        }}));
        Request request = getDiscoverRequestBuilder().post(body).build();
        return getHttpClient(true).newCall(request).execute();
    }

    private static Request.Builder getDiscoverRequestBuilder() throws IOException {
        try {
            return new Request.Builder()
                    .url(String.format("%s/api/v1/anon/discover", Endpoints.getFreemiumdUrl()))
                    .addHeader("Content-Type", "application/json");
        } catch (Exception e) {
            throw new IOException(e.getMessage());
        }
    }

    private static Request.Builder getRequestBuilder(CaptureConnection connection, String urlPrefix) throws IOException {
        try {
            return new Request.Builder()
                    .url(String.format("%s/capture/api/1.0/quickgen/%s", connection.getCaptureInstanceUrl(), urlPrefix))
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "token " + connection.getToken());
        } catch (Exception e) {
            throw new IOException(e.getMessage());
        }
    }
}
