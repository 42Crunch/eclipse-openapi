package com.xliic.core.ui.jcef;

public interface CefLoadHandler {

    void onLoadingStateChange(CefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward);
}
