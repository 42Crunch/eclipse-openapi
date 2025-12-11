package com.xliic.openapi.utils;

import static com.xliic.openapi.LogRedactor.Scope.REQUEST_QUERY;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.KeyManagementException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.LogRedactor;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.proxy.CustomAuthenticator;
import com.xliic.openapi.proxy.CustomProxyAuthentication;
import com.xliic.openapi.proxy.CustomProxySelector;
import com.xliic.openapi.proxy.PredefinedAuthenticator;
import com.xliic.openapi.proxy.PredefinedProxySelector;
import com.xliic.openapi.proxy.ProxyEventListener;
import com.xliic.openapi.report.AuditAPIs;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.tryit.TryItTrustManager;
import com.xliic.openapi.webapp.http.SendHttpRequest;

import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class NetUtils {

    // OkHttpClient keeps using old proxy for an existing connection even in dynamic proxy selectors
    // The client caches DNS and connection information, which can cause it to continue using old proxy settings
    // The safest why to fix that is to create a new OkHttpClient instance with newBuilder()
    private static final OkHttpClient HTTP_CLIENT = new OkHttpClient.Builder().build();
    private static final LogRedactor REDACTOR = new LogRedactor.Builder().addQueryRule("token").build();

    public interface ProgressListener {
        void update(long bytesRead, long contentLength, boolean done, @NotNull String hash);
    }

    @NotNull
    public static OkHttpClient getHttpClient() {
        return getHttpClient(false);
    }

    @NotNull
    public static OkHttpClient getHttpClient(boolean logRequestBody) {
        return getHttpClient(null, logRequestBody);
    }

    @NotNull
    public static OkHttpClient getHttpClient(@Nullable String proxy) {
        return getHttpClient(proxy, false);
    }

    @NotNull
    public static OkHttpClient getHttpClient(@Nullable String proxy, boolean logRequestBody) {
        OkHttpClient.Builder builder = HTTP_CLIENT.newBuilder();
        if (proxy == null) {
            builder.proxySelector(new CustomProxySelector());
            builder.proxyAuthenticator(new CustomAuthenticator());
        } else {
            builder.proxySelector(new PredefinedProxySelector(proxy));
            builder.proxyAuthenticator(new PredefinedAuthenticator(proxy));
        }
        builder.eventListener(new ProxyEventListener(logRequestBody));
        setTimeouts(builder);
        return builder.build();
    }

    @NotNull
    public static OkHttpClient getOkHttpClientForTest() {
        OkHttpClient.Builder builder = HTTP_CLIENT.newBuilder();
        builder.proxySelector(new CustomProxySelector());
        builder.proxyAuthenticator(new CustomAuthenticator());
        builder.eventListener(new ProxyEventListener());
        builder.connectTimeout(5000, TimeUnit.MILLISECONDS);
        return builder.build();
    }

    @Nullable
    public static OkHttpClient getSSLClient() {
        return getSSLClient(null);
    }

    @Nullable
    public static OkHttpClient getSSLClient(@Nullable String proxy) {
        OkHttpClient.Builder builder = HTTP_CLIENT.newBuilder();
        TrustManager[] trustAllCerts = new TrustManager[] { new TryItTrustManager() };
        try {
            SSLContext context = SSLContext.getInstance("SSL");
            context.init(null, trustAllCerts, new java.security.SecureRandom());
            SSLSocketFactory trustAllSslSocketFactory = context.getSocketFactory();
            builder.sslSocketFactory(trustAllSslSocketFactory, (X509TrustManager) trustAllCerts[0]);
            builder.hostnameVerifier((hostname, session) -> true);
            if (proxy == null) {
                builder.proxySelector(new CustomProxySelector());
                builder.proxyAuthenticator(new CustomAuthenticator());
            } else {
                builder.proxySelector(new PredefinedProxySelector(proxy));
                builder.proxyAuthenticator(new PredefinedAuthenticator(proxy));
            }
            builder.eventListener(new ProxyEventListener());
            setTimeouts(builder);
            return builder.build();
        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            Logger.getInstance(SendHttpRequest.class).info(e);
        }
        return null;
    }

    @Nullable
    public static String getProxyString(String serverUrl) {
        try {
            // The host value doesn't contain protocol prefix, without it, select returns only proxy type DIRECT
            List<Proxy> proxies = new CustomProxySelector().select(new URI(serverUrl));
            if (!proxies.isEmpty()) {
                List<String> urls = new LinkedList<>();
                for (Proxy proxy : proxies) {
                    if (proxy.type() == Proxy.Type.DIRECT) {
                        return null;
                    }
                    // Socks proxy is not supported
                    if (proxy.type() == Proxy.Type.SOCKS) {
                        continue;
                    }
                    InetSocketAddress address = (InetSocketAddress) proxy.address();
                    String host = address.getHostString();
                    int port = address.getPort();
                    Logger.getInstance(NetUtils.class).debug("Auth host " + host + " with port " + port);
                    Credentials cr = new CustomProxyAuthentication().getKnownAuthentication(host, port);
                    if (cr != null) {
                        final boolean isPwdSet = cr.getPasswordAsString() != null;
                        Logger.getInstance(NetUtils.class).debug("Auth user " + cr.getUserName() + " password set: " + isPwdSet);
                    }
                    if (cr != null && cr.getUserName() != null && cr.getPasswordAsString() != null) {
                        urls.add(String.format("http://%s:%s@%s:%d", cr.getUserName(), cr.getPasswordAsString(), host, port));
                    } else {
                        urls.add(String.format("http://%s:%d", host, port));
                    }
                }
                // Get first http proxy
                return urls.get(0);
            }
        } catch (URISyntaxException ignored) {
        }
        return null;
    }

    public static void download(@NotNull String url, @NotNull String filePath, @NotNull ProgressListener listener) throws Exception {
        Response response = getHttpClient().newCall(new Request.Builder().url(url).get().build()).execute();
        ResponseBody body = Objects.requireNonNull(getResponseBody(response));
        final long total = body.contentLength();
        if (total <= 0) {
            throw new Exception("Unexpected contentLength " + total);
        }
        if (response.code() == 200 || response.code() == 201) {
            MessageDigest hash = MessageDigest.getInstance("SHA-256");
            try (InputStream inputStream = body.byteStream()) {
                byte[] buff = new byte[4096];
                long transferred = 0;
                OutputStream output = new FileOutputStream(filePath);
                listener.update(0L, total, false, "");
                double percent = (double) transferred / total;
                while (transferred <= total) {
                    int read = inputStream.read(buff);
                    if (read == -1) {
                        break;
                    }
                    output.write(buff, 0, read);
                    hash.update(buff, 0, read);
                    transferred += read;
                    double p = (double) transferred / total;
                    double delta = 100 * (p - percent);
                    if (delta >= 1) {
                        percent = p;
                        listener.update(transferred, total, false, "");
                    }
                }
                output.flush();
                output.close();
                listener.update(transferred, total, true, Hex.encodeHexString(hash.digest()));
            }
        } else {
            throw new Exception("Unexpected response code " + response.code());
        }
    }

    @Nullable
    public static String getKDB() throws IOException {
        try (Response response = AuditAPIs.Sync.getKDB()) {
            try (ResponseBody body = getResponseBody(response)) {
                if (response.code() == 200) {
                    if (body != null) {
                        return body.string().trim();
                    }
                }
            }
        }
        return null;
    }

    @Nullable
    public static RequestBody getJsonRequestBody(@NotNull Map<String, Object> parameters) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String json = objectMapper.writeValueAsString(parameters);
            return RequestBody.create(json, MediaType.parse("application/json"));
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    @Nullable
    public static Node getBodyNode(@NotNull Response response) {
        try (ResponseBody body = getResponseBody(response)) {
            if (response.code() == 200 && body != null) {
                try {
                    return Utils.getJsonAST(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    @Nullable
    public static Object getBodyObject(@NotNull Response response) {
        try (ResponseBody body = getResponseBody(response)) {
            if (response.code() == 200 && body != null) {
                try {
                    return Utils.deserialize(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    @NotNull
    public static Node getBodyNodeRequireNonNull(@NotNull Response response) throws Exception {
        if (response.code() != 200) {
            throw new Exception("Unexpected response code " + response.code());
        }
        try (ResponseBody body = getResponseBody(response)) {
            if (body == null) {
                throw new Exception("Unexpected response body");
            }
            String text = body.string();
            if (text.isEmpty()) {
                throw new Exception("Unexpected response body content");
            }
            Node node = Utils.getJsonAST(text);
            if (node == null) {
                throw new Exception("Unexpected response body format");
            }
            return node;
        }
    }

    @Nullable
    public static Node getBodyNodeIgnoreCode(@NotNull Response response) {
        try (ResponseBody body = getResponseBody(response)) {
            if (body != null) {
                try {
                    return Utils.getJsonAST(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    public static boolean isURLValid(@NotNull String url) {
        try {
            return StringUtils.isNotEmpty(getDomainName(url));
        } catch (URISyntaxException ignored) {
        }
        return false;
    }

    @NotNull
    public static String getDomainName(@NotNull String url, @NotNull String defaultName) {
        try {
            String domain = getDomainName(url);
            if (domain != null) {
                return domain;
            }
        } catch (URISyntaxException ignored) {
        }
        return defaultName;
    }

    @Nullable
    public static String getDomainName(@NotNull String url) throws URISyntaxException {
        String domain = new URI(url).getHost();
        return domain != null && domain.startsWith("www.") ? domain.substring(4) : domain;
    }

    @NotNull
    public static String getFileNameFromURL(@NotNull String href, @NotNull String defaultName) {
        try {
            URL url = new URL(href);
            return FilenameUtils.getBaseName(url.getPath());
        } catch (MalformedURLException ignored) {
        }
        return defaultName;
    }

    @NotNull
    public static String getWebAppResource(@NotNull Class<?> loaderClass, @NotNull String fileName) {
        InputStream stream = ResourceUtil.getResourceAsStream(loaderClass.getClassLoader(), "web", fileName);
        InputStreamReader reader = new InputStreamReader(stream, StandardCharsets.UTF_8);
        Stream<String> bufferedReader = new BufferedReader(reader).lines();
        StringBuilder builder = new StringBuilder();
        bufferedReader.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }

    @Nullable
    public static ResponseBody getResponseBody(@NotNull Response response) {
        Logger logger = Logger.getInstance(NetUtils.class);
        if (logger.isDebugEnabled()) {
            logger.debug("Response {method=" + response.request().method() +
                    ", url=" + getSafeUrl(response.request().url()) + ", code=" + response.code() + "}");
        }
        return response.body();
    }

    @NotNull
    public static String getSafeUrl(@NotNull HttpUrl url) {
        HttpUrl.Builder builder = new HttpUrl.Builder().scheme(url.scheme()).host(url.host()).port(url.port()).
                username(url.username()).password(url.password()).encodedPath(url.encodedPath()).fragment(url.fragment());
        if (StringUtils.isEmpty(url.query())) {
            builder.query(url.query());
        } else {
            for (String name : url.queryParameterNames()) {
                // Value is decoded
                String value = url.queryParameter(name);
                if (value != null) {
                    String safeValue = REDACTOR.redact(name, value, REQUEST_QUERY);
                    if (Objects.equals(safeValue, value)) {
                        builder.addEncodedQueryParameter(name, URLEncoder.encode(safeValue, StandardCharsets.UTF_8));
                    } else {
                        // No need to encode the mask value
                        builder.addEncodedQueryParameter(name, safeValue);
                    }

                } else {
                    builder.addEncodedQueryParameter(name, null);
                }
            }
        }
        return builder.build().toString();
    }
    
    private static void setTimeouts(OkHttpClient.Builder builder) {
        final int timeout = SettingsService.getInstance().getConnectionTimeout();
        // Connect Timeout is time to establish a connection to the server, includes TCP handshake, SSL handshake
        builder.connectTimeout(timeout, java.util.concurrent.TimeUnit.SECONDS);
        // Read Timeout is time between bytes received from the server, maximum time between data packets
        builder.readTimeout(timeout, java.util.concurrent.TimeUnit.SECONDS);
        // Write Timeout is time between bytes sent to the server, maximum time between sending data packets
        builder.writeTimeout(timeout, java.util.concurrent.TimeUnit.SECONDS);
    }
}
