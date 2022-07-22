package com.xliic.openapi.report.jcef;

import com.xliic.core.project.Project;
import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.core.ui.jcef.CefLoadHandlerAdapter;
import com.xliic.core.ui.jcef.JBCefBrowserBase;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.openapi.services.HTMLService;

import org.jetbrains.annotations.NotNull;

import java.util.function.Function;

public class JCEFLoadHandlerAdapter extends CefLoadHandlerAdapter {

    @SuppressWarnings("unused")
	private final Function<? super String, ? extends JBCefJSQuery.Response> handler;
    private final JCEFReportPanel panel;

    public JCEFLoadHandlerAdapter(@NotNull Project project, @NotNull JCEFReportPanel panel) {
    	JBCefBrowserBase bBase = (JBCefBrowserBase) panel;
        handler = new JCEFPostMessageListener(project, bBase.getCefBrowser().getBrowser());
        this.panel = panel;
    }

    public void dispose() {}

    @Override
    public void onLoadingStateChange(CefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward) {
        if (!isLoading) {
        	HTMLService.getInstance().initWebJS(browser);
            panel.updateLastReport();
        }
    }
}
