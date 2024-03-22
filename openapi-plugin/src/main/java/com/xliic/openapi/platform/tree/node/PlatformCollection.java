package com.xliic.openapi.platform.tree.node;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.Permissions;
import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;

public class PlatformCollection implements Paginator, Filter {

    @NotNull
    private final String id;
    private final boolean locked;
    @NotNull
    private String name;
    @NotNull
    private final Permissions permissions;
    private volatile boolean childrenUnavailable;
    @NotNull
    private final String techName;
    private int pageSize = Paginator.PAGE_SIZE;
    private String filterName;

    public PlatformCollection(@NotNull String id, @NotNull String name, boolean locked, @NotNull String techName, @NotNull Permissions permissions) {
        this.id = id;
        this.name = name;
        this.locked = locked;
        this.techName = techName;
        childrenUnavailable = true;
        this.permissions = permissions;
    }

    public @NotNull String getName() {
        return name;
    }

    public void setName(@NotNull String name) {
        this.name = name;
    }

    public boolean isLocked() {
        return locked;
    }

    public @NotNull String getId() {
        return id;
    }

    public @NotNull String getTechnicalName() {
        return techName;
    }

    public @NotNull Permissions getPermissions() {
        return permissions;
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
