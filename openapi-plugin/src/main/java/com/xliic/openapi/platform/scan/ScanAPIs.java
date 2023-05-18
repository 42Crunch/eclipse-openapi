package com.xliic.openapi.platform.scan;

import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.URL;
import java.util.Base64;
import java.util.HashMap;
import java.util.Objects;

import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.PlatformAPIs;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ScanAPIs {

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public static class Sync {
        public static boolean http2Ping(@NotNull String services) throws IOException {
            URL url = new URL("https://" + services);
            SSLSocketFactory sslSocketFactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
            try (SSLSocket socket = (SSLSocket) sslSocketFactory.createSocket()) {
                socket.connect(new InetSocketAddress(url.getHost(), url.getPort()), 5000);
                socket.startHandshake();
                return socket.isConnected();
            }
        }
    }

    @NotNull
    public static Response listScanReports(@NotNull String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanReports", apiId)).build();
        return client.newCall(request).execute();
    }

    @NotNull
    public static Response listScanConfigs(@NotNull String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanConfigurations", apiId)).build();
        return client.newCall(request).execute();
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
		return client.newCall(request).execute();
	}

    @NotNull
    public static Response readScanReport(@NotNull String reportId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/scanReports/%s", reportId)).build();
        return client.newCall(request).execute();
    }

    public static void deleteAPI(String apiId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v1/apis/%s", apiId)).delete().build();
        Response response = client.newCall(request).execute();
        response.close();
    }

    @NotNull
    public static Response readScanConfig(@NotNull String configId) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/scanConfigurations/%s", configId)).build();
        return client.newCall(request).execute();
    }

    @NotNull
    public static Response createDefaultScanConfig(@NotNull String apiId) throws IOException {
        @SuppressWarnings("serial")
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", "default");
        }}));
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v2/apis/%s/scanConfigurations/default", apiId)).post(body).build();
        return client.newCall(request).execute();
    }

    @NotNull
    public static Response searchCollections(@NotNull String name) throws IOException {
        Request request = PlatformAPIs.getRequestBuilder(String.format("api/v1/search/collections?collectionName=%s", name)).build();
        return client.newCall(request).execute();
    }

    @NotNull
    public static Response createCollection(@NotNull String name) throws IOException {
        @SuppressWarnings("serial")
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        Request request = PlatformAPIs.getRequestBuilder("api/v1/collections").post(body).build();
        return client.newCall(request).execute();
    }

    @NotNull
    public static Response createAPI(@NotNull String collectionId, @NotNull String name, @NotNull String text) throws IOException {
        @SuppressWarnings("serial")
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("cid", collectionId);
            put("name", name);
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        Request request = PlatformAPIs.getRequestBuilder("api/v2/apis").post(body).build();
        return client.newCall(request).execute();
    }
}
