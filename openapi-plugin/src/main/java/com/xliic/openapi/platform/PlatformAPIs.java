package com.xliic.openapi.platform;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class PlatformAPIs {

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    public static void listCollections(Callback callback) {
        Request request = getRequestBuilder(String.format("api/v2/collections?listOption=%s&perPage=%d", "ALL", 0)).build();
        client.newCall(request).enqueue(callback);
    }

    public static void listApis(String collectionId, Callback callback) {
        Request request = getRequestBuilder(String.format("api/v1/collections/%s/apis?withTags=true&perPage=0", collectionId)).build();
        client.newCall(request).enqueue(callback);
    }

    public static Response readApiSync(String apiId, boolean spec) throws IOException {
        Request request = getRequestBuilder(String.format("api/v1/apis/%s?specfile=%b", apiId, spec)).build();
        return client.newCall(request).execute();
    }

    public static void readApi(String apiId, boolean spec, Callback callback) {
        Request request = getRequestBuilder(String.format("api/v1/apis/%s?specfile=%b", apiId, spec)).build();
        client.newCall(request).enqueue(callback);
    }

    public static void readAuditReport(String apiId, Callback callback) {
        //noinspection SpellCheckingInspection
        Request request = getRequestBuilder(String.format("api/v1/apis/%s/assessmentreport", apiId)).build();
        client.newCall(request).enqueue(callback);
    }

    public static Response readAuditReportSync(String apiId) throws IOException {
        //noinspection SpellCheckingInspection
        Request request = getRequestBuilder(String.format("api/v1/apis/%s/assessmentreport", apiId)).build();
        return client.newCall(request).execute();
    }

    @SuppressWarnings("serial")
    public static void updateCollection(String collectionId, String name, Callback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        Request request = getRequestBuilder(String.format("api/v1/collections/%s", collectionId)).put(body).build();
        client.newCall(request).enqueue(callback);
    }

    @SuppressWarnings("serial")
    public static void updateAPIContent(String apiId, String text, Callback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).put(body).build();
        client.newCall(request).enqueue(callback);
    }

    @SuppressWarnings("serial")
    public static void updateAPI(String apiId, String name, Callback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).put(body).build();
        client.newCall(request).enqueue(callback);
    }

    public static void deleteCollection(String collectionId, Callback callback) {
        Request request = getRequestBuilder(String.format("api/v1/collections/%s", collectionId)).delete().build();
        client.newCall(request).enqueue(callback);
    }

    public static void deleteAPI(String apiId, Callback callback) {
        Request request = getRequestBuilder(String.format("api/v1/apis/%s", apiId)).delete().build();
        client.newCall(request).enqueue(callback);
    }

    @SuppressWarnings("serial")
    public static void createCollection(String name, Callback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("name", name);
        }}));
        Request request = getRequestBuilder("api/v1/collections").post(body).build();
        client.newCall(request).enqueue(callback);
    }

    @SuppressWarnings("serial")
    public static void createAPI(String collectionId, String name, String text, Callback callback) {
        RequestBody body = Objects.requireNonNull(getJsonRequestBody(new HashMap<>() {{
            put("cid", collectionId);
            put("name", name);
            put("specfile", Base64.getUrlEncoder().encodeToString(text.getBytes()));
        }}));
        Request request = getRequestBuilder("api/v2/apis").post(body).build();
        client.newCall(request).enqueue(callback);
    }

    public static void getApiNamingConvention(Callback callback) {
        Request request = getRequestBuilder("api/v1/organizations/me/settings/apiNamingConvention").build();
        client.newCall(request).enqueue(callback);
    }

    public static void getCollectionNamingConvention(Callback callback) {
        Request request = getRequestBuilder("api/v1/organizations/me/settings/collectionNamingConvention").build();
        client.newCall(request).enqueue(callback);
    }

    public static void getDataDictionaries(Callback callback) {
        Request request = getRequestBuilder("api/v2/dataDictionaries").build();
        client.newCall(request).enqueue(callback);
    }

    public static void getDataDictionaryFormats(String dictionaryId, Callback callback) {
        Request request = getRequestBuilder(String.format("api/v2/dataDictionaries/%s/formats", dictionaryId)).build();
        client.newCall(request).enqueue(callback);
    }

    private static Request.Builder getRequestBuilder(String url) {
        PlatformConnection options = PlatformConnection.getOptions();
        return new Request.Builder()
                .url(String.format("%s/%s", options.getPlatformUrl(), url))
                .addHeader("X-API-KEY", options.getApiToken())
                .addHeader("X-42C-IDE", Boolean.TRUE.toString())
                .addHeader("Accept", "application/json")
                .addHeader("User-Agent", options.getUserAgent())
                .addHeader("Referer", options.getReferer());
    }

    private static RequestBody getJsonRequestBody(Map<String, String> parameters) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String json = objectMapper.writeValueAsString(parameters);
            return RequestBody.create(json, MediaType.parse("application/json"));
        } catch (JsonProcessingException e) {
            return null;
        }
    }
}
