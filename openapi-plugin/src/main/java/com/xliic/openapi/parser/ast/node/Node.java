package com.xliic.openapi.parser.ast.node;

import com.xliic.openapi.parser.ast.NodeStringWriter;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import org.snakeyaml.engine.v2.api.DumpSettings;
import org.snakeyaml.engine.v2.api.StreamDataWriter;
import org.snakeyaml.engine.v2.emitter.Emitter;
import org.snakeyaml.engine.v2.nodes.*;
import org.snakeyaml.engine.v2.serializer.Serializer;

import java.util.*;

public abstract class Node implements Comparable<Node> {

    private final int depth;
    private final String key;
    private final String pointer;

    protected final Object node;
    private final Node parent;
    private final List<Node> children;

    private static final DumpSettings settings = DumpSettings.builder().build();

    public Node(Object node, Node parent, int depth, String pointer, String key) {
        this.node = node;
        this.parent = parent;
        this.children = new LinkedList<>();
        this.depth = depth;
        this.pointer = pointer;
        this.key = key;
    }

    public Range getHighlightRange() {
        if (parent == null) {
            for (Node child : children) {
                String key = child.getKey();
                if ("openapi".equals(key) || "swagger".equals(key)) {
                    return child.getHighlightRange();
                }
            }
        }
        return Range.getHighLightRange(node);
    }

    public Node getChild(String key) {
        for (Node node : getChildren()) {
            if (node.getKey().equals(key)) {
                return node;
            }
        }
        return null;
    }

    public String getChildValue(String key) {
        Node result = getChild(key);
        return (result == null) ? null : result.getValue();
    }

    @Override
    public int compareTo(Node o) {
        return getValueRange().compareTo(o.getValueRange());
    }

    public Object getNode() {
        return node;
    }

    public Node getParent() {
        return parent;
    }

    public List<Node> getChildren() {
        return children;
    }

    public int getDepth() {
        return depth;
    }

    public String getJsonPointer() {
        return pointer;
    }

    public void addSortedChildren(List<Node> nodes) {
        Collections.sort(nodes);
        children.addAll(nodes);
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        if (node instanceof NodeTuple) {
            return ((ScalarNode) ((NodeTuple) (node)).getValueNode()).getValue();
        }
        else if (node instanceof ScalarNode) {
            return ((ScalarNode) node).getValue();
        }
        else {
            return null;
        }
    }

    public Object getTypedValue() {
        if (node instanceof NodeTuple) {
            return getValueFromScalarNode((ScalarNode) ((NodeTuple) (node)).getValueNode());
        }
        else if (node instanceof ScalarNode) {
            return getValueFromScalarNode((ScalarNode) node);
        }
        else {
            return null;
        }
    }

    public Node find(String pointer) {
        return find(pointer, 0);
    }

    public Node find(String pointer, int offset) {
        if (parent != null) {
            pointer = getJsonPointer() + pointer;
        }
        if (getJsonPointer().equals(pointer)) {
            return this;
        }
        List<Node> candidates = new ArrayList<>();
        candidates.add(this);
        for (int i = 0; i < candidates.size(); i++) {
            for (Node node : candidates.get(i).getChildren()) {
                if (node.getJsonPointer().equals(pointer) && (node.getRange().getStartOffset() >= offset)) {
                    return node;
                }
                if (pointer.startsWith(node.getJsonPointer())) {
                    candidates.add(node);
                }
            }
        }
        return null;
    }

    public Range getKeyRange() {
        return Range.getKeyRange(node);
    }

    public abstract Range getValueRange();
    public abstract Range getRange();

    public Node next() {
        List<Node> children = getParent().getChildren();
        for (int i = 1; i < children.size(); i++) {
            if (Objects.equals(this, children.get(i - 1))) {
                return children.get(i);
            }
        }
        return null;
    }

    public Node prev() {
        List<Node> children = getParent().getChildren();
        for (int i = 0; i < children.size() - 1; i++) {
            if (Objects.equals(this, children.get(i + 1))) {
                return children.get(i);
            }
        }
        return null;
    }

    public Node getLastChild() {
        List<Node> children = getChildren();
        if (children.isEmpty()) {
            return null;
        }
        return children.get(children.size() - 1);
    }

    public boolean isArray() {
        if (node instanceof NodeTuple) {
            return ParserAST.isList(((NodeTuple) node).getValueNode());
        }
        else if (node instanceof SequenceNode) {
            return ParserAST.isList(node);
        }
        return false;
    }

    public boolean isObject() {
        if (node instanceof NodeTuple) {
            return ParserAST.isMap(((NodeTuple) node).getValueNode());
        }
        else if (node instanceof MappingNode) {
            return ParserAST.isMap(node);
        }
        return false;
    }

    public boolean isScalar() {
        return !isArray() && !isObject();
    }

    public Node findNodeAtOffset(int offset) {
        if (getRange().contains(offset)) {
            final Node result = findNodeAtOffset(this, offset);
            // Make no sense to return the root node as it always contains any offset within the text range
            return result.getParent() == null ? null : result;
        }
        return null;
    }

    public String dump() {
        StreamDataWriter writer = new NodeStringWriter();
        Serializer serializer = new Serializer(settings, new Emitter(settings, writer));
        serializer.open();
        if (node instanceof NodeTuple) {
            serializer.serialize(((NodeTuple) node).getValueNode());
        }
        else {
            serializer.serialize((org.snakeyaml.engine.v2.nodes.Node) node);
        }
        serializer.close();
        String text = writer.toString().trim();
        return text.startsWith("---\n") ? text.replace("---\n", "") : text;
    }

    // Must be called only if the parent node already contains offset
    private Node findNodeAtOffset(Node parent, int offset) {
        for (Node node : parent.getChildren()) {
            if (node.getRange().contains(offset)) {
                return findNodeAtOffset(node, offset);
            }
        }
        return parent;
    }

    private Object getValueFromScalarNode(ScalarNode node) {
        Tag tag = node.getTag();
        if (tag == Tag.BOOL) {
            return Boolean.valueOf(node.getValue());
        }
        else if (tag == Tag.INT) {
            return Integer.valueOf(node.getValue());
        }
        else if (tag == Tag.FLOAT) {
            return Float.valueOf(node.getValue());
        }
        return node.getValue();
    }
}