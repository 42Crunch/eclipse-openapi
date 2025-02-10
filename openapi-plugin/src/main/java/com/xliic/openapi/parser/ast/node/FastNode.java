package com.xliic.openapi.parser.ast.node;

import com.xliic.openapi.parser.ast.Range;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.PrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;

public class FastNode extends Node {

    private static final Object DUMMY_NODE = new Object();

    private final Object value;

    public FastNode(Object value, FastNode parent, int depth, String pointer, String key) {
        super(DUMMY_NODE, parent, depth, pointer, key);
        this.value = value;
    }

    @Override
    public String getValue() {
        if (isScalar()) {
            return value instanceof String ? (String) value : String.valueOf(value);
        }
        return null;
    }

    @Override
    public Object getTypedValue() {
        if (isScalar()) {
            return value;
        }
        return null;
    }

    @Override
    public boolean isArray() {
        return value instanceof List;
    }

    @Override
    public boolean isObject() {
        return value instanceof Map;
    }

    @Override
    public void addSortedChildren(List<Node> nodes) {
        // Do not sort in fast nodes
        getChildren().addAll(nodes);
    }

    @Override
    @Nullable
    public Node find(String pointer) {
        if (getParent() != null) {
            pointer = getJsonPointer() + pointer;
        }
        if (getJsonPointer().equals(pointer)) {
            return this;
        }
        List<Node> candidates = new ArrayList<>();
        candidates.add(this);
        for (int i = 0; i < candidates.size(); i++) {
            for (Node node : candidates.get(i).getChildren()) {
                if (node.getJsonPointer().equals(pointer)) {
                    return node;
                }
                if (pointer.startsWith(node.getJsonPointer())) {
                    candidates.add(node);
                }
            }
        }
        return null;
    }

    @Override
    public int compareTo(Node o) {
        throw new UnsupportedOperationException("Sort is not supported");
    }

    @Override
    @Nullable
    public Node find(String pointer, int offset) {
        throw new UnsupportedOperationException("Find with offset is not supported");
    }

    @Override
    public Range getKeyRange() {
        throw new UnsupportedOperationException("GetKeyRange is not supported");
    }

    @Override
    public Range getValueRange() {
        throw new UnsupportedOperationException("GetValueRange is not supported");
    }

    @Override
    public Range getRange() {
        throw new UnsupportedOperationException("GetRange is not supported");
    }

    @Override
    public Range getHighlightRange() {
        throw new UnsupportedOperationException("GetHighlightRange is not supported");
    }

    @Override
    public Object getNode() {
        throw new UnsupportedOperationException("GetNode is not supported");
    }

    @Override
    public Node findNodeAtOffset(int offset) {
        throw new UnsupportedOperationException("FindNodeAtOffset is not supported");
    }

    @Override
    public String dump() {
        throw new UnsupportedOperationException("Dump is not supported");
    }
    
    @NotNull
    public String dump(@NotNull PrettyPrinter printer) throws JsonProcessingException {
        return new ObjectMapper().writer(printer).writeValueAsString(value).trim();
    }
}
