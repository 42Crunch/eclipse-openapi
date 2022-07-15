package com.xliic.core.ui.tree;

import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;

public final class TreePathUtil {

	public static TreePath pathToTreeNode(@NotNull TreeNode node) {
	  if (node instanceof DefaultMutableTreeNode) {
		  // Swing path contains root which is not expected in jface tree path
		  return getTreePathFromSwingPath(((DefaultMutableTreeNode) node).getPath());
	  } else {
		  List<TreeNode> path = new LinkedList<>();
		  while (node != null && node.getParent() != null) {
			  path.add(node);
			  node = node.getParent();
		  }
		  List<TreeNode> pathCopy = path.subList(0, path.size());
		  Collections.reverse(pathCopy);
		  return new TreePath(pathCopy.toArray());
	  }
    }
	
	private static TreePath getTreePathFromSwingPath(Object [] segments) {
		if (segments.length <= 1) {
			return TreePath.EMPTY;
		}
		if (segments.length > 1) {
			DefaultMutableTreeNode root = (DefaultMutableTreeNode) segments[0];
			if (root.getParent() == null) {
				List<Object> segmentsList = new LinkedList<>(Arrays.asList(segments));
				segmentsList.remove(0);
				return new TreePath(segmentsList.toArray());
			}
		}
		return new TreePath(segments);
	}
}
