package com.xliic.openapi.proxy;

import com.xliic.core.diagnostic.Logger;
import com.xliic.openapi.LogRedactor;
import kotlin.Pair;
import okhttp3.*;
import okhttp3.internal.connection.RealCall;
import okio.Buffer;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.net.Proxy;
import java.nio.charset.StandardCharsets;
import java.util.List;

import static com.xliic.openapi.LogRedactor.Scope.REQUEST_BODY;
import static com.xliic.openapi.LogRedactor.Scope.REQUEST_HEADER;
import static com.xliic.openapi.utils.NetUtils.getSafeUrl;

public class ProxyEventListener extends EventListener {

    private static final long MAX_CONTENT_LENGTH = 1024;

    private static final LogRedactor REDACTOR = new LogRedactor.Builder().
            addHeaderRules("X-API-KEY", "Authorization").addUuidTokenRegExpRule(REQUEST_BODY).build();

    private final boolean logRequestBody;

    public ProxyEventListener() {
        this.logRequestBody = false;
    }

    public ProxyEventListener(boolean logRequestBody) {
        this.logRequestBody = logRequestBody;
    }

    @Override
    public void proxySelectEnd(@NotNull Call call, @NotNull HttpUrl url, @NotNull List<Proxy> proxies) {
        // This will trigger on every HTTP request, so be careful with performance below
        Logger logger = Logger.getInstance(ProxyEventListener.class);
        if (logger.isTraceEnabled()) {
            logger.trace(getRequestString(((RealCall) call).getOriginalRequest()));
            if (!proxies.isEmpty()) {
                for (Proxy proxy : proxies) {
                    logger.trace("Proxy " + url + " " + proxy);
                }
            }
        }
    }

    private String getRequestString(Request request) {
        StringBuilder builder = new StringBuilder();
        builder.append("Request {method=");
        builder.append(request.method());
        builder.append(", url=");
        builder.append(getSafeUrl(request.url()));
        if (request.headers().size() != 0) {
            builder.append(", headers=[");
            int index = 0;
            for (Pair<? extends String, ? extends String> header : request.headers()) {
                if (index > 0) {
                    builder.append(", ");
                }
                index += 1;
                builder.append(header.getFirst());
                builder.append(':');
                builder.append(REDACTOR.redact(header.getFirst(), header.getSecond(), REQUEST_HEADER));
            }
            builder.append(']');
        }
        if (logRequestBody) {
            try {
                RequestBody requestBody = request.body();
                if (requestBody != null) {
                    long contentLength = requestBody.contentLength();
                    builder.append(", body=[length:").append(contentLength);
                    MediaType contentType = requestBody.contentType();
                    if (contentType != null) {
                        builder.append(", type:").append(contentType);
                        if (contentLength <= MAX_CONTENT_LENGTH && isAppJsonType(contentType)) {
                            Buffer buffer = new Buffer();
                            requestBody.writeTo(buffer);
                            builder.append(", content:").append(REDACTOR.redact(buffer.readString(StandardCharsets.UTF_8), REQUEST_BODY));
                        }
                    }
                    builder.append(']');
                }
            } catch (IOException e) {
                builder.append(", body=[error:").append(e).append(']');
            }
        }
        builder.append('}');
        return builder.toString();
    }

    private static boolean isAppJsonType(MediaType contentType) {
        return "json".equals(contentType.subtype()) && "application".equals(contentType.type());
    }
}
