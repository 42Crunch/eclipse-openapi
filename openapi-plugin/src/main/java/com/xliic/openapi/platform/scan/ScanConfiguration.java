package com.xliic.openapi.platform.scan;

import java.util.Base64;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class ScanConfiguration {

    @NotNull
    private final String id;
    @Nullable
    private final String token;
    @Nullable
    private final String config;

    private ScanConfiguration(@NotNull String id, @Nullable String token, @Nullable String config) {
        this.id = id;
        this.token = token;
        this.config = config;
    }

    public static ScanConfiguration getInstance(@NotNull Node node) {
        String id = Objects.requireNonNull(node.getChildValue("scanConfigurationId"));
        String config = node.getChildValue("scanConfiguration");
        String token = node.getChildValue("scanConfigurationToken");
        return new ScanConfiguration(id, token, config);
    }

    @NotNull
    public String getId() {
        return id;
    }

    @NotNull
    public String getConfig() throws Exception {
        if (config == null) {
            throw new Exception("Scan configuration is not available");
        }
        return new String(Base64.getDecoder().decode(config));
    }

    @NotNull
    public String getToken() throws Exception {
        if (token == null) {
            throw new Exception("Scan token is not available");
        }
        return token;
    }
}
