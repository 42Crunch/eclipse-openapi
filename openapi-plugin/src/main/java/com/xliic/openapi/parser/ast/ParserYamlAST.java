package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.ast.node.YamlNode;

public class ParserYamlAST extends ParserAST {

    @Override
    protected Node createNode(Object node, Node parent, int depth, String pointer, String key) {
        return new YamlNode(node, parent, depth, pointer, key);
    }
}
