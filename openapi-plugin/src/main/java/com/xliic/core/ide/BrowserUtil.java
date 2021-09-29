package com.xliic.core.ide;

import java.net.URL;
import org.jetbrains.annotations.NotNull;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.browser.IWebBrowser;
import org.eclipse.ui.browser.IWorkbenchBrowserSupport;

public class BrowserUtil {
	
	public static void browse(@NotNull URL url) {
		
        IWorkbenchBrowserSupport browserSupport = PlatformUI.getWorkbench().getBrowserSupport();
        try {
        	// int style, String browserId, String name, String tooltip
        	IWebBrowser browser = browserSupport.createBrowser(IWorkbenchBrowserSupport.AS_EXTERNAL, "testId", null, null); //(IWorkbenchBrowserSupport.AS_EDITOR, url, null, url);
        	browser.openURL(url);
        } 
        catch (Exception e) {
        	e.printStackTrace();
        }
	}
}
