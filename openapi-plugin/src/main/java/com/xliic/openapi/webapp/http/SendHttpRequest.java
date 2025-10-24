package com.xliic.openapi.webapp.http;

import static com.xliic.openapi.utils.NetUtils.getHttpClient;
import static com.xliic.openapi.utils.NetUtils.getSSLClient;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.http.payload.HttpRequest;
import com.xliic.openapi.webapp.messages.WebAppProduce;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.internal.http.HttpMethod;

public class SendHttpRequest extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final String webAppId;

    public SendHttpRequest(@NotNull Project project, @NotNull String webAppId) {
        super("sendHttpRequest");
        this.project = project;
        this.webAppId = webAppId;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            Map<String, Object> config = (Map<String, Object>) map.get("config");
            Map<String, Object> https =  (Map<String, Object>) config.get("https");
            Map<String, Object> request = (Map<String, Object>) map.get("request");
            String url = (String) request.get("url");
            String method = (String) request.get("method");
            Map<String, String> headers = (Map<String, String>) request.get("headers");
            boolean rejectUnauthorized = (Boolean) https.get("rejectUnauthorized");
            String proxy = (String) https.get("proxy");
            Object body = request.get("body");
            String id = (String) map.get("id");
            HttpRequest httpRequest = new HttpRequest(url, method, headers, body, id, rejectUnauthorized, proxy);
            send(httpRequest, new HttpCallback(project, webAppId, httpRequest.getId()));
        }
    }

    private void send(@NotNull HttpRequest request, @NotNull HttpCallback callback) {
        if (!verifyProtocol(request.getUrl(), callback)) {
            return;
        }
        Request.Builder builder;
        String method = request.getMethod().toUpperCase();
        try {
            if (HttpMethod.permitsRequestBody(method)) {
                RequestBody body = request.getBody();
                builder = new Request.Builder().url(request.getUrl()).method(request.getMethod().toUpperCase(), body);
            } else {
                builder = new Request.Builder().url(request.getUrl()).method(request.getMethod().toUpperCase(), null);
            }
            for (Map.Entry<String, String> header : request.getHeaders().entrySet()) {
                builder.addHeader(header.getKey(), header.getValue());
            }
            if (request.isHTTPS() && !request.isRejectUnauthorized()) {
                if (request.hasCustomProxy()) {
                    String proxy = request.getProxy();
                    OkHttpClient sslProxyClient = getSSLClient(proxy);
                    if (sslProxyClient != null) {
                        sslProxyClient.newCall(builder.build()).enqueue(callback);
                    } else {
                        callback.onFailure("Failed to initialize SSL client with proxy " + proxy, true);
                    }
                } else {
                    OkHttpClient sslClient = getSSLClient();
                    if (sslClient != null) {
                        sslClient.newCall(builder.build()).enqueue(callback);
                    } else {
                        callback.onFailure("Failed to initialize SSL client", true);
                    }
                }
                return;
            }
            if (request.hasCustomProxy()) {
                getHttpClient(request.getProxy()).newCall(builder.build()).enqueue(callback);
            } else {
            	getHttpClient().newCall(builder.build()).enqueue(callback);
            }
        } catch (Throwable t) {
            callback.onFailure(t);
        }
    }

    private boolean verifyProtocol(String url, HttpCallback callback) {
        try {
            URL tmp = new URL(url);
            String protocol = tmp.getProtocol();
            if (protocol == null) {
                callback.onFailure("Invalid URL", false);
                return false;
            } else {
                if (!"http".equals(protocol) && !"https".equals(protocol)) {
                    callback.onFailure("Unsupported protocol: " + protocol, false);
                    return false;
                }
            }
        } catch (MalformedURLException e) {
            String msg = e.getMessage();
            if (msg.contains("unknown protocol")) {
                callback.onFailure(StringUtils.capitalize(msg), false);
            } else {
                callback.onFailure("Invalid URL", false);
            }
            return false;
        }
        return true;
    }
}
