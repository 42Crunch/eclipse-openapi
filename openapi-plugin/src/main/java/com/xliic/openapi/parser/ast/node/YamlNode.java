package com.xliic.openapi.parser.ast.node;

import com.xliic.openapi.parser.ast.Range;

public class YamlNode extends Node {

    public YamlNode(Object node, Node parent, int depth, String pointer, String key) {
        super(node, parent, depth, pointer, key);
    }

    @Override
    public Range getValueRange() {
        return Range.getValueRange(node, false);
    }

    @Override
    public Range getRange() {
        return Range.getRange(node, false);
    }
}
