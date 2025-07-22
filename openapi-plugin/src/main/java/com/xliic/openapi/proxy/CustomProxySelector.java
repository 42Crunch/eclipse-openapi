package com.xliic.openapi.proxy;

import com.xliic.core.diagnostic.Logger;

import org.eclipse.core.internal.net.ProxyManager;
import org.eclipse.core.net.proxy.IProxyData;
import org.eclipse.core.net.proxy.IProxyService;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.ProxySelector;
import java.net.SocketAddress;
import java.net.URI;
import java.util.List;
import java.util.LinkedList;

@SuppressWarnings("restriction")
public class CustomProxySelector extends ProxySelector {

    private final IProxyService ideProxySelector = ProxyManager.getProxyManager();

    @Override
    public List<Proxy> select(URI uri) {
    	IProxyData[] data = ideProxySelector.select(uri);
    	List<Proxy> proxies = new LinkedList<>();
    	for (IProxyData proxyData : data) {
    		Proxy.Type type = getProxyType(proxyData.getType());
    		if (type != null) {
        		proxies.add(new Proxy(type, new InetSocketAddress(proxyData.getHost(), proxyData.getPort())));
    		}
    	}
    	if (proxies.isEmpty()) {
    		proxies.add(Proxy.NO_PROXY);
    	}
        return proxies;
    }

    @Override
    public void connectFailed(URI uri, SocketAddress sa, IOException ioe) {
        Logger.getInstance(CustomProxySelector.class).warn("Connect failed " + uri + " sa " + sa + " reason " + ioe);
    }

    private static Proxy.Type getProxyType(String proxyType) {
        switch (proxyType) {
	        case IProxyData.HTTP_PROXY_TYPE:
	            return Proxy.Type.HTTP;           
	        case IProxyData.HTTPS_PROXY_TYPE:
	        	return Proxy.Type.HTTP;
	        case IProxyData.SOCKS_PROXY_TYPE:
	        	return Proxy.Type.SOCKS;
	        default:
	            return null;
        }
    }
}
