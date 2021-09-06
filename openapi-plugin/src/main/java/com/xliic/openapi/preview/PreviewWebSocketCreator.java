package com.xliic.openapi.preview;

import com.xliic.openapi.listeners.PreviewDocumentListener;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.websocket.servlet.ServletUpgradeRequest;
import org.eclipse.jetty.websocket.servlet.ServletUpgradeResponse;
import org.eclipse.jetty.websocket.servlet.WebSocketCreator;

import java.util.Map;

import static com.xliic.openapi.preview.PreviewUtils.getCanonicalPathFromQuery;
import static com.xliic.openapi.preview.PreviewUtils.getRendererIndexFromQuery;

public class PreviewWebSocketCreator implements WebSocketCreator {

    private Map<String, PreviewWebSocket> sockets;
    private Map<String, Map<String, PreviewDocumentListener>> previewListeners;

    public PreviewWebSocketCreator(Map<String, PreviewWebSocket> sockets,
                                   Map<String, Map<String, PreviewDocumentListener>> previewListeners) {
        this.sockets = sockets;
        this.previewListeners = previewListeners;
    }

    @Override
    public Object createWebSocket(ServletUpgradeRequest req, ServletUpgradeResponse resp) {
        String query = req.getQueryString();
        if (StringUtils.isEmpty(query)) {
            return null;
        }
        String canonicalPath = getCanonicalPathFromQuery(query);
        int rendererIndex = getRendererIndexFromQuery(query);
        return new PreviewWebSocket(canonicalPath, rendererIndex, sockets, previewListeners);
    }

    public void clear() {
        sockets = null;
        previewListeners = null;
    }
}