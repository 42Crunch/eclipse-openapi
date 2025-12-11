package com.xliic.openapi.proxy;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.ProxySelector;
import java.net.SocketAddress;
import java.net.URI;
import java.net.URL;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.diagnostic.Logger;

public class PredefinedProxySelector extends ProxySelector {

    @NotNull
    private String host = "";
    private int port = -1;
    private boolean useProxy = false;

    public PredefinedProxySelector(@NotNull String proxy) {
        try {
            URL url = new URL(proxy);
            host = url.getHost();
            port = url.getPort();
            if (port == -1) {
                port = url.getDefaultPort();
            }
            useProxy = true;
        } catch (MalformedURLException e) {
            Logger.getInstance(PredefinedProxySelector.class).warn("Invalid URL: " + proxy, e);
        }
    }

    @Override
    public List<Proxy> select(URI uri) {
        if (useProxy) {
            return List.of(new Proxy(Proxy.Type.HTTP, new InetSocketAddress(host, port)));
        } else {
            return List.of(Proxy.NO_PROXY);
        }
    }

    @Override
    public void connectFailed(URI uri, SocketAddress sa, IOException ioe) {
        Logger.getInstance(PredefinedProxySelector.class).warn("Connect failed " + uri + " sa " + sa + " reason " + ioe);
    }
}
