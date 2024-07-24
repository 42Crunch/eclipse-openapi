package com.xliic.core.util.net;

import org.jetbrains.annotations.Nullable;
import org.osgi.framework.Bundle;
import org.osgi.framework.ServiceReference;
import org.apache.commons.lang3.StringUtils;
import org.eclipse.core.net.proxy.IProxyData;
import org.eclipse.core.net.proxy.IProxyService;
import org.eclipse.core.runtime.Platform;

public class HttpConfigurable {

    private static HttpConfigurable configurable;

    public String PROXY_HOST = "";
    public int PROXY_PORT = 80;
    public boolean PROXY_AUTHENTICATION = false;
    public boolean USE_HTTP_PROXY = false;

    @Nullable
    private String proxyLogin;
    @Nullable
    private String plainProxyPassword;
    @Nullable
    private IProxyService proxyService;

	private HttpConfigurable() {
		proxyService = null;
		Bundle bundle = Platform.getBundle("org.eclipse.ui.ide");
		if (bundle != null) {
			ServiceReference<IProxyService> ref = bundle.getBundleContext().getServiceReference(IProxyService.class);
			if (ref != null) {
				proxyService = bundle.getBundleContext().getService(ref);
			}
		}
	}

    public static HttpConfigurable getInstance() {
        if (configurable == null) {
            configurable = new HttpConfigurable();
        }
        configurable.refresh();
        return configurable;
    }

    public @Nullable String getProxyLogin() {
        return proxyLogin;
    }

    public @Nullable String getPlainProxyPassword() {
        return plainProxyPassword;
    }

    private void refresh() {
	    PROXY_HOST = "";
	    PROXY_PORT = 80;
	    PROXY_AUTHENTICATION = false;
	    USE_HTTP_PROXY = false;
	    proxyLogin = null;
	    plainProxyPassword = null;
		if (proxyService != null && proxyService.isProxiesEnabled()) {
			for (IProxyData proxyData : proxyService.getProxyData()) {
				if (proxyData.getType() == IProxyData.HTTP_PROXY_TYPE) {
				    final String host = proxyData.getHost();
				    final int port = proxyData.getPort();
				    if (port != -1 && !StringUtils.isEmpty(host)) {
					    USE_HTTP_PROXY = true;
				    	PROXY_HOST = host;
					    PROXY_PORT = port;
					    PROXY_AUTHENTICATION = proxyData.isRequiresAuthentication();
					    proxyLogin = proxyData.getUserId();
					    plainProxyPassword = proxyData.getPassword();
					    break;
				    }
				}
			}
		}
    }
}
