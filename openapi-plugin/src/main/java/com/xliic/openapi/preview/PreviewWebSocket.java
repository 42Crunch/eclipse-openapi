package com.xliic.openapi.preview;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.xliic.idea.ApplicationManager;
import com.xliic.openapi.listeners.PreviewDocumentListener;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.StatusCode;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import static com.xliic.openapi.preview.PreviewUtils.getQuery;
import static com.xliic.openapi.preview.PreviewUtils.addListeners;
import static com.xliic.openapi.preview.PreviewUtils.clearListeners;
import static com.xliic.openapi.preview.PreviewUtils.getTextFromBundler;

@WebSocket
public class PreviewWebSocket {

    private Session session;
    private final String canonicalPath;
    private final String query;
    private final Map<String, PreviewWebSocket> sockets;
    private final Map<String, Map<String, PreviewDocumentListener>> previewListeners;

    public PreviewWebSocket(String canonicalPath,
                            int rendererIndex,
                            Map<String, PreviewWebSocket> sockets,
                            Map<String, Map<String, PreviewDocumentListener>> previewListeners) {

        this.canonicalPath = canonicalPath;
        this.sockets = sockets;
        this.previewListeners = previewListeners;
        this.query = getQuery(canonicalPath, rendererIndex);
    }

    @OnWebSocketConnect
    public void onConnect(Session session) {
        this.session = session;
        ApplicationManager.getApplication().runReadAction(() -> {
            try {
                Map<String, String> cache = new HashMap<>();
                String text = getTextFromBundler(canonicalPath, cache);
                if (StringUtils.isEmpty(text)) {
                    session.close(StatusCode.BAD_DATA, null);
                }
                else {
                    this.session.getRemote().sendString(text);
                    if (sockets.containsKey(query)) {
                        sockets.remove(query).session.close(StatusCode.NORMAL, null);
                    }
                    sockets.put(query, this);
                    previewListeners.put(query, addListeners(query, cache.keySet()));
                }
            }
            catch (Exception exception) {
                session.close(StatusCode.UNDEFINED, exception.getMessage());
            }
        });
    }

    @OnWebSocketClose
    public void onClose(int statusCode, String reason) {
        sockets.remove(query);
        ApplicationManager.getApplication().runReadAction(() -> {
            clearListeners(previewListeners.remove(query));
        });
    }

    public void sendText(String text) {
        try {
            this.session.getRemote().sendString(text);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
}