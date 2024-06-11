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

    @NotNull
    protected final String pointer;
    @NotNull
    protected final Object value;
    @NotNull
    protected final FixType fixType;
    @Nullable
    protected String anchorPointer = null;
    @NotNull
    protected final List<PlaceHolder> placeHolders = new LinkedList<>();

    public FixItem(@NotNull String pointer, @NotNull Object value, @NotNull FixType fixType) {
        this.pointer = pointer;
        this.value = value;
        this.fixType = fixType;
    }

    public @NotNull String getPointer() {
        return pointer;
    }

    public @NotNull Object getValue() {
        return value;
    }

    public @NotNull FixType getFixType() {
        return fixType;
    }

    public @Nullable String getAnchorPointer() {
        return anchorPointer;
    }

    public @NotNull FixItem withAnchorPointer(@Nullable String pointer) {
        this.anchorPointer = pointer;
        return this;
    }

    public @NotNull List<PlaceHolder> getPlaceHolders() {
        return placeHolders;
    }

    public @NotNull FixItem withPlaceHolders(@NotNull List<PlaceHolder> placeHolders) {
        this.placeHolders.addAll(placeHolders);
        return this;
    }

    public void setPlaceHolderOffset(int offset) {
        for (PlaceHolder placeHolder : placeHolders) {
            placeHolder.setOffset(offset);
        }
    }
    
    public static @NotNull FixItem getDeleteFixItem(@NotNull String pointer) {
        return new FixItem(pointer, "", FixType.Delete);
    }
}