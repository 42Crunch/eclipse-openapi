package com.xliic.openapi.report.html;

import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.themes.ITheme;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventHandler;

@SuppressWarnings("restriction")
public class HTMLReportLAFListener implements EventHandler {

	private ITheme currentTheme;
	private IWorkbench workbench;
	private org.eclipse.e4.ui.css.swt.theme.ITheme currentCSSTheme;
	private IThemeEngine themeEngine;
	private HTMLReportManager manager;
  
	public HTMLReportLAFListener(IWorkbench workbench, HTMLReportManager manager) {
	    this.workbench = workbench;
	    themeEngine = workbench.getService(IThemeEngine.class);
	    this.manager = manager;    
		currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
		currentCSSTheme = getActiveTheme();
	    manager.updateCssRules(isDarkTheme());
	}

	@Override
	public void handleEvent(Event event) {
		if (isAnyThemeChanged()) {
			currentTheme = (ITheme) workbench.getThemeManager().getCurrentTheme();
			currentCSSTheme = getActiveTheme();
		    manager.updateCssRules(isDarkTheme());
		}
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
		String label = currentCSSTheme.getLabel();
		return (label != null) && label.contains("Dark");
	}
}