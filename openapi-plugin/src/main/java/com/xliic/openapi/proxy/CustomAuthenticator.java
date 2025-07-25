package com.xliic.openapi.proxy;

import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.diagnostic.Logger;
import okhttp3.Authenticator;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.net.InetSocketAddress;
import java.net.Proxy;

public class CustomAuthenticator implements Authenticator {

    private final CustomProxyAuthentication proxyAuthentication = new CustomProxyAuthentication();

    @Override
    public @Nullable Request authenticate(@Nullable Route route, @NotNull Response response) {
        if (route == null || route.proxy() == Proxy.NO_PROXY) {
            return response.request();
        }
        InetSocketAddress proxyAddress = (InetSocketAddress) route.proxy().address();
        String host = proxyAddress.getHostName();
        int port = proxyAddress.getPort();
        Logger.getInstance(CustomAuthenticator.class).debug("Auth host " + host + " with port " + port);
        Credentials credentials = proxyAuthentication.getKnownAuthentication(host, port);
        if (credentials != null) {
            final boolean isPwdSet = credentials.getPasswordAsString() != null;
            Logger.getInstance(CustomAuthenticator.class).debug("Auth user " + credentials.getUserName() + " password set: " + isPwdSet);
        }
        if (credentials != null && credentials.getUserName() != null && credentials.getPasswordAsString() != null) {
            String credential = okhttp3.Credentials.basic(credentials.getUserName(), credentials.getPasswordAsString());
            return response.request().newBuilder().header("Proxy-Authorization", credential).build();
        } else {
            return response.request();
        }
    }
}
