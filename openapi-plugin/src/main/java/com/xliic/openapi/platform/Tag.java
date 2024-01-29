package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;

public class Tag {

    @NotNull
    private final String categoryName;
    @NotNull
    private final String tagName;
    @NotNull
    private final String tagId;

    public Tag(@NotNull String categoryName, @NotNull String tagName, @NotNull String tagId) {
        this.categoryName = categoryName;
        this.tagName = tagName;
        this.tagId = tagId;
    }

    public @NotNull String getCategoryName() {
        return categoryName;
    }

    public @NotNull String getTagName() {
        return tagName;
    }

    public @NotNull String getTagId() {
        return tagId;
    }

    public boolean equals(@NotNull String tag) {
        return tag.equals(categoryName + ":" + tagName);
    }
}
