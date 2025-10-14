package com.xliic.openapi.capture;

import com.xliic.openapi.Endpoints;
import com.xliic.openapi.capture.payload.PrepareOptions;
import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import static com.xliic.openapi.utils.NetUtils.HTTP_CLIENT;
import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

public class CaptureAPI {

    @SuppressWarnings("serial")
	public static Response prepare(CaptureConnection connection, PrepareOptions prepareOptions) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("base_path", prepareOptions.getBasePath());
            put("servers", prepareOptions.getServers());
        }}));
        Request request = getRequestBuilder(connection, "prepare").post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response upload(CaptureConnection connection,
                                  String quickgenId,
                                  List<String> files,
                                  ProgressRequestBody.ProgressListener listener) throws IOException, URISyntaxException {
        MultipartBody.Builder builder = new MultipartBody.Builder();
        builder.setType(MultipartBody.FORM);
        for (String fileName : files) {
            RequestBody part = new ProgressRequestBody(new File(new URI(fileName)), "text/csv", listener);
            builder.addFormDataPart("file", fileName, part);
        }
        RequestBody body = builder.build();
        Request request = getRequestBuilder(connection, String.format("%s/prepare/upload-file", quickgenId)).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response start(CaptureConnection connection, String quickgenId) throws IOException {
        RequestBody body = RequestBody.create("", null);
        Request request = getRequestBuilder(connection, String.format("%s/execution/start", quickgenId)).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response status(CaptureConnection connection, String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/execution/status", quickgenId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response download(CaptureConnection connection, String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/results/openapi", quickgenId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static Response delete(CaptureConnection connection, String quickgenId) throws IOException {
        Request request = getRequestBuilder(connection, String.format("%s/delete", quickgenId)).delete().build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @SuppressWarnings("serial")
	public static Response requestDiscover(String freemiumToken) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("freemiumToken", freemiumToken);
        }}));
        Request request = getDiscoverRequestBuilder().post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @SuppressWarnings("serial")
	public static Response requestDiscover(String platformUrl, String apiKey) throws IOException {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("platformUrl", platformUrl);
            put("apiKey", apiKey);
        }}));
        Request request = getDiscoverRequestBuilder().post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
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
