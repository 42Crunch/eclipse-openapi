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
import org.eclipse.ui.PlatformUI;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.utils.OpenAPIUtils;

public class OpenAPIMouseMotionListener implements MouseMoveListener {

	private final TreeViewer viewer;
	private final Set<TreeItem> paths = new HashSet<>();
	private final List<OpenApiTreeNode> nodes = new LinkedList<>();

	public OpenAPIMouseMotionListener(TreeViewer viewer) {
		this.viewer = viewer;
	}

	@Override
	public void mouseMove(MouseEvent e) {
		clean();
		TreeItem tp = viewer.getTree().getItem(new Point(e.x, e.y));
		if (tp == null) {
			return;
		}
		VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
		if (file == null) {
			return;
		}
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (dataService.hasParserData(file.getPath()) && dataService.getParserData(file.getPath()).isValid()) {
			DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getData();
			OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
			if (o.isPanel() || OpenApiPanelKeys.PATHS.equals(o.getParentKey())) {
				o.setApplyHint(true);
				viewer.update(node, null);
				paths.add(tp);
				nodes.add(o);
			}
		}
	}

	public void cleanPaths() {
		paths.clear();
		for (OpenApiTreeNode o : nodes) {
			o.setApplyHint(false);
		}
		nodes.clear();
	}

	private void clean() {
		for (TreeItem tp : paths) {
			DefaultMutableTreeNode node = (DefaultMutableTreeNode) tp.getData();
			OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
			o.setApplyHint(false);
			viewer.update(node, null);
			paths.add(tp);
			nodes.remove(o);
		}
	}
}
