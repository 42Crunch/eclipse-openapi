package com.xliic.openapi.quickfix.editor.json;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.Processor;
import org.jetbrains.annotations.NotNull;

public class JSONDocumentInserter extends Processor {

    public JSONDocumentInserter(@NotNull Editor editor, @NotNull Node root) {
        super(editor, root);
    }

    @Override
    public DocumentUpdate process(@NotNull FixItem item) {

        Node target = root.find(item.getPointer());
        if (target.isScalar()) {
            return null;
        }

        String value = (String) item.getValue();
        // The consent is that insertion into object = insertion of the key - value pair
        if (target.isObject()) {
            if (value.startsWith("{\n\t") && value.endsWith("\n}")) {
                value = value.substring(3, value.length() - 2);
                // Replace only trailing \t, i.e. a\t\t\ta\t\ta\t -> a\t\ta\ta
                value = value.replaceAll("\t(?!\t)", "");
            }
        }

        int start, end;
        DocumentIndent indent = getBasicIndent(root);

        Node anchorNode;
        if (target.isObject() && (item.getAnchorPointer() != null)) {
            anchorNode = root.find(item.getAnchorPointer());
        } else {
            anchorNode = target.getLastChild();
        }

        if (anchorNode == null) {
            Range range = target.getValueRange();
            end = range.getStartOffset() + 1;
            int padding = getCurrentIndent(target.getRange().getStartOffset()) + indent.getIndent();
            value = "\n" + indent.toString(padding) + shift(value, indent, padding, 0, false);
            if (!document.getText(getTextRange(range)).contains("\n")) {
                value += "\n";
            }
            return new DocumentUpdate(createMarker(end), value);
        } else {
            Range range = anchorNode.getRange();
            start = range.getStartOffset();
            end = range.getEndOffset();
            int padding = getCurrentIndent(start);
            return new DocumentUpdate(createMarker(end), ",\n" + shift(value, indent, padding));
        }
    }

    @Override
    public void apply(@NotNull DocumentUpdate update) {
        document.insertString(update.getMarker().getEndOffset(), update.getValue());
    }
}
