package com.xliic.openapi.report.jcef;

import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.core.ui.jcef.CefLoadHandlerAdapter;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.openapi.services.HTMLService;

public class JCEFLoadHandlerAdapter extends CefLoadHandlerAdapter {

    @SuppressWarnings("unused")
	private final JBCefJSQuery myJSQueryOpenInBrowser;

    public JCEFLoadHandlerAdapter(JBCefJSQuery myJSQueryOpenInBrowser) {
        this.myJSQueryOpenInBrowser = myJSQueryOpenInBrowser;
    }

    @Override
    public void onLoadingStateChange(CefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward) {
        HTMLService htmlService = HTMLService.getInstance();
        browser.executeJavaScript(htmlService.MAIN_JS, browser.getURL(), 0);
    }
}
