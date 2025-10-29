package com.xliic.openapi.capture.jcef;

import java.util.List;
import java.util.Objects;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.capture.CaptureListener;
import com.xliic.openapi.capture.jcef.messages.SaveCapture;
import com.xliic.openapi.capture.jcef.messages.SetCaptureToken;
import com.xliic.openapi.capture.jcef.messages.ShowCaptureWindow;
import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowGeneralError;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;
import com.xliic.openapi.webapp.http.HttpResponseListener;
import com.xliic.openapi.webapp.http.ShowHttpError;
import com.xliic.openapi.webapp.http.ShowHttpResponse;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

public class JCEFCapturePanel extends WebFileEditor implements CaptureListener, HttpResponseListener, Disposable {

    public JCEFCapturePanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(CaptureListener.TOPIC, this);
        connection.subscribe(HttpResponseListener.TOPIC, this);
    }
    
    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFCaptureFunction(project, myId, browser, name);
    }

    @Override
    public void showCaptureWindow(@NotNull List<CaptureItem> items) {
    	new LoadConfig(new Config()).send(getCefBrowser());
        new ShowCaptureWindow(items).send(getCefBrowser());
    }
    
    @Override
    public void setCaptureToken(@NotNull String token) {
        new SetCaptureToken(token).send(getCefBrowser());
    }

    @Override
    public void showGeneralError(@NotNull String message, @Nullable String details) {
        new ShowGeneralError(message, null, details).send(getCefBrowser());
    }

    @Override
    public void saveCapture(@NotNull CaptureItem item) {
        new SaveCapture(item).send(getCefBrowser());
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
