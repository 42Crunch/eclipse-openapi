package com.xliic.openapi.quickfix.editor.yaml;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.Processor;

public class YAMLDocumentInserter extends Processor {

    public YAMLDocumentInserter(@NotNull Editor editor, @NotNull Node root) {
        super(editor, root);
    }

    @Override
    public DocumentUpdate process(@NotNull FixItem item) {

        Node target = root.find(item.getPointer());
        if (target.isScalar()) {
            return null;
        }
        Node insertAfterChild;
        if (target.isObject() && (item.getAnchorPointer() != null)) {
            insertAfterChild = root.find(item.getAnchorPointer());
        } else {
            insertAfterChild = target.getLastChild();
        }
        if (insertAfterChild == null) {
            return null;
        }

        Range range = insertAfterChild.getRange();
        int start = range.getStartOffset();
        int end = getSafeOffset(range.getEndOffset());

        DocumentIndent indent = getBasicIndent(root);
        int padding = getCurrentIndent(start);

        if (target.isObject()) {
            String value = "\n" + shift((String) item.getValue(), indent, padding);
            return new DocumentUpdate(createMarker(end), value);
        } else if (target.isArray()) {
            String value = "\n" + shift("- " + item.getValue(), indent, padding, "- ".length());
            return new DocumentUpdate(createMarker(end), value);
        }
        return null;
    }

    @Override
    public void apply(@NotNull DocumentUpdate update) {
        document.insertString(update.getMarker().getEndOffset(), update.getValue());
    }
}
