package com.xliic.openapi.proxy;

import java.net.Proxy;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.diagnostic.Logger;

import kotlin.Pair;
import okhttp3.Call;
import okhttp3.EventListener;
import okhttp3.HttpUrl;
import okhttp3.Request;
import okhttp3.internal.connection.RealCall;

public class ProxyEventListener extends EventListener {

    private static final String X_API_KEY = "X-API-KEY";

    @Override
    public void proxySelectEnd(@NotNull Call call, @NotNull HttpUrl url, @NotNull List<Proxy> proxies) {
        // This will trigger on every HTTP request, so be careful with performance below
        Logger logger = Logger.getInstance(ProxyEventListener.class);
        if (logger.isTraceEnabled()) {
            logger.trace(getRequestAsString(((RealCall) call).getOriginalRequest()));
            if (!proxies.isEmpty()) {
                for (Proxy proxy : proxies) {
                    logger.trace("Proxy " + url + " " + proxy);
                }
            }
        }
    }

    private static String getRequestAsString(Request request) {
        StringBuilder builder = new StringBuilder();
        builder.append("Request{method=");
        builder.append(request.method());
        builder.append(", url=");
        builder.append(request.url());
        if (request.headers().size() != 0) {
            builder.append(", headers=[");
            int index = 0;
            for (Pair<? extends String, ? extends String> header : request.headers()) {
                if (index > 0) {
                    builder.append(", ");
                }
                index += 1;
                String name = header.getFirst();
                builder.append(name);
                builder.append(':');
                String value = header.getSecond();
                if (X_API_KEY.equalsIgnoreCase(name)) {
                    builder.append(StringUtils.isEmpty(value) ? "" : "*");
                } else {
                    builder.append(value);
                }
            }
            builder.append(']');
        }
        builder.append('}');
        return builder.toString();
    }
}
