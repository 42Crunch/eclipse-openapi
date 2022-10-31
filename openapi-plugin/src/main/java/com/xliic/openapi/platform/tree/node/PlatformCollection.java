package com.xliic.openapi.platform.tree.node;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;

public class PlatformCollection implements Paginator, Filter {

    private final String id;
    private final boolean locked;
    private String name;
    private volatile boolean childrenUnavailable;

    private int pageSize = Paginator.PAGE_SIZE;
    private String filterName;

    public PlatformCollection(String id, String name, boolean locked) {
        this.id = id;
        this.name = name;
        this.locked = locked;
        childrenUnavailable = true;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isLocked() {
        return locked;
    }

    public String getId() {
        return id;
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
            if (obj instanceof PlatformAPI) {
                PlatformAPI apiObj = (PlatformAPI) obj;
                return StringUtils.containsIgnoreCase(apiObj.getName(), filterName);
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
