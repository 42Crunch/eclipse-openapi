package com.xliic.core.ui.jcef;

import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.ProgressEvent;
import org.eclipse.swt.browser.ProgressListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;

public class CefBrowser {

	private final Browser browser;
	private ProgressListener progressListener;
	
	public CefBrowser(@NotNull Composite parent) {
		browser = new Browser(parent, SWT.NONE);
		browser.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		browser.setJavascriptEnabled(true);
	}
	
	public Browser getBrowser() {
		return browser;
	}
	
    public String getURL() {
    	return "about:blank";
    }
    
    public void executeJavaScript(String js, String url, int index) {
    	if (!browser.isDisposed()) {
    		browser.execute(js);	
    	}
    }
    
    public void reloadHTML() {
    	loadHTML(browser.getText());
    }
    
    public final void loadHTML(@NotNull String html) {
    	if (!browser.isDisposed()) {
    		browser.setText(html);
    	}
    }
    
    public void addProgressListener(@NotNull CefLoadHandler handler) {
    	final CefBrowser myCefBrowser = this;
		progressListener = new ProgressListener() {
			@Override
			public void changed(ProgressEvent event) {}

			@Override
			public void completed(ProgressEvent event) {
				handler.onLoadingStateChange(myCefBrowser, false, false, false);
			}			
		};
		browser.addProgressListener(progressListener);
    }
    
    public void removeProgressListener(@NotNull CefLoadHandler handler) {
    	if (progressListener != null) {
    		if (!browser.isDisposed()) {
    			browser.removeProgressListener(progressListener);
    		}
    		progressListener = null;
    	}
    }
	
	public void dispose() {
		if (!browser.isDisposed()) {
			browser.dispose();
		}
	}
}
