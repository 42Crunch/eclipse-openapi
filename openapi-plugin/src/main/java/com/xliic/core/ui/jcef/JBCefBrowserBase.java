package com.xliic.core.ui.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

public abstract class JBCefBrowserBase {
	
	protected final @NotNull CefBrowser browser;
	protected final @NotNull JBCefClient client;
	
	public JBCefBrowserBase(@NotNull Composite parent) {
		browser = new CefBrowser(parent);
		client = new JBCefClient();
	}

	public final @NotNull CefBrowser getCefBrowser() {
		return browser;
	}
	
    public final @NotNull JBCefClient getJBCefClient() {
    	return client;
    }
	
    public final void loadHTML(@NotNull String html) {
    	browser.loadHTML(html);
    }
    
	public void dispose() {
		browser.dispose();
		client.dispose();
	}
}
