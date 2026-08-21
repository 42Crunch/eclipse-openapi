package com.xliic.openapi.platform.tree.node.core;

public interface Paginator {

    int PAGE_SIZE = 100;
    int DEFAULT_PAGE = 1;
    
    int getPage();

    void increasePage();

    void resetPage();
    
    boolean isChildrenUnavailable();

    void setChildrenUnavailable(boolean childrenUnavailable);

    boolean isFullChildrenLoaded();

    void setFullChildrenLoaded(boolean fullChildrenLoaded);
}
