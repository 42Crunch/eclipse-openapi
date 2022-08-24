package com.xliic.openapi.platform.tree.mouse;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.actions.*;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;
import com.xliic.openapi.platform.tree.ui.PlatformPanel;

import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class PlatformRightMouseClickHandler {

    private final Project project;
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

            actions.add(new PlatformImportAPIAction(project, tree, collectionId));
            actions.add(new PlatformImportAPIFromURLAction(project, tree, collectionId));

            actions.add(new PlatformOpenCollectionInWebUIAction(collectionId));
            actions.add(new PlatformRenameCollectionAction(project, tree, collectionId, collectionName));
        }
        else if (clickedObj instanceof PlatformAPI) {
            String apiId = ((PlatformAPI) clickedObj).getId();
            String apiName = ((PlatformAPI) clickedObj).getName();
            actions.add(new PlatformDeleteAPIAction(project, tree, apiId));
            actions.add(new PlatformOpenAPIInWebUIAction(apiId));
            actions.add(new PlatformRenameAPIAction(project, tree, apiId, apiName));
        } else if (clickedObj instanceof PlatformFilterDecorator) {
            actions.add(new PlatformFilterRemoveAction(tree, clickedDMTN));
        }
    }
}
