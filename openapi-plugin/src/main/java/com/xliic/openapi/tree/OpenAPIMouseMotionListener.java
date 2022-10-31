package com.xliic.openapi.tree;

import java.util.HashSet;
import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreePath;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.MouseMotionListener;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.tree.node.BaseNode;

public class OpenAPIMouseMotionListener extends MouseMotionListener {

    private final Project project;
    private final Set<TreePath> paths = new HashSet<>();

    public OpenAPIMouseMotionListener(Project project, Tree tree) {
        super(tree);
        this.project = project;
    }

    @Override
    public void mouseDragged(MouseEvent e) {
    }

    @Override
    public void mouseMoved(MouseEvent e) {
        clean();
        TreePath tp = ((Tree) e.getSource()).getPathForLocation(e.getX(), e.getY());
        if (tp == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if ((file == null) || TempFileUtils.isExtRefFile(file)) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        if (root != null) {
            DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getLastSegment();
            BaseNode o = (BaseNode) node.getUserObject();
            if (BaseNode.showHint(o)) {
                o.setHint(true);
                tree.getModel().valueForPathChanged(tp, o);
                paths.add(tp);
            }
        }
    }

    private void clean() {
        for (TreePath tp : paths) {
            DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getLastSegment();
            BaseNode o = (BaseNode) node.getUserObject();
            o.setHint(false);
            tree.getModel().valueForPathChanged(tp, o);
            paths.remove(tp);
        }
    }
}
