package com.xliic.core.ui.treeStructure;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.viewers.DecoratingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DecorationContext;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.widgets.TreeItem;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.Color;
import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.ui.StatusText;

public class Tree {
	
	private final TreeViewer viewer;
	private ITreeContentProvider contentProvider;
	private final StatusText statusText;
	private TreeExpansionListener expansionListener;
	private PaintListener paintListener;
	
	public Tree(@NotNull TreeViewer viewer) {
		this.viewer = viewer;
		this.statusText = new StatusText();
		this.contentProvider = null;
		this.expansionListener = null;
		this.paintListener = null;
	}
	
	public TreeViewer getViewer() {
		return viewer;
	}
	
	@Nullable
	public TreePath getPathForLocation(int x, int y) {	
		TreeItem tp = viewer.getTree().getItem(new Point(x, y));
		if (tp != null) {
			Object obj = tp.getData();
			if (obj instanceof DefaultMutableTreeNode) {
				return new TreePath(((DefaultMutableTreeNode) obj).getPath());	
			}
		}
		return null;
	}
	
    public Object getLastSelectedPathComponent() {
        return viewer.getStructuredSelection().getFirstElement();
    }
	
	public void setModel(@NotNull ITreeContentProvider newModel) {
		contentProvider = (ITreeContentProvider) newModel;
		viewer.setContentProvider(contentProvider);
		viewer.setInput(getModel().getRoot());
	}
	
    public DefaultTreeModel getModel() {
        return (DefaultTreeModel) contentProvider;
    }
    
    public void setOpaque(boolean isOpaque) {}
    
    public void setBackground(@NotNull Color color) {
    	if (!isDisposed()) {
    		if (paintListener != null) {
    			viewer.getTree().removePaintListener(paintListener);
    			paintListener = null;
    		}
        	if (color == null) {
        		viewer.getTree().setBackground(Color.DEFAULT_BACKGROUNG.getSwtGraphicsColor());
        	} else {
        		paintListener = new TreePaintListener(viewer, color);
        		viewer.getTree().addPaintListener(paintListener);
        		viewer.getTree().setBackground(color.getSwtGraphicsColor());
        	}
    	}
    }
    
    public void setRootVisible(boolean rootVisible) {}
    
    public void setToolTipText(String text) {
    	if (!isDisposed()) {
    		viewer.getTree().setToolTipText(text);
    	}
    }
    
    @NotNull
    public StatusText getEmptyText() {
    	return statusText;
    }
    
    public void setCellRenderer(@NotNull ColoredTreeCellRenderer renderer) {
    	viewer.setLabelProvider(new DecoratingStyledCellLabelProvider(
    			renderer, EclipseUtil.getLabelDecorator(), DecorationContext.DEFAULT_CONTEXT));
    }
    
    public void removeAll() {
    	if (!isDisposed()) {
    		viewer.remove(getModel().getRoot());
    	}
    }
    
    public void scrollPathToVisible(@Nullable TreePath path) {
    	// Eclipse Development Note 
    	// N/A, use selection as it triggers scrolling under the hood 
    	setSelectionPath(path);
    }
    
    public void setSelectionPath(@NotNull TreePath path) {
       viewer.setSelection(new StructuredSelection(path.getLastSegment()));
    }
    
    public void expandPath(@NotNull TreePath path) {
    	viewer.expandToLevel(path, 1);
    	if (expansionListener != null) {
    		expansionListener.treeExpanded(path);	
    	}
    }
    
    public void expandPathOnly(@NotNull TreePath path) {
    	viewer.expandToLevel(path, 1);
    }
    
    public void expandAll() {
    	viewer.expandAll();
    	if (expansionListener != null) {
    		expansionListener.treeExpanded((DefaultMutableTreeNode) viewer.getInput());	
    	}
    }
    
    public void collapseToLevel(@NotNull TreePath path) {
    	viewer.collapseToLevel(path, 1);
    	if (expansionListener != null) {
    		expansionListener.treeCollapsed(path);
    	}
    }

    public void collapseAll() {
    	viewer.collapseAll();
    	if (expansionListener != null) {
    		expansionListener.treeCollapsed((DefaultMutableTreeNode) viewer.getInput());
    	}
    }
    
    public void toggle() {
    	DefaultMutableTreeNode node = (DefaultMutableTreeNode) getLastSelectedPathComponent();
    	if (node != null) {
    		DefaultTreeModel model = getModel();
    		if (model.hasChildren(node)) {
    			boolean flag = true;
    			for (Object obj : getViewer().getExpandedElements()) {
    				if (obj == node) {
    					flag = false;
    					break;
    				}
    			}
    			if (flag) {
    				expandPath(TreePathUtil.pathToTreeNode(node));	
    			} else {
    				collapseToLevel(TreePathUtil.pathToTreeNode(node));
    			}
    		}
    	}
    }

    public void addMouseListener(@NotNull MouseAdapter adapter) {
    	((org.eclipse.swt.widgets.Tree) viewer.getControl()).addMouseListener(adapter);
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		adapter.setTreeViewer(viewer);
		menuMgr.addMenuListener(adapter);
		viewer.getTree().setMenu(menuMgr.createContextMenu(viewer.getTree()));
    }
    
    public void addKeyListener(@NotNull KeyAdapter adapter) {
    	((org.eclipse.swt.widgets.Tree) viewer.getControl()).addKeyListener(adapter);
    }
    
    public void addDoubleClickListener(@NotNull DoubleClickListener listener) {
    	viewer.addDoubleClickListener(listener);
    }
    
    public void addTreeExpansionListener(@NotNull TreeExpansionListener listener) {
        // Eclipse Development Note 
        // Only clicks on UI tree node anchors fire evens for the listener
    	// Other expends and collapses must be reported through the listener explicitly 
    	expansionListener = listener;
    	viewer.addTreeListener(expansionListener);
    }
    
    public void addMouseMotionListener(@NotNull MouseMotionListener listener) {
    	viewer.getTree().addMouseMoveListener(listener);
    }
    
    public boolean isDisposed() {
    	return viewer == null || viewer.getControl().isDisposed();
    }
}
