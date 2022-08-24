package com.xliic.core.ide;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.treeStructure.Tree;

public class DefaultTreeExpander implements TreeExpander {

    @NotNull
    private final Tree tree;

    public DefaultTreeExpander(@NotNull Tree tree) {
        this.tree = tree;
    }
}
