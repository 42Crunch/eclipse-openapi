package com.xliic.openapi.preview;

import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.websocket.servlet.ServletUpgradeRequest;
import org.eclipse.jetty.websocket.servlet.ServletUpgradeResponse;
import org.eclipse.jetty.websocket.servlet.WebSocketCreator;

public class PreviewWebSocketCreator implements WebSocketCreator {

    private Map<String, PreviewWebSocket> sockets;

    public PreviewWebSocketCreator(Map<String, PreviewWebSocket> sockets) {
        this.sockets = sockets;
    }

    @Override
    public Object createWebSocket(ServletUpgradeRequest req, ServletUpgradeResponse resp) {
        String query = req.getQueryString();
        if (StringUtils.isEmpty(query)) {
            return null;
        }
        return new PreviewWebSocket(query, sockets);
    }

    public void clear() {
        sockets = null;
    }
}