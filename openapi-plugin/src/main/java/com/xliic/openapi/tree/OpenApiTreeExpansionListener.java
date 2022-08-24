package com.xliic.openapi.tree;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.ui.treeStructure.TreeExpansionEvent;
import com.xliic.core.ui.treeStructure.TreeExpansionListener;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.RootNode;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;

public class OpenApiTreeExpansionListener extends TreeExpansionListener {

    private final Tree tree;
    private final Project project;
    private final Map<String, Set<String>> expandedPointers = new HashMap<>();

    public OpenApiTreeExpansionListener(@NotNull Project project, @NotNull Tree tree) {
        this.tree = tree;
        this.project = project;
    }

    @Override
    public void treeExpanded(TreeExpansionEvent event) {

        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        Object obj = event.getLastPathComponent();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        String pointer = ((BaseNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
        expandedPointers.get(file.getPath()).add(pointer);
    }

    @Override
    public void treeCollapsed(TreeExpansionEvent event) {

        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        Object obj = event.getLastPathComponent();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        String pointer = ((BaseNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
        expandedPointers.get(file.getPath()).remove(pointer);
    }

    public void expand(VirtualFile file) {

        if (expandedPointers.containsKey(file.getPath())) {
            restoreExpansionState();
        } else {
            expandedPointers.put(file.getPath(), new HashSet<>());
            setDefaultExpansionState(file);
        }
    }

    public void clean() {
        expandedPointers.clear();
    }

    public void clean(VirtualFile file) {
        expandedPointers.remove(file.getPath());
    }

    public void replace(String newKey, String oldKey) {
        if (expandedPointers.containsKey(oldKey)) {
            expandedPointers.put(newKey, expandedPointers.remove(oldKey));
        }
    }

    private void setDefaultExpansionState(VirtualFile file) {
        // Default expansion state is all panel's content expanded, all their children collapsed
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) tree.getModel().getRoot();
        int count = root.getChildCount();
        Set<String> pointers = expandedPointers.get(file.getPath());

        for (int i = 0; i < count; i++) {
            DefaultMutableTreeNode child = (DefaultMutableTreeNode) root.getChildAt(i);
            tree.expandPathOnly(TreePathUtil.pathToTreeNode(child));
            String pointer = ((BaseNode) (child.getUserObject())).getPointer();
            pointers.add(pointer);
        }
    }

    private void restoreExpansionState() {
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) tree.getModel().getRoot();
        if (root != null) {
            Set<String> pointers = expandedPointers.get(file.getPath());
            Map<String, DefaultMutableTreeNode> children = ((RootNode) root.getUserObject()).getChildren();
            for (String pointerToExpand : pointers) {
                DefaultMutableTreeNode node = children.get(pointerToExpand);
                if (node != null) {
                    tree.expandPathOnly(TreePathUtil.pathToTreeNode(node));
                }
            }
        }
    }
}
