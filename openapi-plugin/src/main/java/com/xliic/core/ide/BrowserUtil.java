package com.xliic.core.ide;

import java.net.MalformedURLException;
import java.net.URL;

import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.browser.IWebBrowser;
import org.eclipse.ui.browser.IWorkbenchBrowserSupport;
import org.jetbrains.annotations.NonNls;
import org.jetbrains.annotations.NotNull;

public class BrowserUtil {

    public static void browse(@NonNls @NotNull String url) {
        try {
            browse(new URL(url));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public static void browse(@NotNull URL url) {
        IWorkbenchBrowserSupport browserSupport = PlatformUI.getWorkbench().getBrowserSupport();
        try {
            IWebBrowser browser = browserSupport.createBrowser(IWorkbenchBrowserSupport.AS_EXTERNAL, "testId", null, null);
            browser.openURL(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
