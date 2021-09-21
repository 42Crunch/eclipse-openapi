package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;

public class ParserJsonAST extends ParserAST {

    @Override
    protected Node createNode(Object node, Node parent, int depth, String pointer, String key) {
        return new JsonNode(node, parent, depth, pointer, key);
    }
}
