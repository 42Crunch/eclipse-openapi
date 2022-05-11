package com.xliic.openapi.parser.ast;

import org.jetbrains.annotations.NotNull;
import org.snakeyaml.engine.v2.exceptions.Mark;
import org.snakeyaml.engine.v2.nodes.*;

import java.util.List;
import java.util.Optional;

public class Range implements Comparable<Range> {

    private final int line;
    private final int column;
    private final int startOffset;
    private final int endOffset;

    public Range() {
        line = 0;
        column = 0;
        endOffset = 0;
        startOffset = 0;
    }

    public Range(int startOffset, int endOffset, int line, int column) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.line = line;
        this.column = column;
    }

    public int getStartOffset() {
        return startOffset;
    }

    public int getEndOffset() {
        return endOffset;
    }

    public int getLine() {
        return line;
    }

    public int getColumn() {
        return column;
    }

    @Override
    public int compareTo(@NotNull Range o) {
        return Integer.compare(getStartOffset(), o.getStartOffset());
    }

    public boolean contains(int offset) {
        return (startOffset <= offset) && (offset <= endOffset);
    }

    public Range extend(Range followingRange) {
        return new Range(startOffset, followingRange.getEndOffset(), line, column);
    }

    public static Range getKeyRange(Object entry) {
        if (entry instanceof NodeTuple) {
            return getRangeFromNode(((NodeTuple) entry).getKeyNode(), false);
        }
        return null;
    }

    public static Range getValueRange(Object entry, boolean isJson) {
        if (entry instanceof NodeTuple) {
            return getRangeFromNode(((NodeTuple) entry).getValueNode(), true);
        }
        else if (entry instanceof MappingNode) {
            MappingNode node = (MappingNode) entry;
            List<NodeTuple> children = node.getValue();
            if (children.isEmpty() || isJson) {
                return getRangeFromNode(node, !isJson);
            }
            else {
                return getRangeFromNodes(node, children.get(children.size() - 1).getValueNode());
            }
        }
        else if (entry instanceof SequenceNode) {
            SequenceNode node = (SequenceNode) entry;
            List<Node> children = node.getValue();
            if (children.isEmpty() || isJson) {
                return getRangeFromNode(node, !isJson);
            }
            else {
                return getRangeFromNodes(node, children.get(children.size() - 1));
            }
        }
        return getRangeFromNode((ScalarNode) entry, true);
    }

    public static Range getRange(Object entry, boolean isJson) {
        Range range = getValueRange(entry, isJson);
        if (entry instanceof NodeTuple) {
            return getKeyRange(entry).extend(range);
        }
        return range;
    }

    public static Range getHighLightRange(Object entry) {
        Range range = getKeyRange(entry);
        if (range != null) {
            return range;
        }
        Node node = (entry instanceof NodeTuple) ? ((NodeTuple) entry).getKeyNode() : (Node) entry;
        Optional<Mark> startMark = node.getStartMark();
        if (startMark.isPresent()) {
            int line = startMark.get().getLine();
            int column = startMark.get().getColumn();
            int startOffset = startMark.get().getIndex();
            String lineText = startMark.get().createSnippet(0, 1024);
            int index = lineText.indexOf("\r\n", column);
            if (index == -1) {
                index = lineText.indexOf('\n', column);
            }
            int endOffset = (index != -1) ? startOffset + index - column : startOffset + 1;
            return new Range(startOffset, endOffset, line, column);
        }
        return null;
    }

    private static Range getRangeFromNode(Node node, boolean excludeNewLine) {
        Optional<Mark> startMark = node.getStartMark();
        Optional<Mark> endMark = node.getEndMark();
        if (startMark.isPresent() && endMark.isPresent()) {
            int line = startMark.get().getLine();
            int column = startMark.get().getColumn();
            int startOffset = startMark.get().getIndex();
            int endOffset = endMark.get().getIndex();
            if (excludeNewLine && (endMark.get().getColumn() == 0)) {
                endOffset -= 1;
            }
            return new Range(startOffset, endOffset, line, column);
        }
        return null;
    }

    private static Range getRangeFromNodes(Node startNode, Node endNode) {
        Optional<Mark> startMark = startNode.getStartMark();
        Optional<Mark> endMark = endNode.getEndMark();
        if (startMark.isPresent() && endMark.isPresent()) {
            int line = startMark.get().getLine();
            int column = startMark.get().getColumn();
            int startOffset = startMark.get().getIndex();
            int endOffset = endMark.get().getIndex();
            if (endMark.get().getColumn() == 0) {
                endOffset -= 1;
            }
            return new Range(startOffset, endOffset, line, column);
        }
        return null;
    }
}
