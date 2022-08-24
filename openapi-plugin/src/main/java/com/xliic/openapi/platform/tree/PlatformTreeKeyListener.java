package com.xliic.openapi.platform.tree;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.KeyAdapter;
import com.xliic.core.ui.treeStructure.KeyEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.mouse.PlatformDoubleClickListener;

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
            tree.toggle();
            PlatformDoubleClickListener.onDoubleClick(project, tree);
        }
    }
}
