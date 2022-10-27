package com.xliic.openapi.quickfix;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.quickfix.editor.PlaceHolder;

public class FixItem {

    public static final Object NULL = new Object() {
        @Override
        public String toString() {
            return "null";
        }
    };

    protected final String pointer;
    protected final Object value;
    protected final FixType fixType;

    protected String anchorPointer = null;
    protected final List<PlaceHolder> placeHolders = new LinkedList<>();

    public FixItem(@NotNull String pointer, @NotNull Object value, @NotNull FixType fixType) {
        this.pointer = pointer;
        this.value = value;
        this.fixType = fixType;
    }

    public String getPointer() {
        return pointer;
    }

    public Object getValue() {
        return value;
    }

    public FixType getFixType() {
        return fixType;
    }

    public String getAnchorPointer() {
        return anchorPointer;
    }

    public FixItem withAnchorPointer(@Nullable String pointer) {
        this.anchorPointer = pointer;
        return this;
    }

    public List<PlaceHolder> getPlaceHolders() {
        return placeHolders;
    }

    public FixItem withPlaceHolders(@NotNull List<PlaceHolder> placeHolders) {
        this.placeHolders.addAll(placeHolders);
        return this;
    }

    public void setPlaceHolderOffset(int offset) {
        for (PlaceHolder placeHolder : placeHolders) {
            placeHolder.setOffset(offset);
        }
    }
}