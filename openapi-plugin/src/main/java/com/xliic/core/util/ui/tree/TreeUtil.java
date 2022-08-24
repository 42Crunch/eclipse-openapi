package com.xliic.core.util.ui.tree;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.treeStructure.Tree;

public final class TreeUtil {

    public static void expandAll(@NotNull Tree tree) {
        tree.getViewer().expandAll();
    }

    public static void restoreExpandedPaths(@NotNull Tree tree, @NotNull List<TreePath> paths) {
        tree.getViewer().setExpandedTreePaths(paths.toArray(new TreePath[0]));
    }

    public static @NotNull List<TreePath> collectExpandedPaths(@NotNull Tree tree) {
        return new LinkedList<>(Arrays.asList(tree.getViewer().getExpandedTreePaths()));
    }
}
