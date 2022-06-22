package com.xliic.openapi.quickfix.editor.yaml;

import com.xliic.core.editor.Editor;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentIndent;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;

import java.util.List;

public class YAMLDocumentInserter extends DocumentUpdater {

    public YAMLDocumentInserter(Editor editor, ParserAST parser, List<FixItem> fixItems) {
        super(editor, parser, fixItems);
    }

    @Override
    public DocumentUpdate process(FixItem item) {

        Node target = root.find(item.getAbsPointer());
        if (target.isScalar()) {
            return null;
        }
        Node insertAfterChild;
        if (target.isObject() && (item.getInsertAfterPointer() != null)) {
            insertAfterChild = root.find(item.getInsertAfterPointer());
        }
        else {
            insertAfterChild = target.getLastChild();
        }
        if (insertAfterChild == null) {
            return null;
        }

        Range range = insertAfterChild.getRange();
        int start = range.getStartOffset();
        int end = getSafeEndOffset(range.getEndOffset());

        DocumentIndent indent = getBasicIndent(root);
        int padding = getCurrentIndent(start);

        if (target.isObject()) {
            String value = "\n" + shift(item.getText(), indent, padding);
            return new DocumentUpdate(item, createMarker(end), value);
        }
        else if (target.isArray()) {
            String value = "\n" + shift("- " + item.getText(), indent, padding, "- ".length());
            return new DocumentUpdate(item, createMarker(end), value);
        }
        return null;
    }

    @Override
    public void apply(DocumentUpdate update) {
        document.insertString(update.getMarker().getEndOffset(), update.getValue());
    }
}
