package com.xliic.openapi.config.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.jcef.messages.ShowOverlordConnectionTest;
import com.xliic.openapi.config.jcef.messages.ShowPlatformConnectionTest;
import com.xliic.openapi.config.jcef.messages.ShowScandManagerConnectionTest;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.webapp.WebApp;

public class JCEFConfigPanel extends WebApp implements ConfigListener, Disposable {

    public JCEFConfigPanel(@NotNull Project project,
            			   @NotNull ToolWindow toolWindow,
            			   @NotNull Composite parent,
            			   @NotNull ViewPartHandler handler) {
    	super(project, toolWindow, "config", parent, handler);
        project.getMessageBus().connect().subscribe(ConfigListener.TOPIC, this);
    }

    @Override
    protected void onLoadEnd() {
    	loadConfig(new Config());
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFConfigFunction(project, cache, browser, name);
    }

    @Override
    public void loadConfig(@NotNull Config config) {
        new LoadConfig(config).send(getCefBrowser());
    }

    @Override
    public void showPlatformConnectionTest(boolean success, @NotNull String message) {
        new ShowPlatformConnectionTest(success, message).send(getCefBrowser());
    }

    @Override
    public void showOverlordConnectionTest(boolean success, @NotNull String message) {
        new ShowOverlordConnectionTest(success, message).send(getCefBrowser());
    }

    @Override
    public void showScandManagerConnectionTest(boolean success, @NotNull String message) {
        new ShowScandManagerConnectionTest(success, message).send(getCefBrowser());
    }
}
