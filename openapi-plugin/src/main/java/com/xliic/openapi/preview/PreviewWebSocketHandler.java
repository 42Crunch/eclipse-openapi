package com.xliic.openapi.preview;

import java.util.Map;

import org.eclipse.jetty.websocket.server.WebSocketHandler;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;

public class PreviewWebSocketHandler extends WebSocketHandler {

    private final static int IDLE_TIMEOUT_MS = 15 * 60 * 1000;
    private final PreviewWebSocketCreator creator;

    public PreviewWebSocketHandler(Map<String, PreviewWebSocket> sockets) {
        this.creator = new PreviewWebSocketCreator(sockets);
    }

    @Override
    public void configure(WebSocketServletFactory factory) {
        factory.getPolicy().setIdleTimeout(IDLE_TIMEOUT_MS);
        factory.setCreator(creator);
    }

    @Override
    public void destroy() {
        super.destroy();
        creator.clear();
    }
}
