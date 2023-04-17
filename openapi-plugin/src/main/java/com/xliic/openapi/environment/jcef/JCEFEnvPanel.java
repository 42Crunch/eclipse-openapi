package com.xliic.openapi.environment.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.environment.jcef.messages.LoadEnv;
import com.xliic.openapi.webapp.WebApp;

public class JCEFEnvPanel extends WebApp implements EnvListener, Disposable {

    public JCEFEnvPanel(@NotNull Project project,
                        @NotNull ToolWindow toolWindow,
                        @NotNull Composite parent,
                        @NotNull ViewPartHandler handler) {
        super(project, toolWindow, "environment", parent, handler);
        project.getMessageBus().connect().subscribe(EnvListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFEnvFunction(project, browser, name);
    }

    @Override
    protected void onLoadEnd() {
        EnvService envService = EnvService.getInstance(project);
        loadEnv(envService.getEnv());
    }

    @Override
    public void loadEnv(@NotNull Environment env) {
        new LoadEnv(env).send(getCefBrowser());
    }

    @Override
    public void updateEnv(@NotNull Environment env) {
        loadEnv(env);
    }
}
