package com.xliic.openapi.parser.ast;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.snakeyaml.engine.v2.api.Load;
import org.snakeyaml.engine.v2.api.LoadSettings;
import org.snakeyaml.engine.v2.constructor.BaseConstructor;
import org.snakeyaml.engine.v2.nodes.MappingNode;
import org.snakeyaml.engine.v2.nodes.NodeTuple;
import org.snakeyaml.engine.v2.nodes.NodeType;
import org.snakeyaml.engine.v2.nodes.ScalarNode;
import org.snakeyaml.engine.v2.nodes.SequenceNode;

import com.xliic.openapi.settings.SettingsService;

public abstract class ParserAST {

	protected abstract com.xliic.openapi.parser.ast.node.Node createNode(Object node, com.xliic.openapi.parser.ast.node.Node parent, int depth,
            String pointer, String key);

    public com.xliic.openapi.parser.ast.node.Node parse(String text) {
    	final int codePointLimit = SettingsService.getInstance().getCodePointLimit();
        LoadSettings settings = LoadSettings.builder().setDefaultMap(initSize -> new LinkedHashMap<>()).setCodePointLimit(codePointLimit).build();
        Load load = new Load(settings, new BaseConstructor(settings) {
            @Override
            public Object constructSingleDocument(Optional<org.snakeyaml.engine.v2.nodes.Node> optionalNode) {
                return optionalNode.orElse(null);
            }
        });
        Object object = load.loadFromString(text);
        com.xliic.openapi.parser.ast.node.Node root = createNode(object, null, 0, "", "");
        dfs(object, root);
        return root;
    }

    private void dfs(Object object, com.xliic.openapi.parser.ast.node.Node astNode) {

        if (object instanceof NodeTuple) {
            object = ((NodeTuple) object).getValueNode();
        }
        int depth = astNode.getDepth();
        String pointer = astNode.getJsonPointer();

        if (isMap(object)) {
            List<com.xliic.openapi.parser.ast.node.Node> children = new LinkedList<>();
            for (NodeTuple tuple : ((MappingNode) object).getValue()) {
                String key = ((ScalarNode) tuple.getKeyNode()).getValue();
                com.xliic.openapi.parser.ast.node.Node child = createNode(tuple, astNode, depth + 1, pointer + "/" + escape(key), key);
                children.add(child);
                dfs(tuple, child);
            }
            astNode.addSortedChildren(children);
        } else if (isList(object)) {
            int i = 0;
            List<com.xliic.openapi.parser.ast.node.Node> children = new LinkedList<>();
            for (org.snakeyaml.engine.v2.nodes.Node node : ((SequenceNode) object).getValue()) {
                com.xliic.openapi.parser.ast.node.Node child = createNode(node, astNode, depth + 1, pointer + "/" + i, String.valueOf(i));
                children.add(child);
                dfs(node, child);
                i++;
            }
            astNode.addSortedChildren(children);
        }
    }

    public static String escape(String token) {
        return token.replace("~", "~0").replace("/", "~1").replace("\\", "\\\\").replace("\"", "\\\"");
    }

    public static boolean isMap(Object object) {
        return (object instanceof MappingNode) && (((MappingNode) object).getNodeType() == NodeType.MAPPING);
    }

    public static boolean isList(Object object) {
        return (object instanceof SequenceNode) && (((SequenceNode) object).getNodeType() == NodeType.SEQUENCE);
    }
}
