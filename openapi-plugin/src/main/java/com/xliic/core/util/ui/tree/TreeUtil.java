package com.xliic.core.util.ui.tree;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.treeStructure.Tree;

public final class TreeUtil {

    public static void expandAll(@NotNull Tree tree) {
        tree.getViewer().expandAll();
    }

    public static void restoreExpandedElements(@NotNull Tree tree, @NotNull List<Object> elements) {
        TreeViewer viewer = tree.getViewer();
        viewer.setExpandedElements(elements.toArray());
        viewer.getControl().setRedraw(true);
    }

    public static void restoreExpandedPaths(@NotNull Tree tree, @NotNull List<TreePath> paths) {
        TreeViewer viewer = tree.getViewer();
        viewer.setExpandedTreePaths(paths.toArray(new TreePath[0]));
        viewer.getControl().setRedraw(true);
    }

    public static void restoreExpandedPaths(@NotNull Tree tree, @NotNull List<TreePath> paths, int limit) {
        TreeViewer viewer = tree.getViewer();
        if (paths.size() > limit) {
            viewer.setExpandedTreePaths(paths.subList(0, limit).toArray(new TreePath[0]));
        } else {
            viewer.setExpandedTreePaths(paths.toArray(new TreePath[0]));
        }
        viewer.getControl().setRedraw(true);
    }

    public static @NotNull List<TreePath> collectExpandedPaths(@NotNull Tree tree) {
        TreeViewer viewer = tree.getViewer();
        viewer.getControl().setRedraw(false);
        return new LinkedList<>(Arrays.asList(viewer.getExpandedTreePaths()));
    }
}
