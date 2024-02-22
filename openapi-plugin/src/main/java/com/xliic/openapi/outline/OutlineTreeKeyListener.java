package com.xliic.openapi.outline;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.KeyAdapter;
import com.xliic.core.ui.treeStructure.KeyEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.parser.ast.node.Node;

public class OutlineTreeKeyListener extends KeyAdapter {

    private final Tree tree;
    private final Project project;

    public OutlineTreeKeyListener(@NotNull Project project, @NotNull Tree tree) {
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
                        OutlineLeftClickHandler.moveToSelectedNodeInEditor(project, tree);
                    }
                }
            }
        }
    }
}
