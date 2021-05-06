package com.xliic.openapi.tree;

import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.themes.ITheme;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventHandler;

@SuppressWarnings("restriction")
public class OpenAPILAFListener implements EventHandler {

  private ITheme currentTheme;
  private IWorkbench workbench;
  private org.eclipse.e4.ui.css.swt.theme.ITheme currentCSSTheme;
  private IThemeEngine themeEngine;
  private PanelManager manager;
  private Composite parent;
  
  public OpenAPILAFListener(IWorkbench workbench, PanelManager manager, Composite parent) {
    this.workbench = workbench;
    this.parent = parent;
    themeEngine = workbench.getService(IThemeEngine.class);
    this.manager = manager;
	currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
	currentCSSTheme = getActiveTheme();
	manager.handleLAFUpdate(isDarkTheme());
  }

	@Override
	public void handleEvent(Event event) {
		if (isAnyThemeChanged()) {
			currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
			currentCSSTheme = getActiveTheme();
		    manager.handleLAFUpdate(isDarkTheme());
		}
	}
	
	public void refresh() {
		themeEngine.applyStyles(parent, true);
	}

	private boolean isAnyThemeChanged() {
		return currentTheme != workbench.getThemeManager().getCurrentTheme() || currentCSSTheme != getActiveTheme();
	}

	private org.eclipse.e4.ui.css.swt.theme.ITheme getActiveTheme() {
		if (themeEngine != null) {
			return themeEngine.getActiveTheme();
		}
		return null;
	}

  private boolean isDarkTheme() {
    return "Dark".equals(currentCSSTheme.getLabel());
  }
}