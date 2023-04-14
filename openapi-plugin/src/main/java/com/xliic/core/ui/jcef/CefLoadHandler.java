package com.xliic.core.ui.jcef;

public interface CefLoadHandler {

    void onLoadingStateChange(JBCefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward);
}
