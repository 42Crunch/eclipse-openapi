package com.xliic.openapi.proxy;

import com.xliic.core.credentialStore.Credentials;

import org.eclipse.core.internal.net.ProxyManager;
import org.eclipse.core.net.proxy.IProxyData;
import org.eclipse.core.net.proxy.IProxyService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

@SuppressWarnings("restriction")
public class CustomProxyAuthentication {

    private final IProxyService proxyService = ProxyManager.getProxyManager();

	public @Nullable Credentials getKnownAuthentication(@NotNull String host, int port) {
    	for (IProxyData proxyData : proxyService.getProxyData()) {
    		if (proxyData.getHost() != null && proxyData.getPort() == port && proxyData.isRequiresAuthentication()) {
    	        return new Credentials(proxyData.getUserId(), proxyData.getPassword());
    		}
    	}
        return null;
    }
}
