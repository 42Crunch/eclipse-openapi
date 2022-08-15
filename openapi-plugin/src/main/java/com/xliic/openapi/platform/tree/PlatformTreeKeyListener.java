package com.xliic.openapi.platform.tree;

import com.xliic.core.project.Project;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.KeyAdapter;
import com.xliic.core.ui.treeStructure.KeyEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.mouse.PlatformDoubleClickListener;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.PlatformRootFavorite;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

public class PlatformTreeKeyListener extends KeyAdapter  {

    private final Tree tree;
	private final Project project;

    public PlatformTreeKeyListener(@NotNull Project project, @NotNull Tree tree) {
        this.project = project;
        this.tree = tree;
    }

    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_ENTER) {
            // Eclipse Development Note 
            // In Eclipse we have to expand or collapse the node from code
        	DefaultMutableTreeNode node = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        	if (node != null) {
        		if (shouldExpandOrCollapseByEnter(node)) {
        			boolean flag = true;
        			for (Object obj : tree.getViewer().getExpandedElements()) {
        				if (obj == node) {
        					flag = false;
        					break;
        				}
        			}
        			if (flag) {
        				tree.expandPath(TreePathUtil.pathToTreeNode(node));	
        			} else {
        				tree.collapseToLevel(TreePathUtil.pathToTreeNode(node));
        			}
        		} else {
        			PlatformDoubleClickListener.onDoubleClick(project, tree);
        		}
        		
        	}       		
        }
    }
    
    private boolean shouldExpandOrCollapseByEnter(DefaultMutableTreeNode node) {    	
        Object obj = node.getUserObject();
        return obj instanceof PlatformRootCloud || obj instanceof PlatformRootFavorite || 
        		obj instanceof PlatformCollection || obj instanceof PlatformAPI;
    }
}
