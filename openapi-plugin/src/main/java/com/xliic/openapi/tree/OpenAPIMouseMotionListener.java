package com.xliic.openapi.tree;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.events.MouseMoveListener;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.widgets.TreeItem;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.tree.node.BaseNode;

public class OpenAPIMouseMotionListener implements MouseMoveListener {

	private final TreeViewer viewer;
	private final Project project;
	private final Set<TreeItem> paths = new HashSet<>();
	private final List<BaseNode> nodes = new LinkedList<>();

	public OpenAPIMouseMotionListener(@NotNull Project project, @NotNull TreeViewer viewer) {
		this.viewer = viewer;
		this.project = project;
	}

	@Override
	public void mouseMove(MouseEvent e) {
		clean();
		TreeItem tp = viewer.getTree().getItem(new Point(e.x, e.y));
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
			DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getData();	
            BaseNode o = (BaseNode) node.getUserObject();
            if (BaseNode.showHint(o)) {
				o.setHint(true);
				viewer.update(node, null);
				paths.add(tp);
				nodes.add(o);
            }
        }
	}

	public void cleanPaths() {
		paths.clear();
		for (BaseNode o : nodes) {
			o.setHint(false);
		}
		nodes.clear();
	}

	private void clean() {
		for (TreeItem tp : paths) {
			if (!tp.isDisposed()) {
				DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getData();
	            BaseNode o = (BaseNode) node.getUserObject();
	            o.setHint(false);
				viewer.update(node, null);
			}
		}
		paths.clear();
		nodes.clear();
	}
}
