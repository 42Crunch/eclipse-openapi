package com.xliic.core.ui.jcef;

import java.util.function.Function;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.jcef.JBCefJSQuery.Response;

public abstract class JBCefBrowserBase {
	
	protected final @NotNull CefBrowser browser;
	protected final @NotNull JBCefClient client;
	
	public JBCefBrowserBase(@NotNull Composite parent) {
		browser = new CefBrowser(parent);
		client = new JBCefClient();
	}
	
	public void addLocationListener(final @NotNull Function<? super String, ? extends Response> handler) {
		browser.addLocationListener(handler);
	}
	
	public void removeLocationListener() {
		browser.removeLocationListener();
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
