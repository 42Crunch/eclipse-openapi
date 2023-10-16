package com.xliic.openapi.platform.tree.utils;

import java.util.List;
import java.util.Objects;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.openapi.GitRepoProps;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformAudit;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformOAS;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;
import com.xliic.openapi.platform.tree.node.PlatformTechOAS;
import com.xliic.openapi.services.PlatformService;

public class PlatformAPIUtils {

    public static void addAll(@NotNull Project project,
                              @NotNull Tree tree,
                              @NotNull DefaultMutableTreeNode parentDMTN,
                              @NotNull List<PlatformAPI> apis) {
        parentDMTN.removeAllChildren();
        Object parentObj = parentDMTN.getUserObject();
        PlatformCollection pco = (PlatformCollection) parentObj;
        GitRepoProps gitRepoProps = pco.getGitProps();
        for (PlatformAPI pao : apis) {
            DefaultMutableTreeNode childDMTN = new DefaultMutableTreeNode(pao);
            childDMTN.add(new DefaultMutableTreeNode(new PlatformAudit(pao.getId(), pao.getGrade(), pao.isValid(), pao.isJson()), false));
            boolean readOnly = isReadOnly(pao.getId(), pao.getTechnicalName());
            childDMTN.add(new DefaultMutableTreeNode(new PlatformOAS(pao.getId(), pao.isJson(), readOnly), false));
            if (gitRepoProps != null) {
                String techName = getTechName(pao, gitRepoProps);
                childDMTN.add(new DefaultMutableTreeNode(new PlatformTechOAS(techName, gitRepoProps.getRootPath()), false));
            }
            parentDMTN.add(childDMTN);
        }
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
                              @NotNull PlatformAPI api,
                              @NotNull DefaultMutableTreeNode selectionSubRootDn) {
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        for (DefaultMutableTreeNode subRoot : List.of(cloudCollections, favoriteCollections)) {
            for (int i = 0; i < subRoot.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) subRoot.getChildAt(i);
                PlatformCollection collectionObj = (PlatformCollection) collectionDMTN.getUserObject();
                if (Objects.equals(collectionId, collectionObj.getId())) {
                    DefaultMutableTreeNode childDMTN = new DefaultMutableTreeNode(api);
                    childDMTN.add(new DefaultMutableTreeNode(
                            new PlatformAudit(api.getId(), api.getGrade(), api.isValid(), api.isJson()), false));
                    boolean readOnly = isReadOnly(api.getId(), api.getTechnicalName());
                    childDMTN.add(new DefaultMutableTreeNode(new PlatformOAS(api.getId(), api.isJson(), readOnly), false));
                    collectionDMTN.add(childDMTN);
                    List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
                    model.reload(collectionDMTN);
                    TreeUtil.restoreExpandedPaths(tree, expandedPaths);
                    tree.expandPath(new TreePath(collectionDMTN.getPath()));
                    if (subRoot == selectionSubRootDn) {
                        PlatformUtils.goToTreeNode(tree, childDMTN);
                    }
                    if (api.getGrade() == -1.0f) {
                        PlatformService platformService = PlatformService.getInstance(project);
                        platformService.waitForPlatformAudit(api.getId(), null);
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
                    if (apiDMTN.getUserObject() instanceof PlatformAPI) {
                        PlatformAPI apiObj = (PlatformAPI) apiDMTN.getUserObject();
                        if (Objects.equals(apiId, apiObj.getId())) {
                            apiObj.setGrade(grade);
                            apiObj.setValid(isValid);
                            DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) apiDMTN.getChildAt(0);
                            PlatformAudit pao = (PlatformAudit) childDMTN.getUserObject();
                            pao.setGrade(grade);
                            pao.setValid(isValid);
                            model.valueForPathChanged(new TreePath(childDMTN.getPath()), pao);
                            break;
                        }
                    }
                }
            }
        }
    }

    public static void addOrUpdateTechOASNodeIfNeeded(@NotNull DefaultMutableTreeNode apiDMTN, @NotNull GitRepoProps gitProps) {
        int count = apiDMTN.getChildCount();
        if (count < 3) {
            String techName = getTechName((PlatformAPI) apiDMTN.getUserObject(), gitProps);
            apiDMTN.add(new DefaultMutableTreeNode(new PlatformTechOAS(techName, gitProps.getRootPath()), false));
        } else if (count == 3) {
            for (int i = 0; i < count; i++) {
                DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) apiDMTN.getChildAt(i);
                if (childDMTN.getUserObject() instanceof PlatformTechOAS) {
                    PlatformTechOAS techOAS = (PlatformTechOAS) childDMTN.getUserObject();
                    String newTechName = getTechName((PlatformAPI) apiDMTN.getUserObject(), gitProps);
                    if (!Objects.equals(newTechName, techOAS.getName())) {
                        apiDMTN.remove(childDMTN);
                        apiDMTN.add(new DefaultMutableTreeNode(new PlatformTechOAS(newTechName, gitProps.getRootPath()), false));
                    }
                    break;
                }
            }
        }
    }

    public static void removeTechOASNodeIfNeeded(@NotNull DefaultMutableTreeNode apiDMTN) {
        int count = apiDMTN.getChildCount();
        if (count > 2) {
            for (int i = 0; i < count; i++) {
                DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) apiDMTN.getChildAt(i);
                if (childDMTN.getUserObject() instanceof PlatformTechOAS) {
                    apiDMTN.remove(childDMTN);
                    break;
                }
            }
        }
    }

    private static String getTechName(@NotNull PlatformAPI api, @NotNull GitRepoProps gitProps) {
        String configName = gitProps.getConfigName(api.getId());
        return configName == null ? api.getTechnicalName() : configName;
    }

    public static boolean isReadOnly(@NotNull String id, @NotNull String technicalName) {
        return !id.equals(technicalName);
    }
    
    private static void updateCollectionAPIsInSubTrees(Tree tree, DefaultMutableTreeNode colDMTN) {
        DefaultMutableTreeNode mirrorSubRootDMTN;
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        Object subRootObj = ((DefaultMutableTreeNode) colDMTN.getParent()).getUserObject();
        if (subRootObj instanceof PlatformRootCloud) {
            mirrorSubRootDMTN = model.getFavoriteCollections();
        } else if (subRootObj instanceof PlatformRootFavorite) {
            mirrorSubRootDMTN = model.getCloudCollections();
        } else {
            return;
        }
        String id = ((PlatformCollection) colDMTN.getUserObject()).getId();
        for (int i = 0; i < mirrorSubRootDMTN.getChildCount(); i++) {
            DefaultMutableTreeNode mirrorColDMTN = (DefaultMutableTreeNode) mirrorSubRootDMTN.getChildAt(i);
            PlatformCollection mirrorColObj = (PlatformCollection) mirrorColDMTN.getUserObject();
            if (Objects.equals(mirrorColObj.getId(), id)) {
                mirrorColDMTN.removeAllChildren();
                for (int j = 0; j < colDMTN.getChildCount(); j++) {
                    mirrorColDMTN.add(getAPISubTreeCopy((DefaultMutableTreeNode) colDMTN.getChildAt(j)));
                }
                break;
            }
        }
        List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
        model.reload(mirrorSubRootDMTN);
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
