package com.xliic.openapi.tree;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.KeyAdapter;
import com.xliic.core.ui.treeStructure.KeyEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tree.node.BaseNode;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

public class OpenAPITreeKeyListener extends KeyAdapter {

    private final Tree tree;
    private final Project project;

    public OpenAPITreeKeyListener(@NotNull Project project, @NotNull Tree tree) {
        this.project = project;
        this.tree = tree;
    }

    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_ENTER) {
            // Eclipse Development Note
            // In Eclipse we have to expand or collapse the node from code
            tree.toggle();
            DefaultMutableTreeNode dmtn = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
            if (dmtn != null) {
                Object obj = dmtn.getUserObject();
                if (obj instanceof BaseNode) {
                    Node node = ((BaseNode) obj).getNode();
                    if (node != null) {
                        OpenApiLeftMouseClickHandler.moveToSelectedNodeInEditor(project, tree);
                    }
                }
            }
        }
    }
}
