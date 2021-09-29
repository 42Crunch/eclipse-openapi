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
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenAPITreeExpansionListener implements ITreeViewerListener {

	private final TreeViewer viewer;
	private final Map<String, Set<String>> expandedPointers = new HashMap<>();

	public OpenAPITreeExpansionListener(@NotNull IWorkbench workbench, @NotNull TreeViewer viewer) {
		this.viewer = viewer;
	}

	@Override
	public void treeExpanded(TreeExpansionEvent event) {

		VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		if (file == null) {
			return;
		}
		Object obj = event.getElement();
		if (((DefaultMutableTreeNode) obj).getParent() == null) {
			return;
		}
		String pointer = ((OpenApiTreeNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
		expandedPointers.get(file.getPath()).add(pointer);
	}

	@Override
	public void treeCollapsed(TreeExpansionEvent event) {

		VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		if (file == null) {
			return;
		}
		Object obj = event.getElement();
		if (((DefaultMutableTreeNode) obj).getParent() == null) {
			return;
		}
		String pointer = ((OpenApiTreeNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
		expandedPointers.get(file.getPath()).remove(pointer);
	}

	public void expand(VirtualFile file) {
		if (expandedPointers.containsKey(file.getPath())) {
			restoreExpansionState();
		} else {
			expandedPointers.put(file.getPath(), new HashSet<>());
			setDefaultExpansionState();
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

	private void setDefaultExpansionState() {
		// Default expansion state is all panel's content expanded, all their children
		// collapsed
		DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
		int count = root.getChildCount();
		for (int i = 0; i < count; i++) {
			viewer.expandToLevel(root.getChildAt(i), 1);
			treeExpanded(new TreeExpansionEvent(viewer, root.getChildAt(i)));
		}
		viewer.refresh();
	}

	private void restoreExpansionState() {
		VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		if (file == null) {
			return;
		}
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		ParserData data = dataService.getParserData(file.getPath());
		Map<String, DefaultMutableTreeNode> pointerToNodesMap = data.getPointerToNodesMap();
		for (String pointerToExpand : expandedPointers.get(file.getPath())) {
			DefaultMutableTreeNode node = pointerToNodesMap.get(pointerToExpand);
			if (node != null) {
				viewer.expandToLevel(node, 1);
				treeExpanded(new TreeExpansionEvent(viewer, node));
			}
		}
	}
}
