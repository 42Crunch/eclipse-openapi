package com.xliic.core.ui.jcef;

import java.util.function.Function;

import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.Browser;
import org.eclipse.swt.browser.LocationEvent;
import org.eclipse.swt.browser.LocationListener;
import org.eclipse.swt.browser.ProgressEvent;
import org.eclipse.swt.browser.ProgressListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.jcef.JBCefJSQuery.Response;

public class CefBrowser {

	private final Browser browser;
	private boolean loadingStage;
	private ProgressListener progressListener;
	private LocationListener locationListener;
	
	public CefBrowser(@NotNull Composite parent) {
		browser = new Browser(parent, SWT.NONE);
		browser.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
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
    	loadingStage = true;
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
		    	loadingStage = false;
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
    
	public void addLocationListener(final @NotNull Function<? super String, ? extends Response> handler) {
    	locationListener = new LocationListener() {
			@Override
			public void changing(LocationEvent event) {
				String href = event.location;
                if (!href.isEmpty() && !"about:blank".equals(href)) {
                	if (href.startsWith("about:data-issue-id=")) {
                		href = href.replace("about:data-issue-id=", "file:///jbcefbrowser/data-issue-id=");
                	} 
                	else if ("about:go-full-report".equals(href)) {
                		href = "file:///jbcefbrowser/go-full-report";
                	}
                	handler.apply(href);
                }
                event.doit = loadingStage;
			}
			@Override
			public void changed(LocationEvent event) {}
    	};
    	browser.addLocationListener(locationListener);
	}
	
	public void removeLocationListener() {
    	if (locationListener != null) {
    		if (!browser.isDisposed()) {
    			browser.removeLocationListener(locationListener);
    		}
    		locationListener = null;
    	}
	}
	
	public void dispose() {
		if (!browser.isDisposed()) {
			browser.dispose();
		}
	}
}
