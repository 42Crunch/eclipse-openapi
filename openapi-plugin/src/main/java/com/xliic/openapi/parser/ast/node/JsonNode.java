package com.xliic.openapi.parser.ast.node;

import com.xliic.openapi.parser.ast.Range;

public class JsonNode extends Node {

    public JsonNode(Object node, Node parent, int depth, String pointer, String key) {
        super(node, parent, depth, pointer, key);
    }

    @Override
    public Range getValueRange() {
        return Range.getValueRange(node, true);
    }

    @Override
    public Range getRange() {
        return Range.getRange(node, true);
    }
}
