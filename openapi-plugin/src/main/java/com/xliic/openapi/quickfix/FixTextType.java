package com.xliic.openapi.quickfix;

import com.xliic.openapi.parser.ast.node.Node;

public enum FixTextType {

    Object, Array, Scalar;

    public static FixTextType getFixType(Node node) {

        if (node == null) {
            return null;
        } else if (node.isObject()) {
            return Object;
        } else if (node.isArray()) {
            return Array;
        } else if (node.isScalar()) {
            return Scalar;
        } else {
            return null;
        }
    }
}
