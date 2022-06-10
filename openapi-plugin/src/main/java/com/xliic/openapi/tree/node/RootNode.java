package com.xliic.openapi.tree.node;

import com.xliic.openapi.OpenApiVersion;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.HashMap;
import java.util.Map;

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
