package com.xliic.openapi.capture.payload;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class PrepareOptions {

    @NotNull
    private final String basePath;
    @NotNull
    private final List<String> servers;

    public PrepareOptions(@NotNull String basePath, @NotNull List<String> servers) {
        this.basePath = basePath;
        this.servers = servers;
    }

    public @NotNull String getBasePath() {
        return basePath;
    }

    public @NotNull List<String> getServers() {
        return servers;
    }

    @SuppressWarnings("serial")
	@NotNull
    public Map<String, Object> getPayload() {
        return new HashMap<>() {{
            put("basePath", basePath);
            put("servers", servers);
        }};
    }

    @SuppressWarnings("unchecked")
    public static PrepareOptions getInstance(@NotNull Map<String, Object> options) {
        List<String> servers = new LinkedList<>();
        for (String server : (List<String>) options.get("servers")) {
            if (!server.isBlank()) {
                servers.add(server.trim());
            }
        }
        return new PrepareOptions((String) options.get("basePath"), servers);
    }
}
