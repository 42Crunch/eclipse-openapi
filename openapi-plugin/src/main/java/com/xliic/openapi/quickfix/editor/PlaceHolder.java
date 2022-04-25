package com.xliic.openapi.quickfix.editor;

import java.util.List;

public class PlaceHolder {

    String pointer;
    boolean isForKey;
    List<Object> values;

    public PlaceHolder(String pointer, boolean isForKey, List<Object> values) {
        this.pointer = pointer;
        this.isForKey = isForKey;
        this.values = values;
    }

    public String getPointer() {
        return pointer;
    }

    public boolean isForKey() {
        return isForKey;
    }

    public List<Object> getValues() {
        return values;
    }
}
