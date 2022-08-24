package com.xliic.openapi.quickfix.editor;

import com.xliic.core.editor.RangeMarker;
import com.xliic.openapi.quickfix.FixItem;

public class DocumentUpdate {

    private final FixItem item;
    private final RangeMarker marker;
    private final String value;

    public DocumentUpdate(FixItem item, RangeMarker marker, String value) {
        this.item = item;
        this.marker = marker;
        this.value = value;
    }

    public FixItem getItem() {
        return item;
    }

    public RangeMarker getMarker() {
        return marker;
    }

    public String getValue() {
        return value;
    }
}
