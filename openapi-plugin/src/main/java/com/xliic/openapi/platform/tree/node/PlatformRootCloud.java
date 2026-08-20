package com.xliic.openapi.platform.tree.node;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;

public class PlatformRootCloud implements Paginator, Filter {

    private final static String NAME = "API Collections";
    private volatile boolean childrenUnavailable;
    private volatile boolean fullChildrenLoaded;

    private int page = DEFAULT_PAGE;
    private String filterName;

    public PlatformRootCloud() {
        childrenUnavailable = true;
        resetFilter();
    }

    public void setFrom(PlatformRootCloud node) {
        childrenUnavailable = node.isChildrenUnavailable();
        fullChildrenLoaded = node.isFullChildrenLoaded();
        page = node.getPage();
        resetFilter(); // Do not copy the filter value
    }

    public String getName() {
        return NAME;
    }

    @Override
    public boolean isChildrenUnavailable() {
        return childrenUnavailable;
    }

    @Override
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
            if (obj instanceof PlatformCollection) {
                PlatformCollection collectionObj = (PlatformCollection) obj;
                return StringUtils.containsIgnoreCase(collectionObj.getName(), filterName);
            }
        }
        return true;
    }

    public String getFilter() {
        return filterName;
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
