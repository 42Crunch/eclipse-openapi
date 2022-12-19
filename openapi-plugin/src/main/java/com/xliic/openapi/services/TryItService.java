package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.TRY_IT;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;
import java.util.Set;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.application.ModalityState;
import com.xliic.core.project.Project;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.services.api.ITryItService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.TryItResponseCallback;
import com.xliic.openapi.tryit.TryItTrustManager;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.tryit.payload.TryItRequest;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.internal.http.HttpMethod;

public final class TryItService implements SettingsListener, ITryItService {

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();
    private static final OkHttpClient sslClient = getSSLClient(new OkHttpClient().newBuilder());

    private final Project project;

    public TryItService(@NotNull Project project) {
        this.project = project;
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static TryItService getInstance(@NotNull Project project) {
        return project.getService(TryItService.class);
    }

    public void send(@NotNull TryItRequest request, @NotNull TryItResponseCallback callback) {
        if (!verifyProtocol(request.getUrl(), callback)) {
            return;
        }
        Request.Builder builder;
        String method = request.getMethod().toUpperCase();
        try {
            if (HttpMethod.permitsRequestBody(method)) {
                RequestBody body = request.restoreBody();
                builder = new Request.Builder().url(request.getUrl()).method(request.getMethod().toUpperCase(), body);
            } else {
                builder = new Request.Builder().url(request.getUrl()).method(request.getMethod().toUpperCase(), null);
            }
            for (Map.Entry<String, String> header : request.getHeaders().entrySet()) {
                builder.addHeader(header.getKey(), header.getValue());
            }
            if (request.isHTTPS() && !request.isRejectUnauthorized()) {
                if (sslClient == null) {
                    callback.onFailure("Failed to setup SSL context", true);
                } else {
                    sslClient.newCall(builder.build()).enqueue(callback);
                }
                return;
            }
            client.newCall(builder.build()).enqueue(callback);
        } catch (Throwable t) {
            callback.onFailure(t);
        }
    }

    private boolean verifyProtocol(String url, TryItResponseCallback callback) {
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
            return builder.build();
        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void createOrActiveTryItWindow(@NotNull TryItOperation payload) {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            OpenApiUtils.activateToolWindow(project, TRY_IT);
            project.getMessageBus().syncPublisher(TryItListener.TOPIC).tryOperation(payload);
        }, ModalityState.NON_MODAL);
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(Settings.TryIt.INSECURE_SSL_HOSTNAMES)) {
            SwingUtilities.invokeLater(() -> {
                if (!project.isDisposed()) {
                    project.getMessageBus().syncPublisher(TryItListener.TOPIC).tryLastOperation();
                }
            });
        }
    }
}