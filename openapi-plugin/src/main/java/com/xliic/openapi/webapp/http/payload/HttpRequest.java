package com.xliic.openapi.webapp.http.payload;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;

public class HttpRequest {

    @NotNull
    protected final String url;
    @NotNull
    protected final String method;
    @NotNull
    protected final Map<String, String> headers;
    @Nullable
    protected final Object body;
    @Nullable
    protected final String id;
    protected final boolean rejectUnauthorized;
    @Nullable
    protected final String proxy;
    
    public HttpRequest(@NotNull String url,
                       @NotNull String method,
                       @NotNull Map<String, String> headers,
                       @Nullable Object body,
                       @Nullable String id,
                       boolean rejectUnauthorized,
                       @Nullable String proxy) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
        this.id = id;
        this.rejectUnauthorized = rejectUnauthorized;
        this.proxy = proxy;
    }

    @NotNull @SuppressWarnings("unchecked")
    public RequestBody getBody() {
        if (body != null) {
            final String contentType = getContentType(headers);
            if (body instanceof List && "multipart/form-data".equals(contentType)) {
                MultipartBody.Builder builder = new MultipartBody.Builder();
                builder.setType(MultipartBody.FORM);
                for (List<String> pair : (List<List<String>>) Objects.requireNonNull(body)) {
                    builder.addFormDataPart(pair.get(0), pair.get(1));
                }
                headers.keySet().removeIf("content-type"::equalsIgnoreCase);
                return builder.build();
            } else if (body instanceof String) {
                if ("application/x-www-form-urlencoded".equals(contentType)) {
                    FormBody.Builder builder = new FormBody.Builder();
                    String bodyData = (String) Objects.requireNonNull(body);
                    for (String data : bodyData.split("&")) {
                        String [] pair = data.split("=");
                        builder.add(URLDecoder.decode(pair[0], StandardCharsets.UTF_8), URLDecoder.decode(pair[1], StandardCharsets.UTF_8));
                    }
                    headers.keySet().removeIf("content-type"::equalsIgnoreCase);
                    return builder.build();
                } else {
                    return RequestBody.create((String) Objects.requireNonNull(body), MediaType.parse("application/json"));
                }
            }
        }
        return RequestBody.create(new byte[0], null);
    }

    @NotNull
    public String getUrl() {
        return url;
    }

    @NotNull
    public String getMethod() {
        return method;
    }

    @NotNull
    public Map<String, String> getHeaders() {
        return headers;
    }

    public boolean isRejectUnauthorized() {
        return rejectUnauthorized;
    }

    public boolean isHTTPS() {
        try {
            return "https".equals(new URL(url).getProtocol());
        } catch (MalformedURLException e) {
            return false;
        }
    }

    private static String getContentType(@NotNull Map<String, String> headers) {
        for (Map.Entry<String, String> entry : headers.entrySet()) {
            String name = entry.getKey().toLowerCase();
            if ("content-type".equals(name)) {
                return entry.getValue();
            }
        }
        return null;
    }

    public @Nullable String getId() {
        return id;
    }
    
    public @Nullable String getProxy() {
        return proxy;
    }

    public boolean hasCustomProxy() {
        return !StringUtils.isEmpty(proxy);
    }
}
