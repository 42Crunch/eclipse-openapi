package com.xliic.openapi.outline.node;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;

public abstract class BaseNode {

    @Nullable
    protected final BaseNode parent;
    @Nullable
    protected Node node;
    @NotNull
    protected String name;

    protected boolean isMoveToEnabled;
    protected boolean skipDeepSearch;
    protected boolean searchable;
    protected boolean copyEnabled;

    public BaseNode(@NotNull String name, @Nullable Node node, @Nullable BaseNode parent) {
        this.name = name;
        this.node = node;
        this.parent = parent;
        isMoveToEnabled = node != null;
        skipDeepSearch = false;
        searchable = true;
        copyEnabled = false;
    }

    public boolean isMoveToEnabled() {
        return isMoveToEnabled;
    }

    public @NotNull String getName() {
        return name;
    }

    @NotNull
    public String getPointer() {
        return (node == null) ? "/" + name : node.getJsonPointer();
    }

    public Range getRange() {
        return (node == null) ? new Range() : node.getRange();
    }

    public @Nullable Node getNode() {
        return node;
    }

    public @Nullable BaseNode getParent() {
        return parent;
    }

    public boolean isSearchable() {
        return searchable;
    }

    public boolean isSkipDeepSearch() {
        return skipDeepSearch;
    }

    public void setSkipDeepSearch(boolean skipDeepSearch) {
        this.skipDeepSearch = skipDeepSearch;
    }

    public void updateSkipDeepSearch() {
        if (parent != null) {
            setSkipDeepSearch(parent.isSkipDeepSearch());
        }
    }

    public abstract int getLevel();

    public boolean isCopyEnabled() {
        return copyEnabled;
    }
}
