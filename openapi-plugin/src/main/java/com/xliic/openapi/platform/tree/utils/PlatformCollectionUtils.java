package com.xliic.openapi.platform.tree.utils;

import com.xliic.core.project.Project;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.services.PlatformService;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import java.util.List;
import java.util.Objects;
import java.util.Set;

public class PlatformCollectionUtils {

    public static void addAll(@NotNull Project project,
                              @NotNull Tree tree,
                              @NotNull DefaultMutableTreeNode parentDMTN,
                              @NotNull List<PlatformCollection> collections) {

        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        parentDMTN.removeAllChildren();
        favoriteCollections.removeAllChildren();
        PlatformService platformService = PlatformService.getInstance(project);
        Set<String> collectionIds = platformService.getState().collectionIds;

        for (PlatformCollection pco : collections) {
            DefaultMutableTreeNode pcoDMTN = new DefaultMutableTreeNode(pco);
            parentDMTN.add(pcoDMTN);
            if (collectionIds.contains(pco.getId())) {
                favoriteCollections.add(getCollectionSubTreeCopy(pcoDMTN));
            }
        }
        PlatformRootCloud rco = (PlatformRootCloud) parentDMTN.getUserObject();
        rco.setChildrenUnavailable(false);
        platformService.getTreeAsyncCallbacks().remove(parentDMTN);
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        // Eclipse Development Note 
        // Expansion state is ignored if node has no children, restore it here 
        if (favoriteCollections.getChildCount() > 0) {
        	expandedPaths.add(TreePathUtil.pathToTreeNode(favoriteCollections));
        }
        model.reload();
        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
    }

    public static void addToFavoriteCollection(@NotNull Project project, @NotNull Tree tree, @NotNull String collectionId) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        int count = cloudCollections.getChildCount();
        if (count > 0) {
            PlatformService platformService = PlatformService.getInstance(project);
            Set<String> collectionIds = platformService.getState().collectionIds;
            if (collectionIds.contains(collectionId)) {
                for (int i = 0; i < count; i++) {
                    DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) cloudCollections.getChildAt(i);
                    PlatformCollection childObj = (PlatformCollection) childDMTN.getUserObject();
                    if (Objects.equals(collectionId, childObj.getId())) {
                        favoriteCollections.add(getCollectionSubTreeCopy(childDMTN));
                        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                        model.reload(favoriteCollections);
                        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                        break;
                    }
                }
            }
        }
    }

    public static void removeFromFavoriteCollection(@NotNull Tree tree, @NotNull String collectionId) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        int count = favoriteCollections.getChildCount();
        if (count > 0) {
            for (int i = 0; i < count; i++) {
                DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) favoriteCollections.getChildAt(i);
                PlatformCollection childObj = (PlatformCollection) childDMTN.getUserObject();
                if (Objects.equals(collectionId, childObj.getId())) {
                    favoriteCollections.remove(childDMTN);
                    List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                    model.reload(favoriteCollections);
                    TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                    break;
                }
            }
        }
    }

    public static void create(@NotNull Tree tree,
                              @NotNull String collectionId,
                              @NotNull String name,
                              boolean locked) {
        DefaultMutableTreeNode node = new DefaultMutableTreeNode(new PlatformCollection(collectionId, name, locked));
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        cloudCollections.add(node);
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        model.reload(cloudCollections);
        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
        PlatformUtils.goToTreeNode(tree, node);
    }

    public static void rename(@NotNull Tree tree, @NotNull String collectionId, @NotNull String name) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                PlatformCollection collectionObj = (PlatformCollection) collectionDMTN.getUserObject();
                if (Objects.equals(collectionId, collectionObj.getId())) {
                    collectionObj.setName(name);
                    model.valueForPathChanged(new TreePath(collectionDMTN.getPath()), collectionObj);
                    break;
                }
            }
        }
    }

    public static void delete(@NotNull Tree tree, @NotNull String collectionId) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                PlatformCollection collectionObj = (PlatformCollection) collectionDMTN.getUserObject();
                if (Objects.equals(collectionId, collectionObj.getId())) {
                    subRoot.remove(collectionDMTN);
                    List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                    model.reload(subRoot);
                    TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                    break;
                }
            }
        }
    }

    private static DefaultMutableTreeNode getCollectionSubTreeCopy(DefaultMutableTreeNode colDMTN) {
        DefaultMutableTreeNode resultDMTN = PlatformUtils.getCopyDMTN(colDMTN);
        for (int i = 0; i < colDMTN.getChildCount(); i++) {
            TreeNode childTN = colDMTN.getChildAt(i);
            DefaultMutableTreeNode apiCopyDMTN = PlatformUtils.getCopyDMTN(childTN);
            for (int j = 0; j < childTN.getChildCount(); j++) {
                apiCopyDMTN.add(PlatformUtils.getCopyDMTN(childTN.getChildAt(j)));
            }
            resultDMTN.add(apiCopyDMTN);
        }
        return resultDMTN;
    }
}
