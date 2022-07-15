package com.xliic.openapi.platform.tree.node.core;

public interface Paginator {

    int PAGE_SIZE = 100;

    int getPageSize();

    void increasePageSize();

    void resetPageSize();
}
