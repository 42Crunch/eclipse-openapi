package com.xliic.openapi.tree;

import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.themes.ITheme;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventHandler;

import com.xliic.openapi.tree.ui.OpenAPITreeView;

@SuppressWarnings("restriction")
public class OpenAPILAFListener implements EventHandler {

  private ITheme currentTheme;
  private IWorkbench workbench;
  private org.eclipse.e4.ui.css.swt.theme.ITheme currentCSSTheme;
  private IThemeEngine themeEngine;
  private OpenAPITreeView view;
  private Composite parent;
  
  public OpenAPILAFListener(IWorkbench workbench, OpenAPITreeView view, Composite parent) {
    this.workbench = workbench;
    this.parent = parent;
    themeEngine = workbench.getService(IThemeEngine.class);
    this.view = view;
	currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
	currentCSSTheme = getActiveTheme();
	view.handleLAFUpdate(isDarkTheme());
  }

	@Override
	public void handleEvent(Event event) {
		if (isAnyThemeChanged()) {
			currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
			currentCSSTheme = getActiveTheme();
		    view.handleLAFUpdate(isDarkTheme());
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