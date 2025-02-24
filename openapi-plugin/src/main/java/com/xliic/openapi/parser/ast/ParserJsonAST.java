package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;

public class ParserJsonAST extends ParserAST {

    @Override
    protected Node createNode(Object node, Node parent, int depth, String pointer, String key) {
        return new JsonNode(node, parent, depth, pointer, key);
    }

    @Override
    public com.xliic.openapi.parser.ast.node.Node parse(String text) {
        return super.parse(Utils.convertAllTabsToSpaces(text, 1));
    }
}
