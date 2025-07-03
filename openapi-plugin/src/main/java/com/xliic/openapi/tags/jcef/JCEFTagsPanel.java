package com.xliic.openapi.tags.jcef;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.tags.TagsListener;
import com.xliic.openapi.tags.jcef.messages.LoadTags;
import com.xliic.openapi.tags.jcef.messages.SaveTags;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;
import com.xliic.openapi.webapp.http.HttpResponseListener;
import com.xliic.openapi.webapp.http.ShowHttpError;
import com.xliic.openapi.webapp.http.ShowHttpResponse;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import java.util.Map;
import java.util.Objects;

public class JCEFTagsPanel extends WebFileEditor implements TagsListener, HttpResponseListener, Disposable {

    public JCEFTagsPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
    	super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(TagsListener.TOPIC, this);
        connection.subscribe(HttpResponseListener.TOPIC, this);
    }

    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFTagsFunction(project, myId, cache, browser, name);
    }

    @Override
    public void showTags(@NotNull Config config, @NotNull String targetFileName, @NotNull Map<String, Object> tagData) {
        new LoadConfig(config).send(getCefBrowser());
        cache.put(SaveTags.TARGET_FILE_PATH, targetFileName);
        new LoadTags(targetFileName, tagData).send(getCefBrowser());
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
