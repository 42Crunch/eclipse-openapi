package com.xliic.openapi.outline.node;

import java.util.HashMap;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;

import com.xliic.openapi.OpenApiVersion;

public class RootNode {

    private final OpenApiVersion version;
    private final Map<String, DefaultMutableTreeNode> children;

    public RootNode(OpenApiVersion version) {
        this.version = version;
        children = new HashMap<>();
    }

    public OpenApiVersion getVersion() {
        return version;
    }

    public Map<String, DefaultMutableTreeNode> getChildren() {
        return children;
    }
}
