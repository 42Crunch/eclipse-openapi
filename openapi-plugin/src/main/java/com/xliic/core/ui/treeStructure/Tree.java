package com.xliic.core.ui.treeStructure;

import java.awt.Color;

import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.viewers.DecoratingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DecorationContext;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.util.EclipseUtil;

public class Tree {
	
	private final TreeViewer viewer;
	private ITreeContentProvider contentProvider;
	
	public Tree(@NotNull TreeViewer viewer) {
		this.viewer = viewer;
	}
	
	public TreeViewer getViewer() {
		return viewer;
	}

    public Object getLastSelectedPathComponent() {
        return viewer.getStructuredSelection().getFirstElement();
    }
	
	public void setModel(TreeModel newModel) {
		contentProvider = (ITreeContentProvider) newModel;
		viewer.setContentProvider(contentProvider);
		viewer.setInput(getModel().getRoot());
	}
	
    public TreeModel getModel() {
        return (TreeModel) contentProvider;
    }
    
    public void setOpaque(boolean isOpaque) {}
    
    public void setBackground(Color bg) {}
    
    public void setRootVisible(boolean rootVisible) {}
    
    public void setCellRenderer(ColoredTreeCellRenderer renderer) {
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
    
    public void setSelectionPath(TreePath path) {
       viewer.setSelection(new StructuredSelection(path.getLastSegment()));
    }
    
    public void expandPath(TreePath path) {
    	viewer.expandToLevel(path, 1);
    }
    
    public void addMouseListener(MouseAdapter adapter) {
    	((org.eclipse.swt.widgets.Tree) viewer.getControl()).addMouseListener(adapter);
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		adapter.setTreeViewer(viewer);
		menuMgr.addMenuListener(adapter);
		viewer.getTree().setMenu(menuMgr.createContextMenu(viewer.getTree()));
    }
    
    public void addDoubleClickListener(DoubleClickListener listener) {
    	viewer.addDoubleClickListener(listener);
    }
    
    public boolean isDisposed() {
    	return viewer == null || viewer.getControl().isDisposed();
    }
}
