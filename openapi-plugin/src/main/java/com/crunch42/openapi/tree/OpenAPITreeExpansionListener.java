package com.crunch42.openapi.tree;

import com.crunch42.openapi.parser.tree.ParserData;
import com.crunch42.openapi.services.IDataService;
import com.crunch42.openapi.utils.OpenAPIUtils;

import org.eclipse.jface.viewers.TreeExpansionEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.viewers.ITreeViewerListener;
import javax.validation.constraints.NotNull;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class OpenAPITreeExpansionListener implements ITreeViewerListener {

	private final TreeViewer viewer;
	private final Map<String, Set<String>> expandedPointers = new HashMap<>();

    public OpenAPITreeExpansionListener(@NotNull IWorkbench workbench, @NotNull TreeViewer viewer) {
        this.viewer = viewer;
    }

    @Override
    public void treeExpanded(TreeExpansionEvent event) {

        IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
        Object obj = event.getElement();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        String pointer = ((OpenApiTreeNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
        expandedPointers.get(file.getFullPath().toPortableString()).add(pointer);
    }

    @Override
    public void treeCollapsed(TreeExpansionEvent event) {

    	IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
        Object obj = event.getElement();
        if (((DefaultMutableTreeNode) obj).getParent() == null) {
            return;
        }
        String pointer = ((OpenApiTreeNode) (((DefaultMutableTreeNode) obj).getUserObject())).getPointer();
        expandedPointers.get(file.getFullPath().toPortableString()).remove(pointer);
    }

    public void expand(IFile file) {
        if (expandedPointers.containsKey(file.getFullPath().toPortableString())) {
            restoreExpansionState();
        }
        else {
            expandedPointers.put(file.getFullPath().toPortableString(), new HashSet<>());
            setDefaultExpansionState();
        }
    }

    public void clean() {
        expandedPointers.clear();
    }

    public void clean(IFile file) {
        expandedPointers.remove(file.getFullPath().toPortableString());
    }

    public void replace(String newKey, String oldKey) {
        if (expandedPointers.containsKey(oldKey)) {
            expandedPointers.put(newKey, expandedPointers.remove(oldKey));
        }
    }

    private void setDefaultExpansionState() {
        // Default expansion state is all panel's content expanded, all their children collapsed
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
        int count = root.getChildCount();
        for (int i = 0 ; i < count ; i++) {
        	viewer.expandToLevel(root.getChildAt(i), 1);
        	treeExpanded(new TreeExpansionEvent(viewer, root.getChildAt(i)));
        }
        viewer.refresh();
    }

    private void restoreExpansionState() {
    	IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
        IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
        ParserData data = dataService.getParserData(file.getFullPath().toPortableString());
        Map<String, DefaultMutableTreeNode> pointerToNodesMap = data.getPointerToNodesMap();
        for (String pointerToExpand : expandedPointers.get(file.getFullPath().toPortableString())) {
            DefaultMutableTreeNode node = pointerToNodesMap.get(pointerToExpand);
            if (node != null) {
                viewer.expandToLevel(node, 1);
                treeExpanded(new TreeExpansionEvent(viewer, node));
            }
        }
    }
}
