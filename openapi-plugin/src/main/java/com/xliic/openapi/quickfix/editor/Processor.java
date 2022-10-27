package com.xliic.openapi.quickfix.editor;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.util.TextRange;
import com.xliic.core.util.DocumentUtil;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

public abstract class Processor {

    protected final Editor editor;
    protected final Document document;
    protected final Node root;

    public Processor(@NotNull Editor editor, @NotNull Node root) {
        this.editor = editor;
        document = this.editor.getDocument();
        this.root = root;
    }

    @Nullable
    protected abstract DocumentUpdate process(@NotNull FixItem item);

    protected abstract void apply(@NotNull DocumentUpdate update);

    protected RangeMarker createMarker(int endOffset) {
        return createMarker(endOffset, endOffset);
    }

    protected RangeMarker createMarker(Range range) {
        return createMarker(range.getStartOffset(), range.getEndOffset());
    }

    protected RangeMarker createMarker(int startOffset, int endOffset) {
        return editor.getDocument().createRangeMarker(TextRange.create(startOffset, endOffset));
    }

    protected DocumentIndent getBasicIndent(Node root) {
        Node target = null;
        for (Node child : root.getChildren()) {
            if (child.isObject()) {
                List<Node> tmp = child.getChildren();
                if (!tmp.isEmpty()) {
                    target = tmp.get(0);
                }
            }
        }
        if (target == null) {
            return DocumentIndent.defaultInstance();
        }
        int offset = target.getRange().getStartOffset();
        int index = getCurrentIndent(offset);
        int depth = (root instanceof JsonNode) ? target.getDepth() : target.getDepth() - 1;
        int indent = index / depth;
        if (indent == 0) {
            return DocumentIndent.defaultInstance();
        }
        return new DocumentIndent(indent, getLineTextByOffset(offset).startsWith("\t") ? '\t' : ' ');
    }

    protected int getCurrentIndent(int offset) {
        return firstAlphabeticCharIndex(getLineTextByOffset(offset));
    }

    protected String shift(String text, DocumentIndent indent, int padding) {
        return shift(text, indent, padding, 0, true);
    }

    protected String shift(String text, DocumentIndent indent, int padding, int extra) {
        return shift(text, indent, padding, extra, true);
    }

    protected String shift(String text, DocumentIndent indent, int padding, int extra, boolean prepend) {
        if (prepend) {
            text = indent.toString(padding) + text;
        }
        text = text.replace("\n", "\n" + indent.toString(padding + extra));
        return text.replace("\t", indent.toString());
    }

    private String getLineTextByOffset(int offset) {
        Document document = editor.getDocument();
        return document.getText(DocumentUtil.getLineTextRange(document, document.getLineNumber(offset)));
    }

    protected String getTextByRange(int start, int end) {
        Document document = editor.getDocument();
        return document.getText(new TextRange(start, end));
    }

    protected int getSafeOffset(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        if (column == 0) {
            return offset - 1;
        } else if (hasNoAlphabeticCharBeforeOffset(offset)) {
            return offset - column - 1;
        }
        return offset;
    }

    protected int includeEOL(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        String text = getLineTextByOffset(offset);
        // If the next symbol is \n
        if (text.length() == column) {
            return offset + 1;
        }
        return offset;
    }

    protected boolean hasNoAlphabeticCharBeforeOffset(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        if (column == 0) {
            return true;
        }
        String text = getLineTextByOffset(offset).substring(0, column);
        text = text.replace(" ", "").replace("\t", "");
        return (text.length() == 0) || ("-".equals(text));
    }

    protected static TextRange getTextRange(Range range) {
        return new TextRange(range.getStartOffset(), range.getEndOffset());
    }

    protected static String wrapQuotes(@NotNull String text) {
        return "\"" + text + "\"";
    }

    protected String wrapList(List<?> values) {
        int index = 0;
        StringBuilder result = new StringBuilder("[");
        for (Object value : values) {
            result.append(value instanceof String ? wrapQuotes((String) value) : String.valueOf(value));
            if (index < values.size() - 1) {
                result.append(", ");
            }
            index += 1;
        }
        result.append("]");
        return result.toString();
    }

    private static int firstAlphabeticCharIndex(String lineText) {
        int index = 0;
        while (index < lineText.length()) {
            char ch = lineText.charAt(index);
            if ((ch != ' ') && (ch != '\t')) {
                break;
            }
            index += 1;
        }
        return index;
    }
}
