package com.xliic.openapi.config.jcef;

import java.util.Objects;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.jcef.messages.ShowCliDownload;
import com.xliic.openapi.config.jcef.messages.ShowCliTest;
import com.xliic.openapi.config.jcef.messages.ShowOverlordConnectionTest;
import com.xliic.openapi.config.jcef.messages.ShowPlatformConnectionTest;
import com.xliic.openapi.config.jcef.messages.ShowScandManagerConnectionTest;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;
import com.xliic.openapi.webapp.http.HttpResponseListener;
import com.xliic.openapi.webapp.http.ShowHttpError;
import com.xliic.openapi.webapp.http.ShowHttpResponse;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

public class JCEFConfigPanel extends WebFileEditor implements ConfigListener, HttpResponseListener, Disposable {

    public JCEFConfigPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(ConfigListener.TOPIC, this);
        connection.subscribe(HttpResponseListener.TOPIC, this);
    }

    @Override
    protected void onLoadEnd() {
    	loadConfig(new Config());
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFConfigFunction(project, myId, cache, browser, name);
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
    
    @Override
    public void showCliDownload(boolean success, @Nullable String value) {
        new ShowCliDownload(success, value).send(getCefBrowser());
    }

    @Override
    public void showCliDownload(@NotNull Progress progress) {
        new ShowCliDownload(progress).send(getCefBrowser());
    }

    @Override
    public void showCliTest(boolean success, @Nullable String value) {
        new ShowCliTest(success, value).send(getCefBrowser());
    }
    
    @Override
    public void showHttpResponse(@NotNull String webAppId, @NotNull HttpResponse payload) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ShowHttpResponse(payload).send(getCefBrowser());
    }

    @Override
    public void showHttpError(@NotNull String webAppId, @NotNull HttpError payload) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ShowHttpError(payload).send(getCefBrowser());
    }
}
