package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;

public class Tag {

    @NotNull
    private final String categoryName;
    @NotNull
    private final String tagName;
    @NotNull
    private final String tagId;
    private final boolean onlyAdminCanTag;
    
    public Tag(@NotNull String categoryName, @NotNull String tagName, @NotNull String tagId) {
        this(categoryName, tagName, tagId, false);
    }

    public Tag(@NotNull String categoryName, @NotNull String tagName, @NotNull String tagId, boolean onlyAdminCanTag) {
        this.categoryName = categoryName;
        this.tagName = tagName;
        this.tagId = tagId;
        this.onlyAdminCanTag = onlyAdminCanTag;
    }

    public @NotNull String getTagName() {
        return tagName;
    }

    public @NotNull String getTagId() {
        return tagId;
    }

    public boolean isOnlyAdminCanTag() {
        return onlyAdminCanTag;
    }

    public boolean equals(@NotNull String tag) {
        return tag.equals(getFullTagName());
    }
    
    public @NotNull String getFullTagName() {
        return categoryName + ":" + tagName;
    }
}
