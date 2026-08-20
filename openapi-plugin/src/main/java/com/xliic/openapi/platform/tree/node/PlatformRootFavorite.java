package com.xliic.openapi.platform.tree.node;

public class PlatformRootFavorite {

    private final static String NAME = "My Favorite Collections";

    private volatile boolean childrenUnavailable = true;

    public boolean isChildrenUnavailable() {
        return childrenUnavailable;
    }

    public void setChildrenUnavailable(boolean childrenUnavailable) {
        this.childrenUnavailable = childrenUnavailable;
    }

    public String getName() {
        return NAME;
    }
}
