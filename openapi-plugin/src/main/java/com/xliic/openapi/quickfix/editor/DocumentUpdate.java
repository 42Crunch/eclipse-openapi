package com.xliic.openapi.quickfix.editor;

import com.xliic.core.editor.RangeMarker;

public class DocumentUpdate {

    private final RangeMarker marker;
    private final String value;

    public DocumentUpdate(RangeMarker marker, String value) {
        this.marker = marker;
        this.value = value;
    }

    public RangeMarker getMarker() {
        return marker;
    }

    public String getValue() {
        return value;
    }
}
