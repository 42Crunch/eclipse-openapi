package com.xliic.openapi.platform.tree.node;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;

public class PlatformRootCloud implements Paginator, Filter {

    private final static String NAME = "API Collections";
    private volatile boolean childrenUnavailable;

    private int pageSize = Paginator.PAGE_SIZE;
    private String filterName;

    public PlatformRootCloud() {
        childrenUnavailable = true;
    }

    public String getName() {
        return NAME;
    }

    public boolean isChildrenUnavailable() {
        return childrenUnavailable;
    }

    public void setChildrenUnavailable(boolean childrenUnavailable) {
        this.childrenUnavailable = childrenUnavailable;
    }

    @Override
    public boolean pass(@NotNull DefaultMutableTreeNode childDMTN) {
        if (!StringUtils.isEmpty(filterName)) {
            Object obj = childDMTN.getUserObject();
            if (obj instanceof PlatformCollection) {
                PlatformCollection collectionObj = (PlatformCollection) obj;
                return StringUtils.containsIgnoreCase(collectionObj.getName(), filterName);
            }
        }
        return true;
    }

    @Override
    public void setFilterName(@NotNull String name) {
        filterName = name;
    }

    @Override
    public void reset() {
        filterName = "";
    }

    @Override
    public boolean isActive() {
        return !StringUtils.isEmpty(filterName);
    }

    @Override
    public int getPageSize() {
        return pageSize;
    }

    @Override
    public void increasePageSize() {
        this.pageSize += PAGE_SIZE;
    }

    @Override
    public void resetPageSize() {
        this.pageSize = PAGE_SIZE;
    }
}
