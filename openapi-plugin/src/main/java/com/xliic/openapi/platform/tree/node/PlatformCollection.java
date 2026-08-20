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
    private volatile boolean fullChildrenLoaded;
    @NotNull
    private final String technicalName;
    private int page = DEFAULT_PAGE;
    private String filterName;
    private final int apiCount;

    public PlatformCollection(@NotNull String id,
            @NotNull String name,
            boolean locked,
            @NotNull String techName,
            @NotNull Permissions permissions,
            int apiCount) {
		this.id = id;
		this.name = name;
		this.locked = locked;
		this.technicalName = techName;
		this.permissions = permissions;
		childrenUnavailable = true;
		this.apiCount = apiCount;
	}
	
	public PlatformCollection(@NotNull String id,
	            @NotNull String name,
	            boolean locked,
	            @NotNull String techName,
	            @NotNull Permissions permissions) {
		this(id, name, locked, techName, permissions, -1);
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
        return technicalName;
    }

    public @NotNull Permissions getPermissions() {
        return permissions;
    }
    
    public int getApiCount() {
        return apiCount;
    }
    
    public boolean isChildrenUnavailable() {
        return childrenUnavailable;
    }

    public void setChildrenUnavailable(boolean childrenUnavailable) {
        this.childrenUnavailable = childrenUnavailable;
    }

    @Override
    public boolean isFullChildrenLoaded()
    {
        return fullChildrenLoaded;
    }

    @Override
    public void setFullChildrenLoaded(boolean fullChildrenLoaded)
    {
        this.fullChildrenLoaded = fullChildrenLoaded;
    }

    @Override
    public boolean passFilter(@NotNull DefaultMutableTreeNode childDMTN) {
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
    public void setFilter(@NotNull String name) {
        filterName = name;
    }

    @Override
    public void resetFilter() {
        filterName = "";
    }

    @Override
    public boolean isFilterActive() {
        return !StringUtils.isEmpty(filterName);
    }

    @Override
    public int getPage() {
        return page;
    }

    @Override
    public void increasePage() {
        this.page += 1;
    }

    @Override
    public void resetPage() {
        this.page = DEFAULT_PAGE;
    }
}
