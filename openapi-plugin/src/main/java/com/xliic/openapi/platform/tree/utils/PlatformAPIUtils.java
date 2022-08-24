package com.xliic.openapi.platform.tree.utils;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformAudit;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformOAS;
import com.xliic.openapi.services.PlatformService;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.List;
import java.util.Objects;

public class PlatformAPIUtils {

    public static void addAll(@NotNull Project project,
            @NotNull Tree tree,
            @NotNull DefaultMutableTreeNode parentDMTN,
            @NotNull List<PlatformAPI> apis) {
        parentDMTN.removeAllChildren();
        for (PlatformAPI pao : apis) {
            DefaultMutableTreeNode childDMTN = new DefaultMutableTreeNode(pao);
            childDMTN.add(new DefaultMutableTreeNode(new PlatformAudit(pao.getId(), pao.getGrade(), pao.isValid(), pao.isJson()), false));
            childDMTN.add(new DefaultMutableTreeNode(new PlatformOAS(pao.getId(), pao.isJson()), false));
            parentDMTN.add(childDMTN);
        }
        Object parentObj = parentDMTN.getUserObject();
        PlatformCollection pco = (PlatformCollection) parentObj;

        updateCollectionAPIsInSubTrees(tree, parentDMTN);

        pco.setChildrenUnavailable(false);
        PlatformService platformService = PlatformService.getInstance(project);
        platformService.getTreeAsyncCallbacks().remove(parentDMTN);
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        ((PlatformAsyncTreeModel) tree.getModel()).reload(parentDMTN);
        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
    }

    public static void create(@NotNull Project project,
            @NotNull Tree tree,
            @NotNull String collectionId,
            @NotNull String apiId,
            @NotNull String name,
            float grade,
            boolean isValid,
            boolean isJson) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                PlatformCollection collectionObj = (PlatformCollection) collectionDMTN.getUserObject();
                if (Objects.equals(collectionId, collectionObj.getId())) {
                    PlatformAPI pao = new PlatformAPI(apiId, name, grade, isValid, isJson);
                    DefaultMutableTreeNode childDMTN = new DefaultMutableTreeNode(pao);
                    childDMTN.add(new DefaultMutableTreeNode(new PlatformAudit(pao.getId(), pao.getGrade(), pao.isValid(), pao.isJson()), false));
                    childDMTN.add(new DefaultMutableTreeNode(new PlatformOAS(pao.getId(), pao.isJson()), false));
                    collectionDMTN.add(childDMTN);
                    List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                    model.reload(collectionDMTN);
                    TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                    tree.expandPath(new TreePath(collectionDMTN.getPath()));
                    PlatformUtils.goToTreeNode(tree, childDMTN);
                    if (grade == -1.0f) {
                        PlatformService platformService = PlatformService.getInstance(project);
                        platformService.waitForPlatformAudit(apiId, null);
                    }
                    break;
                }
            }
        }
    }

    public static void rename(@NotNull Tree tree, @NotNull String apiId, @NotNull String name) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                for (int j = 0; j < collectionDMTN.getChildCount(); j++) {
                    DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) collectionDMTN.getChildAt(j);
                    PlatformAPI apiObj = (PlatformAPI) apiDMTN.getUserObject();
                    if (Objects.equals(apiId, apiObj.getId())) {
                        apiObj.setName(name);
                        model.valueForPathChanged(new TreePath(apiDMTN.getPath()), apiObj);
                        break;
                    }
                }
            }
        }
    }

    public static void delete(@NotNull Tree tree, @NotNull String apiId) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                for (int j = 0; j < collectionDMTN.getChildCount(); j++) {
                    DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) collectionDMTN.getChildAt(j);
                    PlatformAPI apiObj = (PlatformAPI) apiDMTN.getUserObject();
                    if (Objects.equals(apiId, apiObj.getId())) {
                        collectionDMTN.remove(apiDMTN);
                        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                        model.reload(collectionDMTN);
                        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                        break;
                    }
                }
            }
        }
    }

    public static void updateAuditStatus(@NotNull Tree tree, @NotNull String apiId, float grade, boolean isValid) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                for (int j = 0; j < collectionDMTN.getChildCount(); j++) {
                    DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) collectionDMTN.getChildAt(j);
                    PlatformAPI apiObj = (PlatformAPI) apiDMTN.getUserObject();
                    if (Objects.equals(apiId, apiObj.getId())) {
                        apiObj.setGrade(grade);
                        apiObj.setValid(isValid);
                        DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) apiDMTN.getChildAt(0);
                        PlatformAudit pao = (PlatformAudit) childDMTN.getUserObject();
                        pao.setGrade(grade);
                        pao.setValid(isValid);
                        model.valueForPathChanged(new TreePath(childDMTN.getPath()), pao);
                        PlatformUtils.goToTreeNode(tree, apiDMTN);
                        break;
                    }
                }
            }
        }
    }

    private static void updateCollectionAPIsInSubTrees(Tree tree, DefaultMutableTreeNode collectionDMTN) {

        PlatformCollection collectionObj = (PlatformCollection) collectionDMTN.getUserObject();
        String id = collectionObj.getId();
        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) collectionDMTN.getParent();
        DefaultMutableTreeNode target = parentDMTN.getNextSibling();
        target = (target == null) ? parentDMTN.getPreviousSibling() : target;

        for (int i = 0; i < target.getChildCount(); i++) {
            DefaultMutableTreeNode colDMTN = (DefaultMutableTreeNode) target.getChildAt(i);
            PlatformCollection y = (PlatformCollection) colDMTN.getUserObject();
            if (Objects.equals(y.getId(), id)) {
                colDMTN.removeAllChildren();
                for (int j = 0; j < collectionDMTN.getChildCount(); j++) {
                    colDMTN.add(getAPISubTreeCopy((DefaultMutableTreeNode) collectionDMTN.getChildAt(j)));
                }
                break;
            }
        }
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        ((PlatformAsyncTreeModel) tree.getModel()).reload(target);
        TreeUtil.restoreExpandedPaths(tree, expandedPaths);
    }

    private static DefaultMutableTreeNode getAPISubTreeCopy(DefaultMutableTreeNode apiDMTN) {
        DefaultMutableTreeNode resultDMTN = PlatformUtils.getCopyDMTN(apiDMTN);
        for (int i = 0; i < apiDMTN.getChildCount(); i++) {
            resultDMTN.add(PlatformUtils.getCopyDMTN(apiDMTN.getChildAt(i)));
        }
        return resultDMTN;
    }
}
