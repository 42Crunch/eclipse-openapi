package com.xliic.openapi.quickfix.editor.yaml;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.util.DocumentUtil;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.Processor;
import org.jetbrains.annotations.NotNull;

public class YAMLDocumentDeleter extends Processor {

    public YAMLDocumentDeleter(@NotNull Editor editor, @NotNull Node root) {
        super(editor, root);
    }

    @Override
    public DocumentUpdate process(@NotNull FixItem item) {

        Document document = editor.getDocument();
        Node target = root.find(item.getPointer());

        Range range = target.getRange();
        int start = range.getStartOffset();
        int end = range.getEndOffset();

        if (target.next() != null) {
            end = target.next().getRange().getStartOffset();
        } else if (target.prev() != null) {
            start = getSafeOffset(target.prev().getRange().getEndOffset());
            end = getSafeOffset(end);
        } else {
            if (hasNoAlphabeticCharBeforeOffset(start)) {
                start = DocumentUtil.getLineStartOffset(start, document);
            }
            end = includeEOL(getSafeOffset(end));
        }
        return new DocumentUpdate(createMarker(start, end), null);
    }

    @Override
    public void apply(@NotNull DocumentUpdate update) {
        document.deleteString(update.getMarker().getStartOffset(), update.getMarker().getEndOffset());
    }
}
