package com.xliic.openapi.platform.tree.ui;

import java.util.Arrays;
import java.util.HashSet;

import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.tree.PlatformFavoriteState;
import com.xliic.openapi.services.PlatformService;

public class PlatformPanelView extends ViewPart implements Disposable {
	
	private static final String MEMENTO_DELIMETER = ",";
	private static final String FAVORITE_STATE_PATH = "com.xliic.openapi.platform.tree.PlatformFavoriteState";

	private PlatformPanel panel;
	private IToolBarManager toolBarManager;
	
	@Override
	public void init(IViewSite site, IMemento memento) throws PartInitException {
		if (memento != null) {
			String collectionIds = memento.getString(FAVORITE_STATE_PATH);
			if (collectionIds != null) {
				PlatformFavoriteState state = new PlatformFavoriteState();
				state.collectionIds = new HashSet<String>(Arrays.asList(collectionIds.split(MEMENTO_DELIMETER)));
				Project project = Project.getInstance();
		        PlatformService platformService = PlatformService.getInstance(project);
				platformService.loadState(state);
			}
		}
		super.init(site, memento);
        toolBarManager = site.getActionBars().getToolBarManager();
	}

	@Override
	public void saveState(IMemento memento) {
		if (memento != null) {
			Project project = Project.getInstance();
	        PlatformService platformService = PlatformService.getInstance(project);
	        if (!platformService.getState().collectionIds.isEmpty()) {
	        	memento.putString(FAVORITE_STATE_PATH, String.join(MEMENTO_DELIMETER, platformService.getState().collectionIds));	
	        }
		}
        super.saveState(memento);
	}

	@Override
	public void createPartControl(Composite parent) {
		if (PlatformConnection.isEmpty()) {
			setNotAvailableInfo(parent);
		} else {
			Project project = Project.getInstance();
			ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(ToolWindowId.OPEN_API_PLATFORM);
			panel = new PlatformPanel(project, toolWindow, parent);
			for (AnJAction action : toolWindow.getTitleActions()) {
				toolBarManager.add(action);
			}
		}
	}
	
	public boolean isUnavailable() {
		return panel == null;
	}
	
	private void setNotAvailableInfo(Composite parent) {
		panel = null;
	    Label label = new Label(parent, SWT.NULL);
	    label.setText("42Crunch Platform Credentials are not defined");
	}

	@Override
	public void setFocus() {}
	
	@Override
	public void dispose() {
		if (panel != null) {
			Project project = Project.getInstance();
			project.getMessageBus().connect().unsubscribe(panel);
			panel.dispose();
			// Eclipse Development Note 
			// Help to avoid multiple dispose calls 
			panel = null;
		}
	}
}
