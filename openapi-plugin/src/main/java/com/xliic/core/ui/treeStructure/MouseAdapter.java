package com.xliic.core.ui.treeStructure;

import org.eclipse.jdt.internal.ui.actions.CompositeActionGroup;
import org.eclipse.jface.action.IMenuListener;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.events.MouseListener;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.actions.ActionContext;
import org.jetbrains.annotations.NotNull;

@SuppressWarnings("restriction")
public abstract class MouseAdapter implements MouseListener, IMenuListener {
    
	private boolean doubleClick;
	private TreeViewer viewer;
	private final CompositeActionGroup fActionSet = new CompositeActionGroup();

	@Override
	public void mouseDoubleClick(MouseEvent e) {
		doubleClick = true;
	}
	
	@Override
	public void mouseDown(MouseEvent e) {
		doubleClick = false;
		if (e.count == 1 && e.button == com.xliic.core.ui.treeStructure.MouseEvent.BUTTON1) {
	        Display.getDefault().timerExec(Display.getDefault().getDoubleClickTime(), new Runnable() {
	            public void run() {
	                if (!doubleClick) {
	                    mouseClicked(new com.xliic.core.ui.treeStructure.MouseEvent(e.button));
	                }
	            }
	        });			
		}		 
	}
	
	@Override
	public void mouseUp(MouseEvent e) {}
	
	protected void mouseClicked(com.xliic.core.ui.treeStructure.MouseEvent event) {}
	
	protected boolean isLeftMouseButton(com.xliic.core.ui.treeStructure.MouseEvent event) {
		return !event.isDoubleClick() && event.isLeftMouseButton();
	}

	protected boolean isRightMouseButton(com.xliic.core.ui.treeStructure.MouseEvent event) {
		return !event.isDoubleClick() && event.isRightMouseButton();
	}
	
	public void setTreeViewer(@NotNull TreeViewer viewer) {
		this.viewer = viewer;
	}
	
	@Override
	public void menuAboutToShow(IMenuManager menu) {
		if (viewer != null) {
			fActionSet.setContext(new ActionContext(viewer.getSelection()));
			mouseClicked(new com.xliic.core.ui.treeStructure.MouseEvent(menu));
			fActionSet.fillContextMenu(menu);
			fActionSet.setContext(null);			
		}
	}
}
