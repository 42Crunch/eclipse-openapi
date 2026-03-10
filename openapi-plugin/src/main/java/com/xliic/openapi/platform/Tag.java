package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Tag {

    @NotNull
    private final String categoryName;
    @NotNull
    private final String tagName;
    @NotNull
    private final String tagId;
    @Nullable
    private final String exclusiveCategoryId;
    private final boolean onlyAdminCanTag;

    public Tag(@NotNull String categoryName, @NotNull String tagName, @NotNull String tagId) {
        this(categoryName, tagName, tagId, null, false);
    }

    public Tag(@NotNull String categoryName,
               @NotNull String tagName,
               @NotNull String tagId,
               @Nullable String exclusiveCategoryId,
               boolean onlyAdminCanTag) {
        this.categoryName = categoryName;
        this.tagName = tagName;
        this.tagId = tagId;
        this.exclusiveCategoryId = exclusiveCategoryId;
        this.onlyAdminCanTag = onlyAdminCanTag;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        Tag tag = (Tag) o;
        return tagId.equals(tag.tagId);
    }

    @Override
    public int hashCode() {
        return tagId.hashCode();
    }

    public @NotNull String getTagName() {
        return tagName;
    }

    public @NotNull String getTagId() {
        return tagId;
    }

    public @Nullable String getExclusiveCategoryId() {
        return exclusiveCategoryId;
    }

    public @NotNull String getCategoryName() {
        return categoryName;
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
