package com.xliic.openapi.proxy;

import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.URL;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;

import okhttp3.Authenticator;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;

public class PredefinedAuthenticator implements Authenticator {

    @NotNull
    private String username = "";
    @NotNull
    private String password = "";
    private boolean useAuth = false;

    public PredefinedAuthenticator(@NotNull String proxy) {
        try {
            URL url = new URL(proxy);
            String userInfo = url.getUserInfo();
            if (userInfo == null) {
                // Not error, just skip authentification
                Logger.getInstance(PredefinedProxySelector.class).debug("No auth info specified in URL");
                return;
            }
            String[] credentials = userInfo.split(":", 2);
            username = credentials[0];
            if (StringUtils.isEmpty(username)) {
                // Not error, just skip authentification
                Logger.getInstance(PredefinedProxySelector.class).debug("No username specified in URL");
                return;
            }
            // Password may be empty, example http://user@server.com
            password = credentials.length > 1 ? credentials[1] : "";
            useAuth = true;
        } catch (MalformedURLException e) {
            Logger.getInstance(PredefinedProxySelector.class).warn("Invalid URL: " + proxy, e);
        }
    }

    @Override
    public @Nullable Request authenticate(@Nullable Route route, @NotNull Response response) {
        if (route == null || route.proxy() == Proxy.NO_PROXY) {
            return response.request();
        }
        if (useAuth) {
            String credential = okhttp3.Credentials.basic(username, password);
            return response.request().newBuilder().header("Proxy-Authorization", credential).build();
        }
        return response.request();
    }
}
