package com.xliic.openapi.platform.tree.utils;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;
import com.xliic.openapi.platform.tree.node.core.ProgressAware;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadMoreDecorator;
import com.xliic.openapi.services.PlatformService;
import okhttp3.Callback;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class PlatformUtils {

    public static void setInProgress(@Nullable Tree tree,
                                     @Nullable DefaultMutableTreeNode targetDMTN,
                                     boolean isInProgress) {
        if (tree != null && targetDMTN != null) {
            Object o = targetDMTN.getUserObject();
            if (o instanceof ProgressAware) {
                // Eclipse Development Note 
                // Avoid invalid thread access exception
            	SwingUtilities.invokeLater(() -> {
	                ProgressAware progressAware = (ProgressAware) o;
	                progressAware.setInProgress(isInProgress);
	                PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
	                model.valueForPathChanged(TreePathUtil.pathToTreeNode(targetDMTN), progressAware);
            	});
            }
        }
    }

    public static List<DefaultMutableTreeNode> getVisibleChildren(Object parent) {

        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) parent;
        if (parentDMTN.getChildCount() == 0) {
            return Collections.emptyList();
        }
        Object parentObj = parentDMTN.getUserObject();
        LinkedList<DefaultMutableTreeNode> result = new LinkedList<>();

        if (parentObj instanceof PlatformRootCloud) {
            Filter filter = (Filter) parentObj;
            boolean active = filter.isActive();
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                Object obj = collectionDMTN.getUserObject();
                if (active && obj instanceof PlatformCollection) {
                    if (filter.pass(collectionDMTN)) {
                        result.add(collectionDMTN);
                    }
                } else {
                    result.add(collectionDMTN);
                }
            }
        } else if (parentObj instanceof PlatformCollection) {
            Filter filter = (Filter) parentObj;
            boolean active = filter.isActive();
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                Object obj = apiDMTN.getUserObject();
                if (active && obj instanceof PlatformAPI) {
                    if (filter.pass(apiDMTN)) {
                        result.add(apiDMTN);
                    }
                } else {
                    result.add(apiDMTN);
                }
            }
        } else {
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                result.add((DefaultMutableTreeNode) parentDMTN.getChildAt(i));
            }
        }
        final int size = result.size();
        // Apply pagination
        if (parentObj instanceof Paginator) {
            Paginator paginator = (Paginator) parentDMTN.getUserObject();
            int pageSize = paginator.getPageSize();
            if (size > pageSize) {
                result = new LinkedList<>(result.subList(0, pageSize));
                result.add(new DefaultMutableTreeNode(new PlatformLoadMoreDecorator(parentDMTN), false));
            }
        }
        // Apply filter decorator
        if (parentObj instanceof Filter) {
            Filter filter = (Filter) parentObj;
            if (filter.isActive()) {
                result.addFirst(
                        new DefaultMutableTreeNode(
                                new PlatformFilterDecorator("Found " + size, parentDMTN), false));
            }
        }
        return result;
    }

    public static void reloadAll(@NotNull Project project, @NotNull Tree tree) {
        DefaultMutableTreeNode treeRoot = (DefaultMutableTreeNode) tree.getModel().getRoot();
        for (int i = 0; i < treeRoot.getChildCount(); i++) {
            DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) treeRoot.getChildAt(i);
            childDMTN.removeAllChildren();
            Object obj = childDMTN.getUserObject();
            if (obj instanceof PlatformRootCloud) {
                PlatformRootCloud root = (PlatformRootCloud) childDMTN.getUserObject();
                root.setChildrenUnavailable(true);
                root.resetPageSize();
                root.reset();
            }
        }
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        PlatformService platformService = PlatformService.getInstance(project);
        Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
        callbacks.clear();
        // Eclipse Development Note 
        // If node in collapsed state its children will be ignored by the model
        // Set it before reload to ask model to take care of non leaf children
        tree.expandPath(TreePathUtil.pathToTreeNode(favoriteCollections));
        tree.expandPath(TreePathUtil.pathToTreeNode(cloudCollections));
        model.reload();
    }

    public static boolean hasCollectionsLoaded(@NotNull Project project, @NotNull Tree tree) {
        PlatformService platformService = PlatformService.getInstance(project);
        Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        return !callbacks.containsKey(cloudCollections);
    }

    public static void goToTreeNode(@NotNull Tree tree, @NotNull TreeNode node) {
        TreePath path = TreePathUtil.pathToTreeNode(node);
    	// Eclipse Development Note 
    	// Use only selection as it triggers scrolling under the hood 
        // tree.scrollPathToVisible(path);
        tree.setSelectionPath(path);
    }

    public static DefaultMutableTreeNode getCopyDMTN(@NotNull TreeNode node) {
        return new DefaultMutableTreeNode(((DefaultMutableTreeNode) node).getUserObject());
    }

    public static String getApiId(@NotNull VirtualFile file) {
        String apiId = "";
        Path p = Paths.get(file.getPath());
        String fileName = p.getFileName().toString();
        if (fileName.contains(".")) {
            apiId = fileName.substring(0, fileName.lastIndexOf('.'));
        }
        return apiId;
    }
}
