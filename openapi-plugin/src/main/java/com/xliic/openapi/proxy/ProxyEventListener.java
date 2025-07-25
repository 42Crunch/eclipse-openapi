package com.xliic.openapi.proxy;

import com.xliic.core.diagnostic.Logger;
import okhttp3.Call;
import okhttp3.EventListener;
import okhttp3.HttpUrl;
import org.jetbrains.annotations.NotNull;

import java.net.Proxy;
import java.util.LinkedList;
import java.util.List;

public class ProxyEventListener extends EventListener {

    @Override
    public void proxySelectEnd(@NotNull Call call, @NotNull HttpUrl url, @NotNull List<Proxy> proxies) {
        // This will trigger on every HTTP request, so be careful with performance below
        // If no proxy or direct proxy, we should not debug as it has no sense at all
        if (!proxies.isEmpty() && !isOnlyDirect(proxies)) {
            List<String> temp = new LinkedList<>();
            proxies.forEach(proxy -> temp.add(proxy.toString()));
            Logger.getInstance(ProxyEventListener.class).trace("Proxies for " + url + ": " + String.join(" ", temp));
        }
    }

    private static boolean isOnlyDirect(List<Proxy> proxies) {
        return proxies.size() == 1 && proxies.get(0).type() == Proxy.Type.DIRECT;
    }
}
