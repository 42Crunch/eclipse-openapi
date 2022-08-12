package com.xliic.openapi.quickfix.editor;

import java.util.List;

public class PlaceHolder {

	private final String id;
    private final String pointer;
    private final boolean isForKey;
    private final List<Object> values;
    private int offset;

    public PlaceHolder(String id, String pointer, boolean isForKey, List<Object> values) {
    	this.id = id;
        this.pointer = pointer;
        this.isForKey = isForKey;
        this.values = values;
        offset = 0;
    }

    public String getId() {
        return id;
    }
    
    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getOffset() {
        return offset;
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
    
    public boolean isBoundTo(PlaceHolder placeHolder) {
        return id.equals(placeHolder.getId());
    }
}
