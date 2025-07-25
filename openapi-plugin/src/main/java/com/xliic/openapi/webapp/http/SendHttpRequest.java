package com.xliic.openapi.webapp.http;

import static com.xliic.openapi.utils.NetUtils.HTTP_CLIENT;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.openapi.proxy.CustomAuthenticator;
import com.xliic.openapi.proxy.CustomProxySelector;
import com.xliic.openapi.proxy.ProxyEventListener;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.tryit.TryItTrustManager;
import com.xliic.openapi.webapp.http.payload.HttpRequest;
import com.xliic.openapi.webapp.messages.WebAppProduce;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.internal.http.HttpMethod;

public class SendHttpRequest extends WebAppProduce {

    private static final OkHttpClient SSL_CLIENT = getSSLClient(HTTP_CLIENT.newBuilder());

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
            Object body = request.get("body");
            String id = (String) map.get("id");
            HttpRequest httpRequest = new HttpRequest(url, method, headers, body, id, rejectUnauthorized);
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
                if (SSL_CLIENT == null) {
                    callback.onFailure("Failed to setup SSL context", true);
                } else {
                	SSL_CLIENT.newCall(builder.build()).enqueue(callback);
                }
                return;
            }
            HTTP_CLIENT.newCall(builder.build()).enqueue(callback);
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

    private static OkHttpClient getSSLClient(OkHttpClient.Builder builder) {
        TrustManager[] trustAllCerts = new TrustManager[] { new TryItTrustManager() };
        try {
            SSLContext context = SSLContext.getInstance("SSL");
            context.init(null, trustAllCerts, new java.security.SecureRandom());
            SSLSocketFactory trustAllSslSocketFactory = context.getSocketFactory();
            builder.sslSocketFactory(trustAllSslSocketFactory, (X509TrustManager) trustAllCerts[0]);
            builder.hostnameVerifier((hostname, session) -> true);
            builder.proxySelector(new CustomProxySelector());
            builder.proxyAuthenticator(new CustomAuthenticator());
            builder.eventListener(new ProxyEventListener());
            return builder.build();
        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            Logger.getInstance(TryItService.class).error(e);
        }
        return null;
    }
}
