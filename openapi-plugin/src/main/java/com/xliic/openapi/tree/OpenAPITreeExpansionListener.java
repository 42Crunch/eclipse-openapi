package com.xliic.openapi.tree;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ITreeViewerListener;
import org.eclipse.jface.viewers.TreeExpansionEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.ui.IWorkbench;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.RootNode;

public class OpenAPITreeExpansionListener implements ITreeViewerListener {

	private final TreeViewer viewer;
	private final Project project;
	private final Map<String, Set<String>> expandedPointers = new HashMap<>();

	public OpenAPITreeExpansionListener(@NotNull IWorkbench workbench, @NotNull TreeViewer viewer, @NotNull Project project) {
		this.viewer = viewer;
		this.project = project;
	}

	@Override
	public void treeExpanded(TreeExpansionEvent event) {

		VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		if (file == null) {
			return;
		}
		Object obj = event.getElement();
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
		Object obj = event.getElement();
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
		// Default expansion state is all panel's content expanded, all their children
		// collapsed
		DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
		int count = root.getChildCount();
		Set<String> pointers = expandedPointers.get(file.getPath());
		for (int i = 0; i < count; i++) {
			DefaultMutableTreeNode child = (DefaultMutableTreeNode) root.getChildAt(i);
			viewer.expandToLevel(child, 1);
			treeExpanded(new TreeExpansionEvent(viewer, child));
            String pointer = ((BaseNode) (child.getUserObject())).getPointer();
            pointers.add(pointer);

		}
		viewer.refresh();
	}

	private void restoreExpansionState() {
		VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		if (file == null) {
			return;
		}
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
        if (root != null) {
            Set<String> pointers = expandedPointers.get(file.getPath());
            Map<String, DefaultMutableTreeNode> children = ((RootNode) root.getUserObject()).getChildren();
            for (String pointerToExpand : expandedPointers.get(file.getPath())) {
                DefaultMutableTreeNode node = children.get(pointerToExpand);
                if (node != null) {
    				viewer.expandToLevel(node, 1);
    				treeExpanded(new TreeExpansionEvent(viewer, node));
                    String pointer = ((BaseNode) (node.getUserObject())).getPointer();
                    pointers.add(pointer);
                }
            }
        }
	}
}
