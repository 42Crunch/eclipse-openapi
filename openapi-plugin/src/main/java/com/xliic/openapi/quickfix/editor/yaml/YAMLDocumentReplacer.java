package com.xliic.openapi.quickfix.editor.yaml;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.RangeMarker;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentUpdate;
import com.xliic.openapi.quickfix.editor.Processor;

public class YAMLDocumentReplacer extends Processor {

    private final boolean forKey;

    public YAMLDocumentReplacer(@NotNull Editor editor, @NotNull Node root, boolean forKey) {
        super(editor, root);
        this.forKey = forKey;
    }

    @Override
    public DocumentUpdate process(@NotNull FixItem item) {

        Node target = root.find(item.getPointer());
        Object value = item.getValue();
        if (forKey) {
            Range range = target.getKeyRange();
            return new DocumentUpdate(createMarker(range), (String) value);

        } else {
            Range range = target.getValueRange();
            String text;
            if (value instanceof List) {
                text = wrapList((List<?>) value);
            } else {
                text = String.valueOf(value);
            }
            if (target.isArray() && value instanceof List) {
                String myValue = getTextByRange(range.getStartOffset(), range.getEndOffset());
                if (myValue.contains("-")) {
                    int start = getSafeOffset(range.getStartOffset());
                    int end = getSafeOffset(range.getEndOffset());
                    return new DocumentUpdate(createMarker(start, end), " " + text);
                }
            }
            return new DocumentUpdate(createMarker(range), text);
        }
    }

    @Override
    public void apply(@NotNull DocumentUpdate update) {
        RangeMarker marker = update.getMarker();
        document.replaceString(marker.getStartOffset(), marker.getEndOffset(), update.getValue());
    }
}
