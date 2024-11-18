package com.xliic.openapi.platform;

import static com.xliic.openapi.utils.NetUtils.getJsonRequestBody;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.callback.EnqueueCallback;
import com.xliic.openapi.utils.Utils;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class PlatformAPIs {

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public static class Sync {
        public static Response readApi(@NotNull String apiId, boolean spec) throws IOException {
            Request request = getRequestBuilder(String.format("api/v1/apis/%s?specfile=%b", apiId, spec)).build();
            return client.newCall(request).execute();
        }

        public static Response readAuditReport(@NotNull String apiId) throws IOException {
            //noinspection SpellCheckingInspection
            Request request = getRequestBuilder(String.format("api/v1/apis/%s/assessmentreport", apiId)).build();
            return client.newCall(request).execute();
        }

        public static Response testConnection() throws IOException {
            Request request = getRequestBuilder("api/v2/collections?page=1&perPage=1").build();
            return client.newCall(request).execute();
        }

        public static Response testConnection(String platformUrl, String platformApiToken) throws IOException {
            Request request = getTestConnectionRequestBuilder(platformUrl, platformApiToken).build();
            return client.newCall(request).execute();
        }
        
        @NotNull
        public static Response readAuditCompliance(@NotNull String taskId) throws IOException {
            Request request = getRequestBuilder(
                    String.format("api/v2/sqgs/audit/reportComplianceStatus/%s?readSqg=true&readReport=false", taskId)).build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response readAuditReportSqgTodo(@NotNull String taskId) throws IOException {
            Request request = getRequestBuilder(String.format("api/v2/sqgs/audit/todo/%s", taskId)).build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response listApis(@NotNull String collectionId) throws IOException {
            Request request = getRequestBuilder(String.format("api/v2/collections/%s/apis?withTags=true&perPage=0", collectionId)).build();
            return client.newCall(request).execute();
        }
        
        @NotNull
        public static Response getCollectionNamingConvention() throws IOException {
            Request request = getRequestBuilder("api/v1/organizations/me/settings/collectionNamingConvention").build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response getApiNamingConvention() throws IOException {
            Request request = getRequestBuilder("api/v1/organizations/me/settings/apiNamingConvention").build();
            return client.newCall(request).execute();
        }

        @NotNull
        public static Response getTags() throws IOException {
            Request request = getRequestBuilder("api/v2/tags").build();
            return client.newCall(request).execute();
        }
        
        @NotNull
        public static Response getCategories() throws IOException {
            Request request = getRequestBuilder("api/v2/categories").build();
            return client.newCall(request).execute();
        }
    }

    public static void listCollections(@NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v2/collections?listOption=%s&perPage=%d", "ALL", 0)).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void listApis(@NotNull String collectionId, @NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v1/collections/%s/apis?withTags=true&perPage=0", collectionId)).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void readApi(@NotNull String apiId, boolean spec, @NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v1/apis/%s?specfile=%b", apiId, spec)).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void readAuditReport(@NotNull String apiId, @NotNull EnqueueCallback callback) {
        try {
            //noinspection SpellCheckingInspection
            Request request = getRequestBuilder(String.format("api/v1/apis/%s/assessmentreport", apiId)).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    @SuppressWarnings("serial")
	public static void updateCollection(@NotNull String collectionId, String name, @NotNull EnqueueCallback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        try {
            Request request = getRequestBuilder(String.format("api/v1/collections/%s", collectionId)).put(body).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    @SuppressWarnings("serial")
	public static void updateAPIContent(@NotNull String apiId, String text, @NotNull EnqueueCallback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        try {
            Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).put(body).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    @SuppressWarnings("serial")
	public static void updateAPI(@NotNull String apiId, @NotNull String name, @NotNull EnqueueCallback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        try {
            Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).put(body).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void deleteCollection(@NotNull String collectionId, @NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v1/collections/%s", collectionId)).delete().build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void deleteAPI(@NotNull String apiId, @NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).delete().build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    @SuppressWarnings("serial")
	public static void createCollection(@NotNull String name, @NotNull EnqueueCallback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        try {
            Request request = getRequestBuilder("api/v1/collections").post(body).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    @SuppressWarnings("serial")
    public static void createAPI(@NotNull String collectionId,
                                 @NotNull String name,
                                 @NotNull String text,
                                 @NotNull List<String> tags,
                                 @NotNull EnqueueCallback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("cid", collectionId);
            put("name", name);
            put("tags", tags);
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        try {
            Request request = getRequestBuilder("api/v2/apis").post(body).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void getApiNamingConvention(@NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder("api/v1/organizations/me/settings/apiNamingConvention").build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void getCollectionNamingConvention(@NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder("api/v1/organizations/me/settings/collectionNamingConvention").build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void getDataDictionaries(@NotNull EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder("api/v2/dataDictionaries").build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static void getDataDictionaryFormats(String dictionaryId, EnqueueCallback callback) {
        try {
            Request request = getRequestBuilder(String.format("api/v2/dataDictionaries/%s/formats", dictionaryId)).build();
            client.newCall(request).enqueue(callback);
        } catch (IOException e) {
            callback.onFailure(e.toString());
        }
    }

    public static Request.Builder getRequestBuilder(String url) throws IOException {
        PlatformConnection options = PlatformConnection.getOptions();
        try {
            return new Request.Builder()
                    .url(String.format("%s/%s", options.getPlatformUrl(), url))
                    .addHeader("X-API-KEY", options.getApiToken())
                    .addHeader("X-42C-IDE", Boolean.TRUE.toString())
                    .addHeader("Accept", "application/json")
                    .addHeader("User-Agent", options.getUserAgent())
                    .addHeader("Referer", options.getReferer());
        } catch (Exception e) {
            throw new IOException(e.getMessage());
        }
    }
    
    private static Request.Builder getTestConnectionRequestBuilder(String platformUrl, String platformApiToken) throws IOException {
        try {
            return new Request.Builder()
                    .url(String.format("%s/api/v2/collections?page=1&perPage=1", platformUrl))
                    .addHeader("X-API-KEY", platformApiToken)
                    .addHeader("X-42C-IDE", Boolean.TRUE.toString())
                    .addHeader("Accept", "application/json")
                    .addHeader("User-Agent", Utils.getUserAgent())
                    .addHeader("Referer", "");
        } catch (Exception e) {
            throw new IOException(e.getMessage());
        }
    }
}
