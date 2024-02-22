package com.xliic.openapi.webapp;

import static com.xliic.openapi.webapp.scheme.SchemeHandlerFactory.DOMAIN;
import static com.xliic.openapi.webapp.scheme.SchemeHandlerFactory.HTTP_SCHEMA_PREFIX;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.CefApp;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.ui.UIManager;
import com.xliic.core.ui.jcef.CefLoadHandlerAdapter;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.webapp.messages.ChangeTheme;
import com.xliic.openapi.webapp.scheme.SchemeHandlerFactory;

public abstract class WebApp extends JBCefBrowser implements LafManagerListener {

    @NotNull
	private static final SchemeHandlerFactory SCHEME_HANDLER_FACTORY = new SchemeHandlerFactory();
    @NotNull
    private static final String DOM_CONTENT_LOADED_JS = "window.fireDOMContentLoaded();";
    private static boolean regShFactory = true;

    @NotNull
    protected final Project project;
    @NotNull
    protected final String myId;
    @NotNull
    protected final String resourceId;
    @NotNull
    private final MessageBusConnection connection;
    @Nullable
    protected UIManager manager;

    @NotNull
    private final CefLoadHandlerAdapter loadHandler;
    @Nullable
    private final BrowserFunction fun;
    @NotNull
    protected final Map<String, Object> cache = new HashMap<>();

    public WebApp(@NotNull Project project,
    	          @NotNull String id,
                  @NotNull String resourceId,
                  @NotNull Composite parent,
                  @NotNull ViewPartHandler handler) {
        super(parent);
        this.project = project;
        this.myId = id;
        this.resourceId = resourceId;
        fun = getBrowserFunction(getBrowser(), SchemeHandlerFactory.getBrowserFunctionName(resourceId));
        final WebApp thisApp = this;
        loadHandler = new CefLoadHandlerAdapter() {
            @Override
            public void onLoadingStateChange(JBCefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward) {
                if (!isLoading) {
                    browser.executeJavaScript(DOM_CONTENT_LOADED_JS, browser.getURL(), 0);
                    new ChangeTheme(manager).send(getCefBrowser());
                    ApplicationManager.getApplication().getMessageBus().connect().subscribe(LafManagerListener.TOPIC, thisApp);
                    WebApp.this.onLoadEnd();
                    handler.onReady();
                }
            }
        };
        connection = project.getMessageBus().connect();
        subscribe(connection);
        getJBCefClient().addLoadHandler(loadHandler);
        CefApp cefApp = CefApp.getInstance();
        if (regShFactory && cefApp != null) {
            cefApp.registerSchemeHandlerFactory(SchemeHandlerFactory.PROTOCOL, DOMAIN, SCHEME_HANDLER_FACTORY);
            regShFactory = false;
        }
        ApplicationManager.getApplication().invokeAndWait(() -> {
        	manager = UIManager.getInstance();
            SCHEME_HANDLER_FACTORY.setUIManager(manager);
            loadURL(HTTP_SCHEMA_PREFIX + resourceId + ".html");
        });
    }

    @Nullable
    protected abstract BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name);
    protected abstract void subscribe(@NotNull MessageBusConnection connection);
    protected void onLoadEnd() {}

    @Override
    public void dispose() {
        super.dispose();
        cache.clear();
        connection.disconnect(this);
        getJBCefClient().removeLoadHandler(loadHandler);
        // Browser function is already disposed by chromium
    }

    @Override
    public void lookAndFeelChanged(@NotNull LafManager source) {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            new ChangeTheme(manager).send(getCefBrowser());
        });
    }
    
    public String getId() {
        return myId;
    }
}
