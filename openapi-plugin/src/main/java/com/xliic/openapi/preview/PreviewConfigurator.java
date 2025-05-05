package com.xliic.openapi.preview;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import jakarta.websocket.Extension;
import jakarta.websocket.HandshakeResponse;
import jakarta.websocket.server.HandshakeRequest;
import jakarta.websocket.server.ServerEndpointConfig;

public class PreviewConfigurator extends ServerEndpointConfig.Configurator {

    public static final String USER_PROP_QUERY_KEY = "com.xliic.openapi.preview.endpoint.configurator.query";

    @NotNull
    private final Map<String, PreviewEndpoint> endpoints = new ConcurrentHashMap<>();

    @Override
    public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
        sec.getUserProperties().put(USER_PROP_QUERY_KEY, request.getQueryString());
    }

    @Override
    public <T> T getEndpointInstance(Class<T> endpointClass) throws InstantiationException {
        try {
            return endpointClass.getDeclaredConstructor(Map.class).newInstance(endpoints);
        } catch (Exception e) {
            throw new InstantiationException("Failed to create endpoint instance: " + e);
        }
    }

    @Override
    public String getNegotiatedSubprotocol(List<String> supported, List<String> requested) {
        return "";
    }

    @Override
    public List<Extension> getNegotiatedExtensions(List<Extension> installed, List<Extension> requested) {
        return null;
    }

    @Override
    public boolean checkOrigin(String originHeaderValue) {
        return true;
    }

    public void sendText(@NotNull String query, @NotNull String text) {
        PreviewEndpoint endpoint = endpoints.get(query);
        if (endpoint != null && !StringUtils.isEmpty(text)) {
            endpoints.get(query).sendText(text);
        }
    }

    public void dispose() {
        for (PreviewEndpoint endpoint : endpoints.values()) {
            endpoint.dispose();
        }
        endpoints.clear();
    }
}
