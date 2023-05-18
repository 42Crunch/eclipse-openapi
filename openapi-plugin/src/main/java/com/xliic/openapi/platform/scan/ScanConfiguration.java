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
    private final boolean isNewApi;

    private ScanConfiguration(@NotNull String id, @Nullable String token, @Nullable String config, boolean isNewApi) {
        this.id = id;
        this.token = token;
        this.config = config;
        this.isNewApi = isNewApi;
    }

    public static ScanConfiguration getInstance(@NotNull Node node) {
        String id, config, token;
        boolean isNewApi = isNewApi(node);
        if (isNewApi) {
            Node cfgNode = node.getChild("configuration");
            id = cfgNode == null ? node.getChildValueRequireNonNull("id") : cfgNode.getChildValueRequireNonNull("id");
            config = node.getChildValue("file");
            token = node.getChildValue("token");
        } else {
            id = node.getChildValueRequireNonNull("scanConfigurationId");
            config = node.getChildValue("scanConfiguration");
            token = node.getChildValue("scanConfigurationToken");
        }
        return new ScanConfiguration(id, token, config, isNewApi);
    }

    public boolean isNewApi() {
        return isNewApi;
    }

    @NotNull
    public String getId() {
        return id;
    }

    @NotNull
    public String getConfig() {
        return new String(Base64.getDecoder().decode(Objects.requireNonNull(config, "Property config is null")));
    }

    @NotNull
    public String getToken() {
        return Objects.requireNonNull(token, "Property token is null");
    }

    private static boolean isNewApi(Node node) {
        if (node.getChild("configuration") == null) {
            return node.getChildValue("file") != null && node.getChildValue("token") != null;
        } else {
            return true;
        }
    }
}