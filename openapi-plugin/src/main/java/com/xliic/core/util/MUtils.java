package com.xliic.core.util;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.e4.ui.model.application.MApplication;
import org.eclipse.e4.ui.model.application.ui.basic.MWindow;
import org.eclipse.e4.ui.model.application.ui.menu.MHandledMenuItem;
import org.eclipse.e4.ui.model.application.ui.menu.MMenu;
import org.eclipse.e4.ui.model.application.ui.menu.MMenuElement;
import org.eclipse.e4.ui.model.application.ui.menu.MMenuItem;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.Workbench;

@SuppressWarnings("restriction")
public class MUtils {
	
	private static final String INTERNAL_ACTIONS_PREFIX = "com.xliic.openapi.actions.internal"; 
	
	public static void activateMenuInternalActions(boolean activate) {
		List<MMenuItem> items = new LinkedList<>();
		Workbench workbench = (Workbench) PlatformUI.getWorkbench();
		MApplication application = workbench.getApplication();
		for (MWindow window : application.getChildren()) {
        	MMenu menu = window.getMainMenu();
        	if (menu != null) {
            	findAction(menu, items);
        	}
		}
		for (MMenuItem item : items) {
	    	item.setEnabled(activate);
	    	item.setVisible(activate);
	    	item.setToBeRendered(activate);
		}
	}

	private static void findAction(MMenu menu, List<MMenuItem> items) {
		for (MMenuElement item : menu.getChildren()) {
			if (item instanceof MMenuItem) {
				MMenuItem mmi = (MMenuItem) item;
				if (mmi.getElementId() != null && mmi.getElementId().startsWith(INTERNAL_ACTIONS_PREFIX)) {
					items.add(mmi);
				} else if (mmi instanceof MHandledMenuItem) {
					MHandledMenuItem mhmi = (MHandledMenuItem) mmi;
					if (mhmi.getCommand() != null && mhmi.getCommand().getElementId().startsWith(INTERNAL_ACTIONS_PREFIX)) {
						items.add(mmi);
					}
				}
			} else if (item instanceof MMenu) {
				findAction((MMenu) item, items);
			}
		}
	}
}
