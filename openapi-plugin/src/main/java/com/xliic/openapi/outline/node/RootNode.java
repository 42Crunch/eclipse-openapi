package com.xliic.openapi.outline.node;

import java.util.HashMap;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiVersion;

public class RootNode {

    @NotNull
    private final OpenApiVersion version;
    @NotNull
    private final Map<String, DefaultMutableTreeNode> children = new HashMap<>();

    public RootNode(@NotNull OpenApiVersion version) {
        this.version = version;
    }

    public @NotNull OpenApiVersion getVersion() {
        return version;
    }

    public @NotNull Map<String, DefaultMutableTreeNode> getChildren() {
        return children;
    }
}
