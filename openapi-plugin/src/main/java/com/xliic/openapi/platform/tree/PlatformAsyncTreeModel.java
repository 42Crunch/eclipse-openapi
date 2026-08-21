package com.xliic.openapi.platform.tree;

import java.util.Map;
import java.util.*;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.EnqueueCallback;
import com.xliic.openapi.platform.callback.PlatformAPICallback;
import com.xliic.openapi.platform.callback.PlatformCollectionCallback;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformDataDictionary;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;
import com.xliic.openapi.platform.tree.node.core.Paginator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadingDecorator;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.PlatformService;

import okhttp3.Callback;

public class PlatformAsyncTreeModel extends DefaultTreeModel {

    private final static DefaultMutableTreeNode LOADING_DECORATOR = new DefaultMutableTreeNode(new PlatformLoadingDecorator(), false);

    private final Project project;
    private final Tree tree;
    private final DefaultMutableTreeNode root;

    private final DefaultMutableTreeNode cloudCollections;
    private final DefaultMutableTreeNode favoriteCollections;
    private final DefaultMutableTreeNode dataDictionary;

    private final PlatformRootCloud cachedRoot = new PlatformRootCloud();
    private final List<DefaultMutableTreeNode> cachedNodes = new LinkedList<>();
    
    public PlatformAsyncTreeModel(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode root) {
        super(tree.getViewer(), root, false);
        this.project = project;
        this.tree = tree;
        this.root = root;
        favoriteCollections = new DefaultMutableTreeNode(new PlatformRootFavorite());
        root.add(favoriteCollections);
        dataDictionary = new DefaultMutableTreeNode(new PlatformDataDictionary());
        root.add(dataDictionary);
        cloudCollections = new DefaultMutableTreeNode(new PlatformRootCloud());
        root.add(cloudCollections);
    }

    public DefaultMutableTreeNode getCloudCollections() {
        return cloudCollections;
    }

    public DefaultMutableTreeNode getFavoriteCollections() {
        return favoriteCollections;
    }

    @Override
    public Object getRoot() {
        return root;
    }

    @Override
    public Object getChild(Object parent, int index) {
        return PlatformUtils.getVisibleChildren(parent).get(index);
    }

    public void cacheCollections() {
        cachedRoot.setFrom((PlatformRootCloud) cloudCollections.getUserObject());
        cachedNodes.clear();
        for (int i = 0; i < cloudCollections.getChildCount(); i++) {
            cachedNodes.add((DefaultMutableTreeNode) cloudCollections.getChildAt(i));
        }
    }

    public void restoreCollections() {
        ((PlatformRootCloud) cloudCollections.getUserObject()).setFrom(cachedRoot);
        cloudCollections.removeAllChildren();
        for (DefaultMutableTreeNode node : cachedNodes) {
            cloudCollections.add(node);
        }
        cachedNodes.clear();
    }

    public void clearCachedCollections() {
        cachedRoot.resetPage();
        cachedRoot.resetFilter();
        cachedRoot.setChildrenUnavailable(true);
        cachedNodes.clear();
    }

    @Override
    public int getChildCount(Object parent) {
        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) parent;
        Object parentObj = parentDMTN.getUserObject();
        if (parentObj instanceof PlatformRootCloud) {
            PlatformRootCloud rco = (PlatformRootCloud) parentObj;
            PlatformService platformService = PlatformService.getInstance(project);
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            if (rco.isChildrenUnavailable() && !callbacks.containsKey(parentDMTN)) {
                EnqueueCallback callback = new PlatformCollectionCallback(project, tree, parentDMTN);
                callbacks.put(parentDMTN, callback);
                PlatformAPIs.listCollections(callback, rco.getPage(), Paginator.PAGE_SIZE, rco.getFilter());
                parentDMTN.add(LOADING_DECORATOR);
                // If filter is active there is one more filter node which is not in the parent, but returned by this model
                return parentDMTN.getChildCount() + (rco.isFilterActive() ? 1 : 0);
            }
        } else if (parentObj instanceof PlatformRootFavorite) {
            PlatformRootFavorite rfo = (PlatformRootFavorite) parentObj;
            PlatformService platformService = PlatformService.getInstance(project);
            Set<String> collectionIds = new HashSet<>(platformService.getState().collectionIds);
            if (collectionIds.isEmpty()) {
                rfo.setChildrenUnavailable(false);
                return 0;
            }
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            if (rfo.isChildrenUnavailable() && !callbacks.containsKey(parentDMTN)) {
                PlatformFavoriteCollectionsHandler handler = new PlatformFavoriteCollectionsHandler(project, tree, parentDMTN, collectionIds);
                callbacks.put(parentDMTN, handler);
                PlatformAPIs.readCollections(handler, collectionIds);
                parentDMTN.add(LOADING_DECORATOR);
                return parentDMTN.getChildCount();
            }
        } else if (parentObj instanceof PlatformCollection) {
            PlatformCollection pco = (PlatformCollection) parentObj;
            if (pco.getApiCount() == 0) {
                return 0;
            }
            PlatformService platformService = PlatformService.getInstance(project);
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            if (pco.isChildrenUnavailable() && !callbacks.containsKey(parentDMTN)) {
                EnqueueCallback callback = new PlatformAPICallback(project, tree, parentDMTN);
                callbacks.put(parentDMTN, callback);
                PlatformAPIs.listApis(pco.getId(), callback);
                parentDMTN.removeAllChildren();
                parentDMTN.add(LOADING_DECORATOR);
                return 1;
            }
        } else if (parentObj instanceof PlatformDataDictionary) {
            return 0;
        }
        return PlatformUtils.getVisibleChildren(parent).size();
    }

    @Override
    public boolean isLeaf(Object node) {
        DefaultMutableTreeNode nodeDMTN = (DefaultMutableTreeNode) node;
        Object nodeObj = nodeDMTN.getUserObject();
        if (nodeObj instanceof PlatformRootCloud) {
            PlatformRootCloud rco = (PlatformRootCloud) nodeObj;
            if (rco.isChildrenUnavailable()) {
                return false;
            }
        } else if (nodeObj instanceof PlatformRootFavorite) {
            PlatformRootCloud rco = (PlatformRootCloud) (cloudCollections.getUserObject());
            if (rco.isChildrenUnavailable()) {
                return false;
            }
        } else if (nodeObj instanceof PlatformCollection) {
            PlatformCollection pro = (PlatformCollection) nodeObj;
            if (pro.getApiCount() == 0) {
                return true;
            } else if (pro.isChildrenUnavailable()) {
                return false;
            }
        } else if (nodeObj instanceof PlatformDataDictionary) {
            return true;
        }
        return PlatformUtils.getVisibleChildren(node).isEmpty();
    }
}
