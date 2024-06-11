package com.xliic.openapi.quickfix.editor;

import java.util.List;

import org.jetbrains.annotations.NotNull;

public class PlaceHolder {

	@NotNull
    private final String id;
	@NotNull
    private final String pointer;
    private final boolean isForKey;
    @NotNull
    private final List<Object> values;
    private int offset;

    public PlaceHolder(@NotNull String id, @NotNull String pointer, boolean isForKey, @NotNull List<Object> values) {
        this.id = id;
        this.pointer = pointer;
        this.isForKey = isForKey;
        this.values = values;
        offset = 0;
    }

    public @NotNull String getId() {
        return id;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getOffset() {
        return offset;
    }

    public @NotNull String getPointer() {
        return pointer;
    }

    public boolean isForKey() {
        return isForKey;
    }

    public @NotNull List<Object> getValues() {
        return values;
    }

    public boolean isBoundTo(PlaceHolder placeHolder) {
        return id.equals(placeHolder.getId());
    }
}
