package com.xliic.openapi.webapp.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.openapi.utils.Utils;

public abstract class WebAppConsume {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    @NotNull
    private final String name;

    public WebAppConsume(@NotNull String name) {
        this.name = name;
    }

    @Nullable
    protected abstract Object getPayload();

    @SuppressWarnings("serial")
    public void send(@NotNull JBCefBrowser cefBrowser) {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("command", name);
        parameters.put("payload", getPayload());
        String options = Utils.serialize(MAPPER, new HashMap<>() {{
            put("detail", parameters);
        }}, true);
        if (options != null) {
            cefBrowser.executeJavaScript(getJs(options), cefBrowser.getURL(), 0);
        }
    }

    private static String getJs(String options) {
        return "window.runIDECommand(" + options + ");";
    }
}
