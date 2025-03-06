package com.xliic.openapi.platform.tree.mouse;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.actions.PlatformAddToFavoriteAction;
import com.xliic.openapi.platform.tree.actions.PlatformCopyUUIDAction;
import com.xliic.openapi.platform.tree.actions.PlatformCreateNewCollectionAction;
import com.xliic.openapi.platform.tree.actions.PlatformDeleteAPIAction;
import com.xliic.openapi.platform.tree.actions.PlatformDeleteCollectionAction;
import com.xliic.openapi.platform.tree.actions.PlatformFilterAPIAction;
import com.xliic.openapi.platform.tree.actions.PlatformFilterCollectionAction;
import com.xliic.openapi.platform.tree.actions.PlatformFilterRemoveAction;
import com.xliic.openapi.platform.tree.actions.PlatformImportAPIAction;
import com.xliic.openapi.platform.tree.actions.PlatformImportAPIFromURLAction;
import com.xliic.openapi.platform.tree.actions.PlatformOpenAPIInWebUIAction;
import com.xliic.openapi.platform.tree.actions.PlatformOpenCollectionInWebUIAction;
import com.xliic.openapi.platform.tree.actions.PlatformRemoveFromFavoriteAction;
import com.xliic.openapi.platform.tree.actions.PlatformRenameAPIAction;
import com.xliic.openapi.platform.tree.actions.PlatformRenameCollectionAction;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;
import com.xliic.openapi.platform.tree.ui.PlatformPanel;

public class PlatformRightMouseClickHandler {

	@NotNull
    private final Project project;
	@NotNull
    private final Tree tree;

    public PlatformRightMouseClickHandler(@NotNull PlatformPanel panel) {
        project = panel.getProject();
        tree = panel.getTree();
    }

    public void handle(MouseEvent event) {
        DefaultMutableTreeNode clickedDMTN = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if (clickedDMTN == null) {
            return;
        }
        DefaultActionGroup actions = DefaultActionGroup.createPopupGroup(event.getMenu());
        Object clickedObj = clickedDMTN.getUserObject();
        if (clickedObj instanceof PlatformRootCloud) {
            actions.add(new PlatformCreateNewCollectionAction(project, tree));
            actions.add(new PlatformFilterCollectionAction(project, tree, clickedDMTN));
        } else if (clickedObj instanceof PlatformCollection) {
            String collectionId = ((PlatformCollection) clickedObj).getId();
            String collectionName = ((PlatformCollection) clickedObj).getName();
            DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) clickedDMTN.getParent();
            Object parentObj = parentDMTN.getUserObject();
            if (parentObj instanceof PlatformRootCloud) {
                actions.add(new PlatformAddToFavoriteAction(tree, collectionId));

            } else if (parentObj instanceof PlatformRootFavorite) {
                actions.add(new PlatformRemoveFromFavoriteAction(tree, collectionId));
            }
            actions.add(new PlatformFilterAPIAction(project, tree, clickedDMTN));
            if (parentObj instanceof PlatformRootCloud) {
                boolean isEmpty = clickedDMTN.getChildCount() == 0;
                actions.add(new PlatformDeleteCollectionAction(project, tree, collectionId, isEmpty));
            }
            DefaultMutableTreeNode subRootDn = (DefaultMutableTreeNode) clickedDMTN.getParent();
            actions.add(new PlatformImportAPIAction(project, tree, collectionId, subRootDn));
            actions.add(new PlatformImportAPIFromURLAction(project, tree, collectionId, subRootDn));
            actions.add(new PlatformOpenCollectionInWebUIAction(collectionId));
            actions.add(new PlatformRenameCollectionAction(project, tree, collectionId, collectionName));
            actions.add(new PlatformCopyUUIDAction(collectionId));
        } else if (clickedObj instanceof PlatformAPI) {
            String apiId = ((PlatformAPI) clickedObj).getId();
            String apiName = ((PlatformAPI) clickedObj).getName();
            actions.add(new PlatformDeleteAPIAction(project, tree, apiId));
            actions.add(new PlatformOpenAPIInWebUIAction(apiId));
            actions.add(new PlatformRenameAPIAction(project, tree, apiId, apiName));
            actions.add(new PlatformCopyUUIDAction(apiId));
        } else if (clickedObj instanceof PlatformFilterDecorator) {
            actions.add(new PlatformFilterRemoveAction(tree, clickedDMTN));
        }
    }
}
