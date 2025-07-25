package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.utils.NetUtils.*;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Objects;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.PlatformAPIs;

import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ScanAPIs {

    public static class Sync {
        public static Response testConnection(@NotNull String services) throws IOException {
            Request request = new Request.Builder().url("https://" + services).get().build();
            return getOkHttpClientForTest().newCall(request).execute();
        }
    }

    @NotNull
    public static Response listScanReports(@NotNull String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanReports", apiId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response listScanConfigs(@NotNull String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanConfigurations", apiId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response createScanConfig(@NotNull String apiId,
            								@NotNull String name,
            								@NotNull String config,
            								boolean isNewApi) throws IOException {
		@SuppressWarnings("serial")
		RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
			put("name", name);
			if (isNewApi) {
				put("file", config);
			} else {
				put("scanConfiguration", config);
			}
		}}));
		Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanConfigurations", apiId)).post(body).build();
		return HTTP_CLIENT.newCall(request).execute();
	}

    @NotNull
    public static Response readScanReport(@NotNull String reportId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/scanReports/%s", reportId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    public static void deleteAPI(String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v1/apis/%s", apiId)).delete().build();
        Response response = HTTP_CLIENT.newCall(request).execute();
        response.close();
    }

    @NotNull
    public static Response readScanConfig(@NotNull String configId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/scanConfigurations/%s", configId)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response createDefaultScanConfig(@NotNull String apiId) throws IOException {
        @SuppressWarnings("serial")
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", "default");
        }}));
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanConfigurations/default", apiId)).post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response searchCollections(@NotNull String name) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v1/search/collections?collectionName=%s", name)).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response createCollection(@NotNull String name) throws IOException {
        @SuppressWarnings("serial")
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        Request request = PlatformAPIs.getRequestBuilder("api/v1/collections").post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }

    @NotNull
    public static Response createAPI(@NotNull String collectionId,
                                     @NotNull String name,
                                     @NotNull String text,
                                     @NotNull Set<String> tags) throws IOException {
        @SuppressWarnings("serial")
		RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("cid", collectionId);
            put("name", name);
            put("tags", tags);
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        Request request = PlatformAPIs.getRequestBuilder("api/v2/apis").post(body).build();
        return HTTP_CLIENT.newCall(request).execute();
    }
}
