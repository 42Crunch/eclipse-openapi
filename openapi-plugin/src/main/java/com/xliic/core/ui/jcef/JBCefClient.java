package com.xliic.core.ui.jcef;

import org.jetbrains.annotations.NotNull;

public class JBCefClient {

    public JBCefClient addLoadHandler(@NotNull CefLoadHandler handler, @NotNull CefBrowser browser) {
        browser.addProgressListener(handler);
        return this;
    }

    public void removeLoadHandler(@NotNull CefLoadHandler handler, @NotNull CefBrowser browser) {
        browser.removeProgressListener(handler);
    }

    public void dispose() {
    }
}
