package com.xliic.openapi.platform.tree;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformAPICallback;
import com.xliic.openapi.platform.callback.PlatformCollectionCallback;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadingDecorator;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.PlatformService;
import okhttp3.Callback;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.Map;

public class PlatformAsyncTreeModel extends DefaultTreeModel {

    private final static DefaultMutableTreeNode LOADING_DECORATOR =
            new DefaultMutableTreeNode(new PlatformLoadingDecorator(), false);

    private final Project project;
    private final Tree tree;
    private final DefaultMutableTreeNode root;

    private final DefaultMutableTreeNode cloudCollections;
    private final DefaultMutableTreeNode favoriteCollections;

    public PlatformAsyncTreeModel(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode root) {
        super(tree.getViewer(), root, false);
        this.project = project;
        this.tree = tree;
        this.root = root;
        favoriteCollections = new DefaultMutableTreeNode(new PlatformRootFavorite());
        root.add(favoriteCollections);
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

    @Override
    public int getChildCount(Object parent) {
        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) parent;
        Object parentObj = parentDMTN.getUserObject();
        if (parentObj instanceof PlatformRootCloud) {
            PlatformRootCloud rco = (PlatformRootCloud) parentObj;
            PlatformService platformService = PlatformService.getInstance(project);
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            if (rco.isChildrenUnavailable() && !callbacks.containsKey(parentDMTN)) {
                Callback callback = new PlatformCollectionCallback(project, tree, parentDMTN);
                PlatformAPIs.listCollections(callback);
                callbacks.put(parentDMTN, callback);
                parentDMTN.removeAllChildren();
                parentDMTN.add(LOADING_DECORATOR);
                return 1;
            }
        } else if (parentObj instanceof PlatformRootFavorite) {
            PlatformRootCloud rco = (PlatformRootCloud) (cloudCollections.getUserObject());
            if (rco.isChildrenUnavailable()) {
                parentDMTN.removeAllChildren();
                return 0;
            }
        } else if (parentObj instanceof PlatformCollection) {
            PlatformCollection pco = (PlatformCollection) parentObj;
            PlatformService platformService = PlatformService.getInstance(project);
            Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
            if (pco.isChildrenUnavailable() && !callbacks.containsKey(parentDMTN)) {
                Callback callback = new PlatformAPICallback(project, tree, parentDMTN);
                PlatformAPIs.listApis(pco.getId(), callback);
                callbacks.put(parentDMTN, callback);
                parentDMTN.removeAllChildren();
                parentDMTN.add(LOADING_DECORATOR);
                return 1;
            }
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
            if (pro.isChildrenUnavailable()) {
                return false;
            }
        }
        return PlatformUtils.getVisibleChildren(node).isEmpty();
    }
}
