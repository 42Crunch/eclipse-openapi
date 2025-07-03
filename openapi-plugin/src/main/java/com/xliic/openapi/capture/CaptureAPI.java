package com.xliic.openapi.capture;

import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import com.xliic.openapi.Endpoints;
import com.xliic.openapi.capture.payload.PrepareOptions;

import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class CaptureAPI {

    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient().newBuilder().build();

    @SuppressWarnings("serial")
	public static Response prepare(String token, PrepareOptions prepareOptions) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("base_path", prepareOptions.getBasePath());
            put("servers", prepareOptions.getServers());
        }}));
        Request request = getRequestBuilder("prepare", token).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response upload(String token, String quickgenId,
                                  List<String> files,
                                  ProgressRequestBody.ProgressListener listener) throws IOException {
        MultipartBody.Builder builder = new MultipartBody.Builder();
        builder.setType(MultipartBody.FORM);
        for (String fileName : files) {
            RequestBody part = new ProgressRequestBody(new File(fileName), "text/csv", listener);
            builder.addFormDataPart("file", fileName, part);
        }
        RequestBody body = builder.build();
        Request request = getRequestBuilder(String.format("%s/prepare/upload-file", quickgenId), token).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response start(String token, String quickgenId) throws IOException {
        RequestBody body = RequestBody.create("", null);
        Request request = getRequestBuilder(String.format("%s/execution/start", quickgenId), token).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response status(String token, String quickgenId) throws IOException {
        Request request = getRequestBuilder(String.format("%s/execution/status", quickgenId), token).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response download(String token, String quickgenId) throws IOException {
        Request request = getRequestBuilder(String.format("%s/results/openapi", quickgenId), token).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response delete(String token, String quickgenId) throws IOException {
        Request request = getRequestBuilder(String.format("%s/delete", quickgenId), token).delete().build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    private static Request.Builder getRequestBuilder(String url, String token) throws IOException {
        try {
            return new Request.Builder()
                    .url(String.format("%s/capture/api/1.0/quickgen/%s", Endpoints.getFreemiumdUrl(), url))
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "token " + token);
        } catch (Exception e) {
            throw new IOException(e.getMessage());
        }
    }
}
