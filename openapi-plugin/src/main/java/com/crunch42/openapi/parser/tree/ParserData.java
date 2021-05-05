package com.crunch42.openapi.parser.tree;

import com.crunch42.openapi.OpenApiVersion;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.Map;

public class ParserData {

    private final DefaultMutableTreeNode root;
    private final Map<String, DefaultMutableTreeNode> pointerToNodesMap;
    private final Map<Integer, DefaultMutableTreeNode> lineToRefMap;
    private final OpenApiVersion version;
    private boolean valid;
    private String exceptionMessage;
    private boolean crLfEol;

    public ParserData(String exceptionMessage) {
        root = null;
        lineToRefMap = null;
        pointerToNodesMap = null;
        version = OpenApiVersion.Unknown;
        valid = false;
        this.exceptionMessage = exceptionMessage;
    }

    public ParserData(DefaultMutableTreeNode root,
                      Map<String, DefaultMutableTreeNode> pointerToNodesMap,
                      Map<Integer, DefaultMutableTreeNode> lineToRefMap,
                      OpenApiVersion version, boolean crLfEol) {
        this.root = root;
        this.pointerToNodesMap = pointerToNodesMap;
        this.lineToRefMap = lineToRefMap;
        this.version = version;
        this.crLfEol = crLfEol;
        valid = true;
        exceptionMessage = null;
    }

    public boolean isValid() {
        return valid;
    }

    public void invalidate(String exceptionMessage) {
        valid = false;
        this.exceptionMessage = exceptionMessage;
    }

    public String getExceptionMessage() {
        return exceptionMessage;
    }

    public DefaultMutableTreeNode getRoot() {
        return root;
    }

    public Map<Integer, DefaultMutableTreeNode> getLineToRefMap() {
        return lineToRefMap;
    }

    public Map<String, DefaultMutableTreeNode> getPointerToNodesMap() {
        return pointerToNodesMap;
    }

    public OpenApiVersion getVersion() {
        return version;
    }
    
    public boolean isCrLfEol() {
        return crLfEol;
    }
}
